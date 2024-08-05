import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LabResultsController } from "../labResults.controller";
import { LabResultsService } from "../labResults.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  lbrLabTechnicianId: 42,
  lbrPatientId: "exampleLbrPatientId",
  lbrResultDate: new Date(),
  lbrRolesId: 42,
  lbrStatus: "exampleLbrStatus",
  lbrTestType: "exampleLbrTestType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  lbrLabTechnicianId: 42,
  lbrPatientId: "exampleLbrPatientId",
  lbrResultDate: new Date(),
  lbrRolesId: 42,
  lbrStatus: "exampleLbrStatus",
  lbrTestType: "exampleLbrTestType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    lbrLabTechnicianId: 42,
    lbrPatientId: "exampleLbrPatientId",
    lbrResultDate: new Date(),
    lbrRolesId: 42,
    lbrStatus: "exampleLbrStatus",
    lbrTestType: "exampleLbrTestType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  lbrLabTechnicianId: 42,
  lbrPatientId: "exampleLbrPatientId",
  lbrResultDate: new Date(),
  lbrRolesId: 42,
  lbrStatus: "exampleLbrStatus",
  lbrTestType: "exampleLbrTestType",
  updatedAt: new Date(),
};

const service = {
  createLabResults() {
    return CREATE_RESULT;
  },
  labResultsItems: () => FIND_MANY_RESULT,
  labResults: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("LabResults", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LabResultsService,
          useValue: service,
        },
      ],
      controllers: [LabResultsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /labResults", async () => {
    await request(app.getHttpServer())
      .post("/labResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lbrResultDate: CREATE_RESULT.lbrResultDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /labResults", async () => {
    await request(app.getHttpServer())
      .get("/labResults")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lbrResultDate: FIND_MANY_RESULT[0].lbrResultDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /labResults/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/labResults"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /labResults/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/labResults"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lbrResultDate: FIND_ONE_RESULT.lbrResultDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /labResults existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/labResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lbrResultDate: CREATE_RESULT.lbrResultDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/labResults")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
