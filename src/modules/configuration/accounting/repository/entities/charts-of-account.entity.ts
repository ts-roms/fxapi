import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const ChartsOfAccountDatabaseName = 'charts_of_account';

@DatabaseEntity({ collection: ChartsOfAccountDatabaseName })
export class ChartsOfAccountEntity extends DatabaseMongoUUIDEntityAbstract {

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  code: string;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  type: string;

  @Prop({
    required: true,
    trim: true,
    type: String,
  })
  note: string;
}

export const ChartsOfAccountSchema = SchemaFactory.createForClass(ChartsOfAccountEntity);

ChartsOfAccountSchema.pre('save', function(next: CallbackWithoutResultAndOptionalError) {
  next();
})