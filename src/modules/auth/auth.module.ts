import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member, SystemConfig } from '../../database/entities';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { AuthGuard } from './guard';
import { APP_GUARD } from '@nestjs/core';
import { Logger } from '../../logger/logger.service';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
	imports: [
		JwtModule,
		TypeOrmModule.forFeature([Member, SystemConfig]),
	],
	controllers: [AuthController],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
		AuthService,
		AuthGuard,
		Logger,
	],
	exports: [AuthGuard, AuthService],
})
export class AuthModule {}
