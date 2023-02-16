import { Injectable } from "@nestjs/common";
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { ChartsOfAccountDto } from "../dtos/charts-of-account.dto";
import { IChartsOfAccountService } from "../interfaces/charts-of-account.service.interface";
import { ChartsOfAccountEntity } from "../repository/entities/charts-of-account.entity";
import { ChartsOfAccountRepository } from "../repository/repositories/charts-of-account.repositories";

@Injectable()
export class ChartsOfAccountService implements IChartsOfAccountService {


  /**
   *
   */
  constructor(
    private readonly chartsOfAccountRepository: ChartsOfAccountRepository
  ) {

  }

  async create(
    { ...dto }: ChartsOfAccountDto, 
    options?: IDatabaseCreateOptions
    ): Promise<ChartsOfAccountEntity> {

      const coa: ChartsOfAccountEntity = new ChartsOfAccountEntity();
      coa.name = dto.name;
      coa.code = dto.code;
      coa.type = dto.type;
      coa.note = dto.note;
      return this.chartsOfAccountRepository.create<ChartsOfAccountEntity>(coa, options);
  }


  async findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions
  ): Promise<T[]> {
    return this.chartsOfAccountRepository.findAll<T>(find, options);
  }

  async getTotal(
    find?: Record<string, any>,
    options?: IDatabaseOptions
  ): Promise<number> {
    return this.chartsOfAccountRepository.getTotal(find, options);
  }
}