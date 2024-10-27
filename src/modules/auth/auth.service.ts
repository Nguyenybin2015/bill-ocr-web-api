import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { Member } from '../../database/entities';
import { SignInDto, SignUpDto } from './dto/auth.dto';
// import { MailerService } from '@nestjs-modules/mailer';
import Enum from '../../common/constants';
import { ErrorException } from '../../common/exceptions/error.exception';
import { FilterBuilder } from '../../common/share/share.service';
import { cfg } from '../../config/env.config';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,

		@InjectRepository(Member)
		private readonly memberRepository: Repository<Member>,
	) {}

	async signToken(data: object) {
		const cert = fs.readFileSync(cfg('JWT_PRIVATE_KEY'));
		const token = await this.jwtService.signAsync(data, {
			algorithm: 'ES256',
			privateKey: cert,
		});
		return {
			token,
			expiresIn: '30d',
		};
	}

	hashPassword(password: string) {
		return bcrypt.hashSync(password, cfg('BCRYPT_SALT_ROUND', Number));
	}

	comparePasswords(password: string, storedPasswordHash: string) {
		return bcrypt.compareSync(password, storedPasswordHash);
	}

	async signIn({ email, password }: SignInDto) {
		const member = await new FilterBuilder({
			entityRepo: this.memberRepository,
			alias: 'member',
		})
			.andWhere('email', email)
			.addSelect('member', ['password'])
			.queryBuilder.getOne();

		if (!member) {
			throw new ErrorException(
				HttpStatus.NOT_FOUND,
				'signIn',
				'email',
				'Số điện thoại này chưa đăng ký tài khoản',
			);
		}

		if (member.status !== Enum.Member.STATUS.ACTIVE) {
			throw new ErrorException(
				HttpStatus.FORBIDDEN,
				'signIn',
				'status',
				'Tài khoản đã bị khoá',
			);
		}
		const isAuth = this.comparePasswords(password, member.password);
		if (!isAuth) {
			throw new ErrorException(
				HttpStatus.BAD_REQUEST,
				'signIn',
				'password',
				'Mật khẩu không chính xác',
			);
		}

		const jwt = await this.signToken({ id: member.id });
		member.tokenInfo = {
			...member.tokenInfo,
			app: jwt.token,
		};

		await this.memberRepository.save(member);

		return {
			token: jwt.token,
			expiresIn: jwt.expiresIn,
		};
	}

	async deleteToken(member: Member) {
		const tokenInfo = {
			...member.tokenInfo,
			app: '-',
		};
		try {
			await this.memberRepository
				.createQueryBuilder('member')
				.update()
				.set({
					tokenInfo,
				})
				.where('id = :id', { id: member.id })
				.execute();
		} catch (error) {
			throw new ErrorException(500, 'Delete Token', error.message);
		}
		return {
			success: 'done',
		};
	}
	async signUp(member: SignUpDto) {
		const existingMember = await this.memberRepository.findOneBy({ email: member.email });
		if (existingMember) {
			throw new ErrorException(
				HttpStatus.BAD_REQUEST,
				'signUp',
				'email',
				'Email đã tồn tại',
			);
		}
		const newMember = new Member();
		newMember.email = member.email;
		newMember.password = this.hashPassword(member.password);
		newMember.status = Enum.Member.STATUS.ACTIVE;
		try {
			await this.memberRepository.save(newMember);
		} catch (error) {
			throw new ErrorException(500, 'Sign Up', error.message);
		}
		return {
			success: 'done',
		};
	}
}
