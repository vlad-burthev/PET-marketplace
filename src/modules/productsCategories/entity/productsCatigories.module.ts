import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsCategoriesEntity } from './entity/proudctsCatigories.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductsCategoriesEntity])],
})
export class ProductsCategoriesModule {}
