import { Injectable } from "@nestjs/common";
import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { BranchDto } from "../dtos/branch.dto";
import { IBranchService } from "../interfaces/branch.service.interface";
import { BranchEntity } from "../repository/entities/branch.entity";
import { BranchRepository } from "../repository/repositories/branch.repository";


@Injectable()
export class BranchService implements IBranchService {

  /**
   *
   */
  constructor(
    private readonly branchRepository: BranchRepository
  ) {
    
  }

  async create(
    { ...dto }: BranchDto,
    options?: IDatabaseCreateOptions
  ): Promise<BranchEntity> {
    const create: BranchEntity = new BranchEntity();
    create.name = dto.name;
    create.note = dto.note;
    create.default = dto.default
    return this.branchRepository.create<BranchEntity>(create, options);
  }



}