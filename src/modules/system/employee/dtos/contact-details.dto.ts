import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class ContactDetailsDto {

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly userId: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly contactNumber: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly emailAddress: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly street: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly city: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly province: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly state: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly country: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly postalCode: string
}