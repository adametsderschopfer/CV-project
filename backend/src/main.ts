import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createEngine } from 'express-react-views';
import * as path from 'path';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as flash from 'flash';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* 
    Supporting (Helmet)
      Helmet helps you secure your app by setting various HTTP headers. 
  */

  app.use(helmet({ contentSecurityPolicy: false }));

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
    Supporting (Flash)
      flash
  */

  app.use(
    session({ secret: 'FOR_FLASH', resave: false, saveUninitialized: true }),
  ); // USE FOR WORKING FLASH
  app.use(flash());

  /* 
    Supporting (REACT VIEWS -> SSR)
      package -> express-react-views, react, react-dom
  */

  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.set('view engine', 'js');
  app.engine('js', createEngine({ transformViews: false }));

  /* 
    App Listening
  */

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
