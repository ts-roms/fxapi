import { applyDecorators, HttpStatus } from "@nestjs/common";
import { Doc, DocPaging } from "src/common/doc/decorators/doc.decorator";
import { EmployeeDocQueryBlocked, EmployeeDocQueryIsActive } from "../constants/employee.docs.constant";
import { EMPLOYEE_DEFAULT_AVAILABLE_SORT, EMPLOYEE_DEFAULT_AVAILABLE_SEARCH } from "../constants/employee.list.constant";
import { EmployeeListSerialization } from "../serializations/employee.list.serialization";


export function EmployeeCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('employee.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}

export function EmployeeListDoc(): MethodDecorator {
  return applyDecorators(
    DocPaging<EmployeeListSerialization>('employee.list', {
      auth: {
        jwtAccessToken: true,
        permissionToken: true
      },
      request: {
        queries: [...EmployeeDocQueryIsActive, ...EmployeeDocQueryBlocked]
      },
      response: {
        serialization: EmployeeListSerialization,
        _availableSort: EMPLOYEE_DEFAULT_AVAILABLE_SORT,
        _availableSearch: EMPLOYEE_DEFAULT_AVAILABLE_SEARCH
      }
    })
  )
}