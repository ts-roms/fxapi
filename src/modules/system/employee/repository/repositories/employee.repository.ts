import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { EmployeeEntity } from "../entities/employee.entity";


@Injectable()
export class EmployeeRepository extends DatabaseMongoUUIDRepositoryAbstract<EmployeeEntity> {
    /**
     *
     */
    constructor(
        @DatabaseModel(EmployeeEntity.name)
        private readonly employeeModel: Model<EmployeeEntity>
    ) { 
      super(employeeModel) 
    }
}