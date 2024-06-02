import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { BrandsEntity } from 'src/modules/brands/entity/brands.entity';
import { CategoryBrandEntity } from 'src/modules/categories_brands/entity/categories_brands.entity';

interface I_CategoriesEntity {
  id: string;
  name: string;
}

@Table({ tableName: 'categories', timestamps: false })
export class CategoriesEntity extends Model<
  CategoriesEntity,
  I_CategoriesEntity
> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => BrandsEntity, () => CategoryBrandEntity)
  brands: BrandsEntity[];
}
