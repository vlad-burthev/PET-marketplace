import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { CartsEntity } from 'src/modules/carts/entity/carts.entity';
import { ChatsEntity } from 'src/modules/chats/entity/chat.entity';
import { CommentsEntity } from 'src/modules/comments/entity/comments.entity';
import { MessagesEntity } from 'src/modules/messages/etity/messages.entity';
import { OrdersEntity } from 'src/modules/orders/entity/orders.entity';
import { RatingsEntity } from 'src/modules/ratings/entity/ratings.entity';

export interface I_UsersEntity {
  id: string;
  email: string;
  password: string;
  role: 'user';
  firstName: string;
  lastName: string;
  imageUrl: string;
}

@Table({ tableName: 'users', timestamps: false })
export class UsersEntity extends Model<UsersEntity, I_UsersEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'user' })
  role: 'user';

  @Column({ type: DataType.STRING, allowNull: false, field: 'firstName' })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'lastName' })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'default-user-image.webp',
    field: 'imageUrl',
  })
  imageUrl: string;

  @HasMany(() => ChatsEntity)
  chats: ChatsEntity[];

  @HasMany(() => MessagesEntity)
  messages: MessagesEntity[];

  @HasMany(() => CommentsEntity)
  comments: CommentsEntity[];

  @HasOne(() => CartsEntity)
  carts: CartsEntity;

  @HasMany(() => RatingsEntity)
  ratings: RatingsEntity[];

  @HasMany(() => OrdersEntity)
  orders: OrdersEntity[];
}
