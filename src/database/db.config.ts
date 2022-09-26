import { registerAs } from '@nestjs/config';
import devDbConfig from './dev.config';
// import { AwsService } from '../aws/aws.service';
import path from 'path';
export default registerAs('typeOrmConfig', async () => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  let data;
  if (process.env.USE_LOCAL_DB === 'true') {
    data = devDbConfig();
  } else {
    // data = await AwsService.getDbConfigFromAwsParam();
  }
  console.log(
    'data is ' + JSON.stringify(data),
    nodeEnv === 'development',
    process.env.DB_SYNC === 'true',
  );
  return {
    type: 'postgres',
    host: data.host,
    port: parseInt(data.port),
    username: data.username,
    password: data.password,
    database: data.dbname,
    autoLoadEntities: true,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    cli: {
        // migrationsDir: __dirname + '/../migrations',
        // migrationsDir: path.join('src', 'migrations'),
        migrationsDir: 'src/migrations',
      },
    synchronize: process.env.DB_SYNC === 'true',
    logging: true,
    pool: {
      max: 25,
      min: 1,
      maxWaitingClients: 10,
      idleTimeoutMillis: 300000,
    },
  };
});
