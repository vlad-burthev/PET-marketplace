import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartsProductsEntity } from 'src/modules/cartsProducts/entity/cartsProducts.entity';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface I_CartsEntity {}

@Table({ tableName: 'carts', timestamps: false })
export class CartsEntity extends Model<CartsEntity, I_CartsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => UsersEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
  @BelongsTo(() => UsersEntity)
  users: UsersEntity;

  @HasMany(() => CartsProductsEntity)
  cartsProductsEntity: CartsProductsEntity[];
}
