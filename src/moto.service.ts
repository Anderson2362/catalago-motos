import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Moto } from './moto.entity';


@Injectable()
export class MotoService {
  constructor(
    @Inject('MOTO_REPOSITORY')
    private motoRepository: Repository<Moto>,
  ) {}

  async findAll(): Promise<Moto[]> {
    return this.motoRepository.find();
  }
}