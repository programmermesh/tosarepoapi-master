import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '23.94.30.18',
  port: 3306,
  username: 'mjstackc_admin',
  password: '-;nk2e$~F[,r',
  database: 'mjstackc_residentDB',
  // type: 'postgres',
  // url: 'postgres://rlybipbp:zbc4OQBbDiR2TZrtqkw-5ZfWfFf2bV20@fanny.db.elephantsql.com/rlybipbp',
  synchronize: false,
  logging: false,
  entities: ['dist/**/**.entity{.ts,.js}'],
};
