import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
import { DatabaseMongoUUIDEntityAbstract } from "src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract";
import { DatabaseEntity } from "src/common/database/decorators/database.decorator";

export const ContactDetailsDatabaseName = 'contact_details';

@DatabaseEntity({ collection: ContactDetailsDatabaseName })
export class ContactDetailsEntity extends DatabaseMongoUUIDEntityAbstract {

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
    lowercase: true,
    type: String,
  })
  contactNumber: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  emailAddress: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  street: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  city: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  province: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  state: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  country: string;

  @Prop({
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    type: String,
  })
  postalCode: string
}

export const ContactDetailsSchema = SchemaFactory.createForClass(ContactDetailsEntity)

ContactDetailsSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
  this.street = this.street.toLowerCase();
  this.city = this.city.toLowerCase();
  this.province = this.province.toLowerCase();
  this.state = this.state.toLowerCase();
  this.country = this.country.toLowerCase();
  next()
})