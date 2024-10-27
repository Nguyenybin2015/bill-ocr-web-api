import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './data-source.config';
import { LoggerModule } from './logger/logger.module';
import { Logger } from './logger/logger.service';
import { SystemConfig } from './database/entities';
import { AuthModule } from './modules/auth/auth.module';
import { HealthCheckerModule } from './modules/health-checker/health-checker.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
      logger: new Logger(),
    }),
    ScheduleModule.forRoot(),
    LoggerModule,
    AuthModule,
    HealthCheckerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
