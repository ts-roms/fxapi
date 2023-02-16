import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class ChartsOfAccountDto {

  @ApiProperty({
    required: true,
    example: 'Expenses'
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly name: string;

  @ApiProperty({
    required: true,
    example: 'GL_CODE'
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly code: string;

  @ApiProperty({
    required: true,
    example: 'Expenses'
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  readonly type: string;

  @ApiProperty({
    required: false,
    example: faker.lorem.paragraph()
  })
  @IsString()
  @Type(() => String)
  readonly note: string;
}