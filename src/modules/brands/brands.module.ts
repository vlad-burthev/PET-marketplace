import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandsEntity } from './entity/brands.entity';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [SequelizeModule.forFeature([BrandsEntity])],
})
export class BransdModule {}
