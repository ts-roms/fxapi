import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ContactDetailsEntity, ContactDetailsSchema } from './entities/contact-details.entity';
import { EmployeeEntity, EmployeeSchema } from './entities/employee.entity';
import { EmploymentEntity, EmploymentSchema } from './entities/employment.entity';
import { ContactDetailsRepository } from './repositories/contact-details.repository';
import { EmployeeRepository } from './repositories/employee.repository';
import { EmploymentRepository } from './repositories/employment.repository';

@Module({
  providers: [
    EmployeeRepository,
    EmploymentRepository,
    ContactDetailsRepository
  ],
  exports: [
    EmployeeRepository,
    EmploymentRepository,
    ContactDetailsRepository
  ],
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: EmployeeEntity.name,
          schema: EmployeeSchema
        },
        {
          name: ContactDetailsEntity.name,
          schema: ContactDetailsSchema
        },
        {
          name: EmploymentEntity.name,
          schema: EmploymentSchema
        }
      ],
      DATABASE_CONNECTION_NAME
    )
  ]
})
export class EmployeeRepositoryModule { }