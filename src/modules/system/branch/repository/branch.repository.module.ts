import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { BranchEntity, BranchSchema } from './entities/branch.entity';
import { BranchRepository } from './repositories/branch.repository';

@Module({
  providers: [
    BranchRepository
  ],
  exports: [
    BranchRepository
  ],
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: BranchEntity.name,
          schema: BranchSchema
        }
      ],
      DATABASE_CONNECTION_NAME
    )
  ]
})
export class BranchRepositoryModule { }