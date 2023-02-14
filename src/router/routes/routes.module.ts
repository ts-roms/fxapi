import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AuthModule } from 'src/common/auth/auth.module';
import { AwsModule } from 'src/common/aws/aws.module';
import { MessageController } from 'src/common/message/controllers/message.controller';
import { SettingController } from 'src/common/setting/controllers/setting.controller';
import { HealthController } from 'src/health/controllers/health.controller';
import { HealthModule } from 'src/health/health.module';
import { BranchModule } from 'src/modules/branch/branch.module';
import { BranchController } from 'src/modules/branch/controllers/branch.controller';
import { EmployeeController } from 'src/modules/employee/controllers/employee.controller';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { RoleModule } from 'src/modules/role/role.module';
import { UserController } from 'src/modules/user/controllers/user.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  controllers: [
    HealthController,
    SettingController,
    UserController,
    MessageController,
    EmployeeController,
    BranchController
  ],
  providers: [],
  exports: [],
  imports: [
    AwsModule,
    TerminusModule,
    UserModule,
    AuthModule,
    HealthModule,
    RoleModule,
    EmployeeModule,
    BranchModule
  ],
})
export class RoutesModule {}
