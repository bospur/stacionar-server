import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'your-password',
  database: 'your-database',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Включите только для разработки
};
