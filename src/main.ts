import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const hbs = require('hbs');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  const config = new DocumentBuilder()
    .setTitle('Articles API')
    .setDescription('An API for Articles')
    .setVersion('0.1')
    .addTag('Article')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
