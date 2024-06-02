import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface I_AdminsEntity {
  id: string;
  email: string;
  password: string;
  role: 'admin';
}

@Table({ tableName: 'admins', timestamps: false })
export class AdminsEntity extends Model<AdminsEntity, I_AdminsEntity> {
  @Column({ type: DataType.STRING, primaryKey: true, unique: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'admin' })
  role: 'admin';
}
