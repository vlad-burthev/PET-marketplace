import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { OrdersEntity } from 'src/modules/orders/entity/orders.entity';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';

export interface I_OrdersProductsEntity {
  id: string;
  orderId: string;
  productId: string;
}

@Table({ tableName: 'orders_products', timestamps: false })
export class OrdersProductsEntity extends Model<
  OrdersProductsEntity,
  I_OrdersProductsEntity
> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => ProductsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  productId: string;
  @BelongsTo(() => ProductsEntity)
  products: ProductsEntity;

  @ForeignKey(() => OrdersEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  orderId: string;
  @BelongsTo(() => OrdersEntity)
  orders: OrdersEntity;
}
