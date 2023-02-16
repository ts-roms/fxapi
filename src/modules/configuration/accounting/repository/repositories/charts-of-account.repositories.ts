import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { ChartsOfAccountEntity } from "../entities/charts-of-account.entity";


export class ChartsOfAccountRepository extends DatabaseMongoUUIDRepositoryAbstract<ChartsOfAccountEntity> {
  constructor(
    @DatabaseModel(ChartsOfAccountEntity.name)
    private readonly chartsOfAccountModel: Model<ChartsOfAccountEntity>
  ) {
    super(chartsOfAccountModel)
  }
}