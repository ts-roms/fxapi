import { applyDecorators, HttpStatus } from "@nestjs/common";
import { Doc, DocPaging } from "src/common/doc/decorators/doc.decorator";
import { COA_DEFAULT_AVAILABLE_SEARCH, COA_DEFAULT_AVAILABLE_SORT } from "../constants/accounting.list.constant";
import { ChartsOfAccountSerialiazation } from "../serializations/charts-of-account.serialization";

export function ChartsOfAccountCreateDoc(): MethodDecorator {
  return applyDecorators(
    Doc('charts-of-account.create', {
      auth: {
        jwtAccessToken: false,
      },
      response: {
        httpStatus: HttpStatus.CREATED
      }
    })
  )
}

export function ChartsOfAccountListDoc(): MethodDecorator {
  return applyDecorators(
    DocPaging<ChartsOfAccountSerialiazation>('charts-of-account.list', {
      auth: {
        jwtAccessToken: true,
        permissionToken: true
      },
      request: {
        queries: [],
      },
      response: {
        serialization: ChartsOfAccountSerialiazation,
        _availableSort: COA_DEFAULT_AVAILABLE_SORT,
        _availableSearch: COA_DEFAULT_AVAILABLE_SEARCH
      }
    })
  )
}