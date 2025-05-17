import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../database.config';
import { AuthModule } from '../features/auth/auth.module';
import { UsersModule } from '../features/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), AuthModule, UsersModule],
})
export class AppModule {}
