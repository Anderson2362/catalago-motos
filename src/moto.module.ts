import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { motoProviders } from './moto.providers';
import { MotoService } from './moto.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...motoProviders,
    MotoService,
  ],
})
export class MotoModule {}