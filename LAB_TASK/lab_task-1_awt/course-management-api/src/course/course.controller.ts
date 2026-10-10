import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseSrvc: CourseService){

  }

  @Get()
  getAllCourses():string{
    return this.courseSrvc.getAllCourses();
  }




}
