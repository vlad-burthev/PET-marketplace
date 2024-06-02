import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartsEntity } from 'src/modules/carts/entity/carts.entity';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';

export interface I_CartsProductsEntity {
  id: string;
}

@Table({ tableName: 'carts_products', timestamps: false })
export class CartsProductsEntity extends Model<
  CartsProductsEntity,
  I_CartsProductsEntity
> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => ProductsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  productId: string;

  @ForeignKey(() => CartsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  cartId: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  count: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  price: number;

  @BelongsTo(() => ProductsEntity)
  products: ProductsEntity;

  @BelongsTo(() => CartsEntity)
  carts: CartsEntity;
}
