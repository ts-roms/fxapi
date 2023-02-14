import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const BranchDatabaseName = 'branches';

@DatabaseEntity({ collection: BranchDatabaseName })
export class BranchEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    required: true,
    index: true,
    trim: true,
    unique: true,
    type: String,
  })
  name: string;

  @Prop({
    required: false,
    index: true,
    trim: true,
    type: String,
  })
  note: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: Boolean,
  })
  default: boolean
}

export const BranchSchema = SchemaFactory.createForClass(BranchEntity)

BranchSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.name = this.name.toLocaleLowerCase();
  next();
})