import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { BranchEntity } from "../entities/branch.entity";


export class BranchRepository extends DatabaseMongoUUIDRepositoryAbstract<BranchEntity> {
  /**
   *
   */
  constructor(
    @DatabaseModel(BranchEntity.name)
    private readonly branchModel: Model<BranchEntity>
  ) {
    super(branchModel);

  }
}