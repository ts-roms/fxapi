import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";
import { ContactDetailsEntity } from './contact-details.entity';

export const EmployeeDatabaseName = 'employees';

@DatabaseEntity({ collection: EmployeeDatabaseName })
export class EmployeeEntity extends DatabaseMongoUUIDEntityAbstract {
  @Prop({
    required: false,
    trim: true,
    type: String,
    maxlength: 5
  })
  salutation?: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 50
  })
  firstName: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 50
  })
  lastName: string;

  @Prop({
    required: false,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 50
  })
  middleName?: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
    maxlength: 50
  })
  gender: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    type: String,
  })
  dob: string;

  @Prop({
    required: false,
    index: true,
    trim: true,
    type: String,
  })
  photo: string;

  @Prop({
    required: true,
    default: false,
    index: true,
    type: Boolean,
  })
  active: boolean;

  @Prop({
    required: false,
    default: false,
    index: true,
    type: Boolean,
  })
  blocked: boolean;
  
  @Prop({
    required: false,
    type: Date,
  })
  blockedDate?: boolean;

  @Prop({
    required: false,
    type: ContactDetailsEntity
  })
  contactDetails: ContactDetailsEntity
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeEntity);

EmployeeSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.firstName = this.firstName.toLowerCase();
  this.lastName = this.lastName.toLowerCase();
  next();
})