import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryBrandEntity } from './entity/categories_brands.entity';

@Module({
  imports: [SequelizeModule.forFeature([CategoryBrandEntity])],
})
export class CategoriesBrandsModule {}
