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
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  googleAuthId: "exampleGoogleAuthId",
  id: "exampleId",
  lastName: "exampleLastName",
  name: "exampleName",
  password: "examplePassword",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  registeredAt: new Date(),
  status: "exampleStatus",
  umsId: "exampleUmsId",
  updatedAt: new Date(),
  username: "exampleUsername",
  usrAddress: "exampleUsrAddress",
  usrDeletedAt: new Date(),
  usrGoogleAuthId: "exampleUsrGoogleAuthId",
  usrName: "exampleUsrName",
  usrPasswordHash: "exampleUsrPasswordHash",
  usrPhoneNumber: "exampleUsrPhoneNumber",
  usrRegisteredAt: new Date(),
  usrStatus: "exampleUsrStatus",
  usrUmsId: "exampleUsrUmsId",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  googleAuthId: "exampleGoogleAuthId",
  id: "exampleId",
  lastName: "exampleLastName",
  name: "exampleName",
  password: "examplePassword",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  registeredAt: new Date(),
  status: "exampleStatus",
  umsId: "exampleUmsId",
  updatedAt: new Date(),
  username: "exampleUsername",
  usrAddress: "exampleUsrAddress",
  usrDeletedAt: new Date(),
  usrGoogleAuthId: "exampleUsrGoogleAuthId",
  usrName: "exampleUsrName",
  usrPasswordHash: "exampleUsrPasswordHash",
  usrPhoneNumber: "exampleUsrPhoneNumber",
  usrRegisteredAt: new Date(),
  usrStatus: "exampleUsrStatus",
  usrUmsId: "exampleUsrUmsId",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    createdAt: new Date(),
    deletedAt: new Date(),
    email: "exampleEmail",
    firstName: "exampleFirstName",
    googleAuthId: "exampleGoogleAuthId",
    id: "exampleId",
    lastName: "exampleLastName",
    name: "exampleName",
    password: "examplePassword",
    passwordHash: "examplePasswordHash",
    phoneNumber: "examplePhoneNumber",
    registeredAt: new Date(),
    status: "exampleStatus",
    umsId: "exampleUmsId",
    updatedAt: new Date(),
    username: "exampleUsername",
    usrAddress: "exampleUsrAddress",
    usrDeletedAt: new Date(),
    usrGoogleAuthId: "exampleUsrGoogleAuthId",
    usrName: "exampleUsrName",
    usrPasswordHash: "exampleUsrPasswordHash",
    usrPhoneNumber: "exampleUsrPhoneNumber",
    usrRegisteredAt: new Date(),
    usrStatus: "exampleUsrStatus",
    usrUmsId: "exampleUsrUmsId",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  deletedAt: new Date(),
  email: "exampleEmail",
  firstName: "exampleFirstName",
  googleAuthId: "exampleGoogleAuthId",
  id: "exampleId",
  lastName: "exampleLastName",
  name: "exampleName",
  password: "examplePassword",
  passwordHash: "examplePasswordHash",
  phoneNumber: "examplePhoneNumber",
  registeredAt: new Date(),
  status: "exampleStatus",
  umsId: "exampleUmsId",
  updatedAt: new Date(),
  username: "exampleUsername",
  usrAddress: "exampleUsrAddress",
  usrDeletedAt: new Date(),
  usrGoogleAuthId: "exampleUsrGoogleAuthId",
  usrName: "exampleUsrName",
  usrPasswordHash: "exampleUsrPasswordHash",
  usrPhoneNumber: "exampleUsrPhoneNumber",
  usrRegisteredAt: new Date(),
  usrStatus: "exampleUsrStatus",
  usrUmsId: "exampleUsrUmsId",
};

const service = {
  createUser() {
    return CREATE_RESULT;
  },
  users: () => FIND_MANY_RESULT,
  user: ({ where }: { where: { id: string } }) => {
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

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
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

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        registeredAt: CREATE_RESULT.registeredAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        usrDeletedAt: CREATE_RESULT.usrDeletedAt.toISOString(),
        usrRegisteredAt: CREATE_RESULT.usrRegisteredAt.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletedAt: FIND_MANY_RESULT[0].deletedAt.toISOString(),
          registeredAt: FIND_MANY_RESULT[0].registeredAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          usrDeletedAt: FIND_MANY_RESULT[0].usrDeletedAt.toISOString(),
          usrRegisteredAt: FIND_MANY_RESULT[0].usrRegisteredAt.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletedAt: FIND_ONE_RESULT.deletedAt.toISOString(),
        registeredAt: FIND_ONE_RESULT.registeredAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        usrDeletedAt: FIND_ONE_RESULT.usrDeletedAt.toISOString(),
        usrRegisteredAt: FIND_ONE_RESULT.usrRegisteredAt.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletedAt: CREATE_RESULT.deletedAt.toISOString(),
        registeredAt: CREATE_RESULT.registeredAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        usrDeletedAt: CREATE_RESULT.usrDeletedAt.toISOString(),
        usrRegisteredAt: CREATE_RESULT.usrRegisteredAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
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
