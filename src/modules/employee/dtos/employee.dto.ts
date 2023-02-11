import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class EmployeeDto {

  @ApiProperty({
    required: false,
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
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => Date)
  readonly dob: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(30)
  @Type(() => String)
  readonly photo: string;
}