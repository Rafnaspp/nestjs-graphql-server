import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm'
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
     type:'mongodb',
     url:'mongodb://localhost/school',
     synchronize:true,
     useUnifiedTopology:true,
     entities:[
      Lesson
     ]
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile:true,
    }),
    LessonModule,
  ], 
})
export class AppModule {}
