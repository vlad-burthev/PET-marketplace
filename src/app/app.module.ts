import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import dotEnvConfigurations from 'src/config/index';
import { Dialect } from 'sequelize';
import { UsersEntity } from 'src/modules/users/entity/users.entity';
import { AdminsEntity } from 'src/modules/admins/entity/admin.entity';
import { CategoriesEntity } from 'src/modules/categories/entity/categories.entity';
import { BrandsEntity } from 'src/modules/brands/entity/brands.entity';
import { CategoryBrandEntity } from 'src/modules/categories_brands/entity/categories_brands.entity';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';
import { ProductsCategoriesEntity } from 'src/modules/productsCategories/entity/entity/proudctsCatigories.entity';
import { RatingsEntity } from 'src/modules/ratings/entity/ratings.entity';
import { MessagesEntity } from 'src/modules/messages/etity/messages.entity';
import { ChatsEntity } from 'src/modules/chats/entity/chat.entity';
import { ProductsCountEntity } from 'src/modules/productsCount/entity/productsCount.entity';
import { CartsProductsEntity } from 'src/modules/cartsProducts/entity/cartsProducts.entity';
import { CartsEntity } from 'src/modules/carts/entity/carts.entity';
import { OrdersEntity } from 'src/modules/orders/entity/orders.entity';
import { OrdersProductsEntity } from 'src/modules/ordersProducts/entity/ordersProducts.entity';
import { CommentsEntity } from 'src/modules/comments/entity/comments.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dotEnvConfigurations],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get<Dialect>('db_dialect'),
        port: configService.get<number>('db_port'),
        host: configService.get<string>('db_host'),
        username: configService.get<string>('db_username'),
        password: configService.get<string>('db_password'),
        database: configService.get<string>('db_database'),
        synchronize: true,
        autoLoadModels: true,
        models: [
          UsersEntity,
          AdminsEntity,
          CategoryBrandEntity,
          CategoriesEntity,
          BrandsEntity,
          ProductsEntity,
          ProductsCategoriesEntity,
          ProductsCountEntity,
          CartsEntity,
          CartsProductsEntity,
          RatingsEntity,
          ChatsEntity,
          MessagesEntity,
          OrdersEntity,
          OrdersProductsEntity,
          CommentsEntity,
        ],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
