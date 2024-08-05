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
import { MedicalRecordsController } from "../medicalRecords.controller";
import { MedicalRecordsService } from "../medicalRecords.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  mrDateOfRecord: new Date(),
  mrDoctorId: "exampleMrDoctorId",
  mrDocumentType: "exampleMrDocumentType",
  mrHospitalDb: "exampleMrHospitalDb",
  mrPatientId: "exampleMrPatientId",
  mrRolesId: 42,
  mrStatus: "exampleMrStatus",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  mrDateOfRecord: new Date(),
  mrDoctorId: "exampleMrDoctorId",
  mrDocumentType: "exampleMrDocumentType",
  mrHospitalDb: "exampleMrHospitalDb",
  mrPatientId: "exampleMrPatientId",
  mrRolesId: 42,
  mrStatus: "exampleMrStatus",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    mrDateOfRecord: new Date(),
    mrDoctorId: "exampleMrDoctorId",
    mrDocumentType: "exampleMrDocumentType",
    mrHospitalDb: "exampleMrHospitalDb",
    mrPatientId: "exampleMrPatientId",
    mrRolesId: 42,
    mrStatus: "exampleMrStatus",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  mrDateOfRecord: new Date(),
  mrDoctorId: "exampleMrDoctorId",
  mrDocumentType: "exampleMrDocumentType",
  mrHospitalDb: "exampleMrHospitalDb",
  mrPatientId: "exampleMrPatientId",
  mrRolesId: 42,
  mrStatus: "exampleMrStatus",
  updatedAt: new Date(),
};

const service = {
  createMedicalRecords() {
    return CREATE_RESULT;
  },
  medicalRecordsItems: () => FIND_MANY_RESULT,
  medicalRecords: ({ where }: { where: { id: string } }) => {
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

describe("MedicalRecords", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MedicalRecordsService,
          useValue: service,
        },
      ],
      controllers: [MedicalRecordsController],
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

  test("POST /medicalRecords", async () => {
    await request(app.getHttpServer())
      .post("/medicalRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        mrDateOfRecord: CREATE_RESULT.mrDateOfRecord.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /medicalRecords", async () => {
    await request(app.getHttpServer())
      .get("/medicalRecords")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          mrDateOfRecord: FIND_MANY_RESULT[0].mrDateOfRecord.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /medicalRecords/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medicalRecords"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /medicalRecords/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/medicalRecords"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        mrDateOfRecord: FIND_ONE_RESULT.mrDateOfRecord.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /medicalRecords existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/medicalRecords")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        mrDateOfRecord: CREATE_RESULT.mrDateOfRecord.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/medicalRecords")
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
