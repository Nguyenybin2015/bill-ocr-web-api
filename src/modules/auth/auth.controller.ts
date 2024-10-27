import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '../../common/decorators/public.decorator';
import { ReqUser } from '../../common/decorators/user.decorator';
import { ErrorException } from '../../common/exceptions/error.exception';
import { Member } from '../../database/entities';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('v1/auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) {}

	@Public()
	@Post('sign-in')
	async signIn(@Body() signInDto: SignInDto) {
		const result = await this.authService.signIn(signInDto);
		return result;
	}
	@ApiBearerAuth()
	@Post('logout')
	async logout(@ReqUser() member: Member) {
		await this.authService.deleteToken(member);
		return {
			success: true,
			msg: 'Logged out successfully',
		};
	}

	@Post('sign-up')
	@Public()
	async signUp(@Body() signUpDto: SignUpDto) {
		const result = await this.authService.signUp(signUpDto);
		return result;
	}

	// @Public()
	// @Post("check-otp")
	// async checkOTP(@Body() checkOTPDto: CheckOTPDto) {
	//   const { email, otp } = checkOTPDto;
	//   const checkedOTP = this.authService.verifyOTP(email, otp);
	//   return checkedOTP;
	// }
}
