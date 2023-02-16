import { Body, Controller, InternalServerErrorException, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { ApiTags } from "@nestjs/swagger";
import { ENUM_ERROR_STATUS_CODE_ERROR } from "src/common/error/constants/error.status-code.constant";
import { PaginationQuery } from "src/common/pagination/decorators/pagination.decorator";
import { PaginationListDto } from "src/common/pagination/dtos/pagination.list.dto";
import { PaginationService } from "src/common/pagination/services/pagination.service";
import { Response, ResponsePaging } from "src/common/response/decorators/response.decorator";
import { IResponsePaging } from "src/common/response/interfaces/response.interface";
import { COA_DEFAULT_AVAILABLE_SEARCH, COA_DEFAULT_AVAILABLE_SORT, COA_DEFAULT_PER_PAGE, COA_DEFAULT_SORT } from "../constants/accounting.list.constant";
import { ChartsOfAccountCreateDoc, ChartsOfAccountListDoc } from "../docs/accounting.docs";
import { ChartsOfAccountDto } from "../dtos/charts-of-account.dto";
import { ChartsOfAccountEntity } from "../repository/entities/charts-of-account.entity";
import { ChartsOfAccountSerialiazation } from "../serializations/charts-of-account.serialization";
import { ChartsOfAccountService } from "../services/charts-of-account.service";

@ApiTags('module.accounting')
@Controller({
  version: '1',
  path: '/accounting'
})
export class AccountingController {

  constructor(
    private readonly chartsOfAccountService: ChartsOfAccountService,
    private readonly paginationService: PaginationService
  ) {
  }

  @ChartsOfAccountCreateDoc()
  @Response('charts-of-account.create')
  @Post('/charts-of-account/create')
  async create(
    @Body() { ...body }: ChartsOfAccountDto
  ): Promise<ChartsOfAccountEntity> {
    try {
      return this.chartsOfAccountService.create(body)
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }

  @ChartsOfAccountListDoc()
  @ResponsePaging('charts-of-account.list', {
    serialization: ChartsOfAccountSerialiazation
  })
  @Get('/charts-of-account/list')
  async list(
    @PaginationQuery(
      COA_DEFAULT_PER_PAGE,
      COA_DEFAULT_AVAILABLE_SEARCH,
      COA_DEFAULT_SORT,
      COA_DEFAULT_AVAILABLE_SORT,
    )
    {
      page,
      perPage,
      _sort,
      _search,
      _offset,
      _availableSort,
      _availableSearch
    }: PaginationListDto
  ): Promise<IResponsePaging> {
    const find: Record<string, any> = {
      ..._search
    }
    const coa: ChartsOfAccountEntity[] = await this.chartsOfAccountService.findAll(find, {
      paging: {
        limit: perPage,
        offset: _offset
      },
      sort: _sort
    });

    const totalData: number = await this.chartsOfAccountService.getTotal(find);
    const totalPage: number = this.paginationService.totalPage(
      totalData,
      perPage
    );

    return {
      totalData,
      totalPage,
      currentPage: page,
      _availableSearch,
      _availableSort,
      data: coa
    }
  }
}