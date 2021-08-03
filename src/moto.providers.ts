
import { Connection, Repository } from 'typeorm';
import { Moto } from './moto.entity';

export const motoProviders = [
  {
    provide: 'MOTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Moto),
    inject: ['DATABASE_CONNECTION'],
  },
];