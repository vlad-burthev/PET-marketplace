import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';

export interface I_ProductsCountEntity {
  id: string;
  productName: string;
  productId: string;
  count: number;
  priceForOne: number;
}

@Table({ tableName: 'products_count', timestamps: false })
export class ProductsCountEntity extends Model<
  ProductsCountEntity,
  I_ProductsCountEntity
> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  productName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  productId: string;

  @ForeignKey(() => ProductsEntity)
  @BelongsTo(() => ProductsEntity, { as: 'relatedProduct' })
  products: ProductsEntity;

  @Column({ type: DataType.INTEGER, allowNull: false })
  count: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  priceForOne: number;
}
