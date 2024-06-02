import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { BrandsEntity } from 'src/modules/brands/entity/brands.entity';
import { CategoriesEntity } from 'src/modules/categories/entity/categories.entity';

interface I_CategoryBrandEntity {
  categoryId: string;
  brandId: string;
}

@Table({ tableName: 'category_brand', timestamps: false })
export class CategoryBrandEntity extends Model<
  CategoryBrandEntity,
  I_CategoryBrandEntity
> {
  @ForeignKey(() => CategoriesEntity)
  @Column({ type: DataType.STRING })
  categoryId: string;

  @ForeignKey(() => BrandsEntity)
  @Column({ type: DataType.STRING })
  brandId: string;
}
