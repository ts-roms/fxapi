import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const EmploymentDatabaseName = 'employment';

@DatabaseEntity({ collection: EmploymentDatabaseName })
export class EmploymentEntity extends DatabaseMongoUUIDEntityAbstract {
  
  
  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String,
  })
  userId: string;
  
  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  joiningDate: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  branch: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  loanOfficer: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String
  })
  salaryRange: string;

  @Prop({
    required: false,
    index: true,
    trim: true,
    type: String
  })
  description: string;
}

export const EmploymentSchema = SchemaFactory.createForClass(EmploymentEntity)

EmploymentSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {

  next();
})