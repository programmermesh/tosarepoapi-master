import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = process.env.Port;
  const options = new DocumentBuilder()
    .setTitle('ResidentApi')
    .setDescription('Resident Management System')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document, {
    swaggerOptions: {
      customJs:
          "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui-bundle.js",
  }, 
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

