import { Injectable } from '@nestjs/common';
import { SystemConfig } from './database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Enum from './common/constants';

@Injectable()
export class AppService {
  constructor(
  ) {}


}
