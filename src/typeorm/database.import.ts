import {EntitySchema} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';

export const generateDatabaseImport = (entities: EntitySchema[], databaseUrl: string) => {
  return [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: databaseUrl,
      entities: entities,
    }),
    TypeOrmModule.forFeature(entities),
  ];
};
