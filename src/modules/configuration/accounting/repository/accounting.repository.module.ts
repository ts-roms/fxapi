import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION_NAME } from "src/common/database/constants/database.constant";
import { ChartsOfAccountEntity, ChartsOfAccountSchema } from "./entities/charts-of-account.entity";
import { ChartsOfAccountRepository } from "./repositories/charts-of-account.repositories";


@Module({
    providers: [
      ChartsOfAccountRepository
    ],
    exports: [
      ChartsOfAccountRepository
    ],
    controllers: [],
    imports: [
      MongooseModule.forFeature(
        [
          {
            name: ChartsOfAccountEntity.name,
            schema: ChartsOfAccountSchema
          }
        ],
        DATABASE_CONNECTION_NAME
      )
    ]
})
export class AccountingRepositoryModule { }