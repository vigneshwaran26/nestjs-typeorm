import {Module} from "@nestjs/common";
import { UserModule } from './user/user.module';
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import dbConfig from "./database/db.config";
@Module({
    imports:[
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: './graphqlschema.gql',
            sortSchema: true,
            //To make nest know which are entities, mark them as ObjectType()
            playground: true,
            driver: ApolloDriver,
            context: ({ req }) => ({ headers: req.headers }),
          }),
          ConfigModule.forRoot({
            isGlobal: true,
            load: [dbConfig]
          }),
          UserModule, 
          DatabaseModule],
    providers:[]
})
export class AppModule{}