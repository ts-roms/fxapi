import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import {  } from "./contact-details.dto";

export class EmployeeDto {

  @ApiProperty({
    required: false,
    example: 'Mr.'
  })
  @IsString()
  @Type(() => String)
  readonly salutation: string;

  @ApiProperty({
    example: faker.name.firstName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly firstName: string;

  @ApiProperty({
    example: faker.name.lastName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly lastName: string;

  @ApiProperty({
    example: faker.name.middleName(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly middleName: string;

  @ApiProperty({
    example: faker.name.sex(),
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly gender: string;

  @ApiProperty({
    required: true,
    example: faker.date.birthdate() 
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly dob: string;

  @ApiProperty({
    required: false,
    example: faker.image.abstract()
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly photo: string;

  @ApiProperty({
    required: true,
    example: faker.phone.number()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly contactNumber: string;

  @ApiProperty({
    required: true,
    example: faker.internet.email()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly emailAddress: string;

  @ApiProperty({
    required: true,
    example: faker.address.street()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly street: string;

  @ApiProperty({
    required: true,
    example: faker.address.city()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly city: string;

  @ApiProperty({
    required: true,
    example: faker.address.streetName()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly province: string;

  @ApiProperty({
    required: true,
    example: faker.address.state()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly state: string;

  @ApiProperty({
    required: true,
    example: faker.address.country()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly country: string;

  @ApiProperty({
    required: true,
    example: faker.address.countryCode()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly postalCode: string;

  @ApiProperty({
    required: true,
    example: faker.date.birthdate()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly joiningDate: string;

  @ApiProperty({
    required: true,
    example: faker.company.name()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly branch: string;

  @ApiProperty({
    required: true,
    example: faker.name.firstName() + ' ' + faker.name.lastName()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly loanOfficer: string;

  @ApiProperty({
    required: true,
    example: faker.finance.amount()
  })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  readonly salaryRange: string;

  @ApiProperty({
    required: false,
    example: faker.lorem.paragraph()
  })
  @IsOptional()
  @IsString()
  @Type(() => String)
  readonly description: string;
  
}