import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseSrvc: CourseService){

  }

  @Get()
  getAllCourses():string{
    return this.courseSrvc.getAllCourses();
  }


  @Get(":id")
  getCourseById(@Param('id') id: string):string{
    return this.courseSrvc.getCourseById(id);
  }



  

}
