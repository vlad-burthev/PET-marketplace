import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { MessagesEntity } from 'src/modules/messages/etity/messages.entity';
import { UsersEntity } from 'src/modules/users/entity/users.entity';

export interface I_ChatsEntity {
  id: string;
  userId: string;
}

@Table({ tableName: 'chats', timestamps: false })
export class ChatsEntity extends Model<ChatsEntity, I_ChatsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @ForeignKey(() => UsersEntity)
  @Column({ type: DataType.STRING })
  userId: string;

  @BelongsTo(() => UsersEntity)
  users: UsersEntity;

  @HasMany(() => MessagesEntity)
  messages: MessagesEntity[];
}
