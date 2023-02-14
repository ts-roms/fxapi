import { Module } from "@nestjs/common";
import { BranchRepositoryModule } from "./repository/branch.repository.module";
import { BranchService } from "./services/branch.service";


@Module({
  imports: [
    BranchRepositoryModule
  ],
  exports: [BranchService],
  providers: [BranchService],
  controllers: []
})
export class BranchModule { }