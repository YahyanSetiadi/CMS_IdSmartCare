import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix menjadi 'api'
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*', //domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  await app.listen(3000); // Menjalankan aplikasi di port 3000
}
bootstrap();
