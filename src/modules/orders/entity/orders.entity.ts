import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface I_OrdersEntity {
  id: string;
  userId: string;
  date: string;
  state: string;
  count: number;
  totalPrice: number;
}

@Table({ tableName: 'orders', timestamps: false })
export class OrdersEntity extends Model<OrdersEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => UsersEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  userId: string;
  @BelongsTo(() => UsersEntity)
  users: UsersEntity;

  @Column({ type: DataType.STRING, allowNull: false })
  date: string;

  @Column({
    type: DataType.ENUM('new', 'confirmed', 'shipped', 'cancelled'),
    allowNull: false,
  })
  state: 'new' | 'confirmed' | 'shipped' | 'cancelled';

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalPrice: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  count: number;
}
