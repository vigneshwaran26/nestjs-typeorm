import {Module} from "@nestjs/common";
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { StoryModule } from './story/story.module';
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

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
            envFilePath: '.env',
          }),
          UserModule, 
          PostModule, 
          StoryModule,
          DatabaseModule],
    providers:[]
})
export class AppModule{}