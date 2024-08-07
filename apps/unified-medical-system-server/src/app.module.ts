import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { LoginModule } from "./login/login.module";
import { RolesModule } from "./roles/roles.module";
import { DiseaseOutbreaksModule } from "./diseaseOutbreaks/diseaseOutbreaks.module";
import { LabResultsModule } from "./labResults/labResults.module";
import { PatientDetailsModule } from "./patientDetails/patientDetails.module";
import { PatientsModule } from "./patients/patients.module";
import { SymptomsModule } from "./symptoms/symptoms.module";
import { ComplaintsModule } from "./complaints/complaints.module";
import { DoctorsModule } from "./doctors/doctors.module";
import { HospitalsModule } from "./hospitals/hospitals.module";
import { DoctorDetailsModule } from "./doctorDetails/doctorDetails.module";
import { AppointmentsModule } from "./appointments/appointments.module";
import { FeedbacksModule } from "./feedbacks/feedbacks.module";
import { MedicalRecordsModule } from "./medicalRecords/medicalRecords.module";
import { HospitalDetailsModule } from "./hospitalDetails/hospitalDetails.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    LoginModule,
    RolesModule,
    DiseaseOutbreaksModule,
    LabResultsModule,
    PatientDetailsModule,
    PatientsModule,
    SymptomsModule,
    ComplaintsModule,
    DoctorsModule,
    HospitalsModule,
    DoctorDetailsModule,
    AppointmentsModule,
    FeedbacksModule,
    MedicalRecordsModule,
    HospitalDetailsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
