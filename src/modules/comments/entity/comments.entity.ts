import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductsEntity } from 'src/modules/products/entity/products.entity';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface CommentsEntity {
  id: string;
  userId: string;
  productId: string;
  date: string;
}

@Table({ tableName: 'comments', timestamps: false })
export class CommentsEntity extends Model<CommentsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => UsersEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
  @BelongsTo(() => UsersEntity)
  users: UsersEntity;

  @ForeignKey(() => ProductsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  productId: string;
  @BelongsTo(() => ProductsEntity)
  products: ProductsEntity;

  @Column({ type: DataType.STRING, allowNull: false })
  date: string;
}
