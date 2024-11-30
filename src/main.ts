import "./instrument";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Notas poli')
    .setDescription('Aplicacion de notas basada en todo list')
    .setVersion('1.0')
    .addTag('todo-list')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/api');
  });
  await app.listen(3000);
}
bootstrap();
