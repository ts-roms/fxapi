import { ApiTags } from "@nestjs/swagger";
import { Controller, InternalServerErrorException, Body, Post } from '@nestjs/common';
import { BranchDto } from "../dtos/branch.dto";
import { BranchEntity } from "../repository/entities/branch.entity";
import { ENUM_ERROR_STATUS_CODE_ERROR } from "src/common/error/constants/error.status-code.constant";
import { BranchService } from "../services/branch.service";
import { BranchCreateDoc } from "../docs/branch.docs";

import { Response } from "src/common/response/decorators/response.decorator";

@ApiTags('modules.branch')
@Controller({
  version: '1',
  path: '/branch'
})
export class BranchController {
  /**
   *
   */
  constructor(
    private readonly branchService: BranchService
  ) {
    
  }

  @BranchCreateDoc()
  @Response('branch.create')
  @Post('/create')
  async create(
    @Body() { ...body }: BranchDto
  ): Promise<BranchEntity> {
    try {
      return this.branchService.create(body);
    } catch (error: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message
      });
    };
  }
}