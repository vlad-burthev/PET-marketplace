import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { BrandsEntity } from 'src/modules/brands/entity/brands.entity';
import { CartsProductsEntity } from 'src/modules/cartsProducts/entity/cartsProducts.entity';
import { CommentsEntity } from 'src/modules/comments/entity/comments.entity';
import { OrdersProductsEntity } from 'src/modules/ordersProducts/entity/ordersProducts.entity';
import { ProductsCategoriesEntity } from 'src/modules/productsCategories/entity/entity/proudctsCatigories.entity';
import { ProductsCountEntity } from 'src/modules/productsCount/entity/productsCount.entity';

export interface I_ProductsEntity {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  brandId: string;
  imageUrl: string;
}

@Table({ tableName: 'products', timestamps: false })
export class ProductsEntity extends Model<ProductsEntity, I_ProductsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  slug: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  discount: number;

  @ForeignKey(() => BrandsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  brandId: string;
  @BelongsTo(() => BrandsEntity)
  brand: BrandsEntity;

  @HasMany(() => ProductsCategoriesEntity)
  productCategories: ProductsCategoriesEntity[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  imageUrl: string[];

  @HasMany(() => ProductsCountEntity)
  productsCount: ProductsCountEntity[];

  @HasMany(() => CartsProductsEntity)
  cartsProductsEntity: CartsProductsEntity[];

  @HasMany(() => OrdersProductsEntity)
  ordersProducts: OrdersProductsEntity[];

  @HasMany(() => CommentsEntity)
  comments: CommentsEntity[];
}
