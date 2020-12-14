import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createEngine } from 'express-react-views';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* 
    Supporting (Helmet)
      Helmet helps you secure your app by setting various HTTP headers. 
  */

  app.use(helmet());

  /* 
    Supporting (CORS)
      Cross-Origin Resource Sharing  
  */

  app.enableCors({
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  });

  /* 
    Supporting (compression)
      Compression can greatly decrease the size of the response body, thereby increasing the speed of a web app.
  */

  app.use(compression());

  /* 
    Supporting (REACT VIEWS -> SSR)
      package -> express-react-views, react, react-dom
  */

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', createEngine());

  /* 
    App Listening
  */

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
