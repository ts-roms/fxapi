import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { ChartsOfAccountDto } from "../dtos/charts-of-account.dto";
import { ChartsOfAccountEntity } from "../repository/entities/charts-of-account.entity";

export interface IChartsOfAccountService {
  create(
    data: ChartsOfAccountDto,
    options?: IDatabaseCreateOptions
  ): Promise<ChartsOfAccountEntity>;

  findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]>;

  getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number>
}