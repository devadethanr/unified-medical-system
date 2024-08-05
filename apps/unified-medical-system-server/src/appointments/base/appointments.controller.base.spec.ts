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
import { AppointmentsController } from "../appointments.controller";
import { AppointmentsService } from "../appointments.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  apAppointmentNotes: "exampleApAppointmentNotes",
  apAppointmentSpecialization: "exampleApAppointmentSpecialization",
  apAppointmentStatus: "exampleApAppointmentStatus",
  apDateTime: new Date(),
  apDisabilityCertificateId: "exampleApDisabilityCertificateId",
  apDoctorId: "exampleApDoctorId",
  apPatientId: "exampleApPatientId",
  apRolesId: 42,
  apStatus: "exampleApStatus",
  createdAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  apAppointmentNotes: "exampleApAppointmentNotes",
  apAppointmentSpecialization: "exampleApAppointmentSpecialization",
  apAppointmentStatus: "exampleApAppointmentStatus",
  apDateTime: new Date(),
  apDisabilityCertificateId: "exampleApDisabilityCertificateId",
  apDoctorId: "exampleApDoctorId",
  apPatientId: "exampleApPatientId",
  apRolesId: 42,
  apStatus: "exampleApStatus",
  createdAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    apAppointmentNotes: "exampleApAppointmentNotes",
    apAppointmentSpecialization: "exampleApAppointmentSpecialization",
    apAppointmentStatus: "exampleApAppointmentStatus",
    apDateTime: new Date(),
    apDisabilityCertificateId: "exampleApDisabilityCertificateId",
    apDoctorId: "exampleApDoctorId",
    apPatientId: "exampleApPatientId",
    apRolesId: 42,
    apStatus: "exampleApStatus",
    createdAt: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  apAppointmentNotes: "exampleApAppointmentNotes",
  apAppointmentSpecialization: "exampleApAppointmentSpecialization",
  apAppointmentStatus: "exampleApAppointmentStatus",
  apDateTime: new Date(),
  apDisabilityCertificateId: "exampleApDisabilityCertificateId",
  apDoctorId: "exampleApDoctorId",
  apPatientId: "exampleApPatientId",
  apRolesId: 42,
  apStatus: "exampleApStatus",
  createdAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  createAppointments() {
    return CREATE_RESULT;
  },
  appointmentsItems: () => FIND_MANY_RESULT,
  appointments: ({ where }: { where: { id: string } }) => {
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

describe("Appointments", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AppointmentsService,
          useValue: service,
        },
      ],
      controllers: [AppointmentsController],
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

  test("POST /appointments", async () => {
    await request(app.getHttpServer())
      .post("/appointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        apDateTime: CREATE_RESULT.apDateTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /appointments", async () => {
    await request(app.getHttpServer())
      .get("/appointments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          apDateTime: FIND_MANY_RESULT[0].apDateTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /appointments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /appointments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/appointments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        apDateTime: FIND_ONE_RESULT.apDateTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /appointments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/appointments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        apDateTime: CREATE_RESULT.apDateTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/appointments")
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
