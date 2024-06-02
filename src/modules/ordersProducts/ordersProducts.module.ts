import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersProductsEntity } from './entity/ordersProducts.entity';

@Module({
  imports: [SequelizeModule.forFeature([OrdersProductsEntity])],
})
export class OrdersProductsModule {}
