import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

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
  createCourse(@Body() course: CreateCourseDto):string{
    return this.courseSrvc.createCourse(course);
  }


  @Put(":id")
  updateCourse(@Param("id") id: string, @Body() course: UpdateCourseDto):string {
    return this.courseSrvc.updateCourse(id, course);
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
