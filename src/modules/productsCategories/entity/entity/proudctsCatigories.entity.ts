import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { CategoriesEntity } from 'src/modules/categories/entity/categories.entity';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';

export interface I_ProductsCategoriesEntity {
  id: string;
  productId: string;
  categoryId: string;
}

@Table({ tableName: 'products_catigories', timestamps: false })
export class ProductsCategoriesEntity extends Model<ProductsCategoriesEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => ProductsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  productId: string;
  @BelongsTo(() => ProductsEntity)
  product: ProductsEntity;

  @ForeignKey(() => CategoriesEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  categoryId: string;
  @BelongsTo(() => CategoriesEntity)
  category: CategoriesEntity;
}
