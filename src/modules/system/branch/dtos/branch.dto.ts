import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsString } from "class-validator";


export class BranchDto {
  @ApiProperty({
    required: false,
    example: faker.company.name()
  })
  @IsString()
  @Type(() => String)
  readonly name: string;

  @ApiProperty({
    required: false,
    example: faker.lorem.paragraph()
  })
  @IsString()
  @Type(() => String)
  readonly note: string;

  @ApiProperty({
    required: false,
    example: '0'
  })
  @IsBoolean()
  @Type(() => Boolean)
  readonly default: boolean
}