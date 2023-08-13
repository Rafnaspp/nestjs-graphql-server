import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

@Module({
    providers:[
        LessonResolver
    ],
    imports:[],
    exports:[]
})
export class LessonModule {}
