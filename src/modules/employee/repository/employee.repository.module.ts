import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { EmployeeEntity, EmployeeSchema } from './entities/employee.entity';
import { EmployeeRepository } from './repositories/employee.repository';

@Module({
  providers: [EmployeeRepository],
  exports: [EmployeeRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: EmployeeEntity.name,
          schema: EmployeeSchema
        },
      ],
      DATABASE_CONNECTION_NAME
    )
  ]
})
export class EmployeeRepositoryModule { }