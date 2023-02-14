import { IDatabaseCreateOptions } from "src/common/database/interfaces/database.interface";
import { BranchDto } from "../dtos/branch.dto";
import { BranchEntity } from "../repository/entities/branch.entity";


export interface IBranchService {

  create(
    data: BranchDto,
    options?: IDatabaseCreateOptions
  ): Promise<BranchEntity>;
}