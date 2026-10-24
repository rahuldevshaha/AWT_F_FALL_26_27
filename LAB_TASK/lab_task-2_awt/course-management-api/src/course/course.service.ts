import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {



  getAllCourses():string{
    return "Get All Courses - from Service"
  }

  getCourseById(id: string):string{
    return `Get Course with ID: ${id} - from Service`
  }


  createCourse(course: CreateCourseDto): any {
    return { message: 'Course created successfully', data: course };
  }


  updateCourse(id: string, course: UpdateCourseDto ):any {
    return { message: 'Course updated successfully', id, data: course };
  }


  patchUCourse(id: string):string{
    return `Patch Course ${id} - from Service`
  }


  deleteCourse(id : string): string{
    return `Delete Course ${id} - from Service`;
  }

  


}
