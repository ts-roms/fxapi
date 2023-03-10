import { PartialType } from '@nestjs/swagger';
import { ApiKeyCreateSerialization } from 'src/common/api-key/serializations/api-key.create.serialization';

export class ApiKeyResetSerialization extends PartialType(
  ApiKeyCreateSerialization
) {}
