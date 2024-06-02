import { Module } from '@nestjs/common';
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RatingsEntity } from './entity/ratings.entity';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService],
  imports: [SequelizeModule.forFeature([RatingsEntity])],
})
export class RatingsModule {}
