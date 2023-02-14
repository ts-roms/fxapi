import { BranchEntity } from "../repository/entities/branch.entity";


export interface IBranchEntity extends Omit<BranchEntity, ''> {
    
}