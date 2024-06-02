import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { AdminsEntity } from 'src/modules/admins/entity/admin.entity';
import { ChatsEntity } from 'src/modules/chats/entity/chat.entity';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface I_MessagesUsersEntity {
  id: string;
  message: string;
  senderId: string;
  senderRole: string;
  chatId: string;
  sendDate: string;
}

@Table({ tableName: 'messages', timestamps: false })
export class MessagesEntity extends Model<
  MessagesEntity,
  I_MessagesUsersEntity
> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  message: string;

  @ForeignKey(() => UsersEntity)
  @ForeignKey(() => AdminsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  senderId: string;
  @BelongsTo(() => UsersEntity)
  users: UsersEntity;
  @BelongsTo(() => AdminsEntity)
  admins: AdminsEntity;

  @Column({ type: DataType.ENUM('user', 'admin'), allowNull: false })
  senderRole: 'user' | 'admin';

  @ForeignKey(() => ChatsEntity)
  @Column({ type: DataType.STRING, allowNull: false })
  chatId: string;

  @BelongsTo(() => ChatsEntity)
  chat: ChatsEntity;

  @Column({ type: DataType.STRING, allowNull: false })
  sendDate: string;
}
