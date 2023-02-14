import { Body, Controller, Get, InternalServerErrorException, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ENUM_AUTH_PERMISSIONS } from "src/common/auth/constants/auth.enum.permission.constant";
import { AuthJwtAccessProtected } from "src/common/auth/decorators/auth.jwt.decorator";
import { AuthPermissionProtected } from "src/common/auth/decorators/auth.permission.decorator";
import { ENUM_ERROR_STATUS_CODE_ERROR } from "src/common/error/constants/error.status-code.constant";
import { PaginationQuery, PaginationQueryFilterInBoolean } from "src/common/pagination/decorators/pagination.decorator";
import { PaginationListDto } from "src/common/pagination/dtos/pagination.list.dto";
import { PaginationService } from "src/common/pagination/services/pagination.service";
import { Response, ResponsePaging } from "src/common/response/decorators/response.decorator";
import { IResponse, IResponsePaging } from "src/common/response/interfaces/response.interface";
import {
  EMPLOPYEE_DEFAULT_AVAILABLE_SORT,
  EMPLOPYEE_DEFAULT_PER_PAGE,
  EMPLOPYEE_DEFAULT_SORT,
  EMPLOYEE_DEFAULT_AVAILABLE_SEARCH,
  EMPLOYEE_DEFAULT_BLOCKED,
  EMPLOYEE_DEFAULT_IS_ACTIVE
} from "../constants/employee.list.constant";
import { EmployeeCreateDoc, EmployeeListDoc } from "../docs/employee.docs";
import { EmployeeDto } from "../dtos/employee.dto";
import { IEmployeeEntity } from "../interfaces/employee.interface";
import { EmployeeEntity } from "../repository/entities/employee.entity";
import { EmployeeListSerialization } from "../serializations/employee.list.serialization";
import { EmployeeService } from "../services/employee.service";


@ApiTags('modules.employee')
@Controller({
  version: '1',
  path: '/employee'
})
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly paginationService: PaginationService
  ) {

  }


  @EmployeeCreateDoc()
  @Response('employee.create')
  @Post('/create')
  async create(
    @Body() { ...body }: EmployeeDto
  ): Promise<EmployeeEntity> {

    try {
      const data = this.employeeService.create(body);
      return data;
    } catch (error: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }


  @EmployeeListDoc()
  @ResponsePaging('employee.list', {
    serialization: EmployeeListSerialization
  })
  @AuthPermissionProtected(ENUM_AUTH_PERMISSIONS.USER_READ)
  @AuthJwtAccessProtected()
  @Get('/list')
  async list(
    @PaginationQuery(
      EMPLOPYEE_DEFAULT_PER_PAGE,
      EMPLOYEE_DEFAULT_AVAILABLE_SEARCH,
      EMPLOPYEE_DEFAULT_SORT,
      EMPLOPYEE_DEFAULT_AVAILABLE_SORT
    )
    {
      page,
      perPage,
      _sort,
      _search,
      _offset,
      _availableSort,
      _availableSearch
    }: PaginationListDto,
    @PaginationQueryFilterInBoolean('active', EMPLOYEE_DEFAULT_IS_ACTIVE)
    active: Record<string, any>,
    @PaginationQueryFilterInBoolean('blocked', EMPLOYEE_DEFAULT_BLOCKED)
    blocked: Record<string, any>
  ): Promise<IResponsePaging> {
    const find: Record<string, any> = {
      ..._search,
      ...active,
      ...blocked
    };

    const employes: IEmployeeEntity[] = await this.employeeService.findAll(find, {
      paging: {
        limit: perPage,
        offset: _offset
      },
      sort: _sort
    });

    const totalData: number = await this.employeeService.getTotal(find);
    const totalPage: number = this.paginationService.totalPage(
      totalData,
      perPage
    );

    return {
      totalData,
      totalPage,
      currentPage: page,
      perPage,
      _availableSearch,
      _availableSort,
      data: employes
    }
  }

}