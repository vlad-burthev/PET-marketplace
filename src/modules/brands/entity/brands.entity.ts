import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CategoriesEntity } from 'src/modules/categories/entity/categories.entity';
import { CategoryBrandEntity } from 'src/modules/categories_brands/entity/categories_brands.entity';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';

export interface I_BrandsEntity {
  id: string;
  name: string;
}

@Table({ tableName: 'brands', timestamps: false })
export class BrandsEntity extends Model<BrandsEntity, I_BrandsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @HasMany(() => ProductsEntity)
  products: ProductsEntity[];

  @BelongsToMany(() => CategoriesEntity, () => CategoryBrandEntity)
  categories: CategoriesEntity[];
}
