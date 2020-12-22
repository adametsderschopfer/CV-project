import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './components/admin/admin.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { FileRemoverService } from './services/file-remover/file-remover.service';

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, PortfolioModule],
  controllers: [],
  providers: [FileRemoverService],
})
export class AppModule {}
