import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MessagesEntity } from './etity/messages.entity';

@Module({
  imports: [SequelizeModule.forFeature([MessagesEntity])],
})
export class MessagesModule {}
