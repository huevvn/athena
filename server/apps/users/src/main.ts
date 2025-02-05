import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
// env variables:
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(process.env.port ?? 4000);
}
bootstrap();
