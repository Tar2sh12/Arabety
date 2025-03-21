import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ReportsModule } from './modules/reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.entity';
import { Report } from './modules/reports/report.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db2.sqlite',
    entities: [User,Report],
    synchronize: true,
  }),UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
