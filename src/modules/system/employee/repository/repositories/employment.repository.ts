import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { EmploymentEntity } from "../entities/employment.entity";


export class EmploymentRepository extends DatabaseMongoUUIDRepositoryAbstract<EmploymentEntity> {

  /**
   *
   */
  constructor(
    @DatabaseModel(EmploymentEntity.name)
    private readonly employmentModel: Model<EmploymentEntity>
  ) {
    super(employmentModel);
  }

}