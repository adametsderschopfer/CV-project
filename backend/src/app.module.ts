import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './components/admin/admin.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { FileRemoverService } from './services/file-remover/file-remover.service';
import { AppController } from './components/app/app.controller';
import { ormConfig } from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      autoLoadEntities: true,
    }),
    AdminModule,
    PortfolioModule,
  ],
  controllers: [AppController],
  providers: [FileRemoverService],
})
export class AppModule {}
