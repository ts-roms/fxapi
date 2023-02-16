import { Module } from "@nestjs/common";
import { AccountingRepositoryModule } from "./repository/accounting.repository.module";
import { ChartsOfAccountService } from "./services/charts-of-account.service";

@Module({
  imports: [
    AccountingRepositoryModule
  ],
  exports: [
    ChartsOfAccountService
  ],
  providers: [
    ChartsOfAccountService
  ],
  controllers: []
})
export class AccountingModule { }