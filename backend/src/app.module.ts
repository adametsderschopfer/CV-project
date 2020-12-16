import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './components/admin/admin.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AdminModule, PortfolioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
