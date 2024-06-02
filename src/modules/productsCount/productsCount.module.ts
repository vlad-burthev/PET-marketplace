import { Module } from '@nestjs/common';
import { ProductsCountService } from './productsCount.service';
import { ProductsCountController } from './productsCount.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsCountEntity } from './entity/productsCount.entity';

@Module({
  providers: [ProductsCountService],
  controllers: [ProductsCountController],
  imports: [SequelizeModule.forFeature([ProductsCountEntity])],
})
export class ProductsCountModule {}
