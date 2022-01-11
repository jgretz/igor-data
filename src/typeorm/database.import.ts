/* eslint-disable @typescript-eslint/ban-types */
import {EntitySchema} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';

export const generateDatabaseImport = (
  entities: (Function | EntitySchema)[],
  databaseUrl: string,
) => {
  return [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: databaseUrl,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ];
};
