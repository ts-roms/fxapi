import { Module } from '@nestjs/common';
import { EmployeeRepositoryModule } from './repository/employee.repository.module';
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [EmployeeRepositoryModule],
  exports: [EmployeeService],
  providers: [EmployeeService],
  controllers: [],
})
export class EmployeeModule { }