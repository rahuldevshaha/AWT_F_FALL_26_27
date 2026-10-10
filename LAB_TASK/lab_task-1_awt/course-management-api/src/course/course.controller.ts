import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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


  @Post()
  createCourse():string{
    return this.courseSrvc.createCourse();
  }


  @Put(":id")
  updateCourse(@Param("id") id: string):string {
    return this.courseSrvc.updateCourse(id);
  }


  @Patch(":id")
  patchUCourse(@Param("id") id: string):string{
    return this.courseSrvc.patchUCourse(id);
  }


  @Delete(":id")
  deleteCourse(@Param("id") id: string):string{
    return this.courseSrvc.deleteCourse(id);
  }






}
