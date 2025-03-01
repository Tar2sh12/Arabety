import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,// to remove any additional fields sent through the request
    //forbidNonWhitelisted: true
  }))
  await app.listen(3000);
}
bootstrap();

