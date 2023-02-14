import { applyDecorators, HttpStatus } from '@nestjs/common';
import { Doc } from 'src/common/doc/decorators/doc.decorator';

export function BranchCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('branch.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}