import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartsProductsEntity } from './entity/cartsProducts.entity';

@Module({
  imports: [SequelizeModule.forFeature([CartsProductsEntity])],
})
export class CartsProductsModule {}
