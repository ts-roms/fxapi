import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { DatabaseMongoUUIDRepositoryAbstract } from "src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract";
import { DatabaseModel } from "src/common/database/decorators/database.decorator";
import { ContactDetailsEntity } from "../entities/contact-details.entity";


@Injectable()
export class ContactDetailsRepository extends DatabaseMongoUUIDRepositoryAbstract<ContactDetailsEntity> {

  /**
   *
   */
  constructor(
    @DatabaseModel(ContactDetailsEntity.name)
    private readonly contactDetailsModel: Model<ContactDetailsEntity>
  ) {
    super(contactDetailsModel)
  }
}