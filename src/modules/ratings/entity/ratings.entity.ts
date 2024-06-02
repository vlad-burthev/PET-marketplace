import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface I_RatingsEntity {
  id: string;
  userId: string;
  productId: string;
  rating: number;
}

@Table({ tableName: 'ratings', timestamps: false })
export class RatingsEntity extends Model<RatingsEntity, I_RatingsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => UsersEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
  @BelongsTo(() => UsersEntity)
  users: UsersEntity;

  @ForeignKey(() => ProductsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  productsId: string;
  @BelongsTo(() => ProductsEntity, { onDelete: 'CASCADE' })
  products: ProductsEntity;

  @Column({ type: DataType.STRING, allowNull: false })
  rating: string;
}
