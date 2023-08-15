import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Lesson } from './lesson.entity';

@Module({
    providers: [
        LessonResolver,
        LessonService
    ],
    imports: [
        TypeOrmModule.forFeature([Lesson])
    ],
    exports: []
})
export class LessonModule { }   
