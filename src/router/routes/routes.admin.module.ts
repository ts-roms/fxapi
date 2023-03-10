import { Module } from '@nestjs/common';
import { ApiKeyModule } from 'src/common/api-key/api-key.module';
import { ApiKeyAdminController } from 'src/common/api-key/controllers/api-key.admin.controller';
import { AuthModule } from 'src/common/auth/auth.module';
import { SettingAdminController } from 'src/common/setting/controllers/setting.admin.controller';
import { BranchModule } from 'src/modules/system/branch/branch.module';
import { EmployeeModule } from 'src/modules/system/employee/employee.module';
import { PermissionAdminController } from 'src/modules/permission/controllers/permission.admin.controller';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleAdminController } from 'src/modules/role/controllers/role.admin.controller';
import { RoleModule } from 'src/modules/role/role.module';
import { UserAdminController } from 'src/modules/user/controllers/user.admin.controller';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  controllers: [
    SettingAdminController,
    PermissionAdminController,
    RoleAdminController,
    UserAdminController,
    ApiKeyAdminController,
  ],
  providers: [],
  exports: [],
  imports: [
    PermissionModule,
    RoleModule,
    UserModule,
    AuthModule,
    ApiKeyModule,
    EmployeeModule,
    BranchModule
  ],
})
export class RoutesAdminModule { }
