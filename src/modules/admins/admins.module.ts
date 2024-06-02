import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminsEntity } from './entity/admin.entity';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
  imports: [SequelizeModule.forFeature([AdminsEntity])],
})
export class AdminModule {}
