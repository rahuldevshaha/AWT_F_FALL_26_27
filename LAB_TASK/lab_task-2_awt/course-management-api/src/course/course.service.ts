import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {



  getAllCourses(): any{
    return { message: 'All courses Fetched Successfully', data: [] };
  }

  getCourseById(id: string):any{
    return { message: 'Course fetched successfully', id };
  }


  createCourse(course: CreateCourseDto): any {
    return { message: 'Course created successfully', data: course };
  }


  updateCourse(id: string, course: UpdateCourseDto ):any {
    return { message: 'Course updated successfully', id, data: course };
  }


  patchUCourse(id: string, course: UpdateCourseDto):any{
    return {
      message: 'Course patched successfully',
      id,
      updatedFields: Object.keys(course),
    };
  }


  deleteCourse(id : string): any{
    return { message: 'Course deleted successfully', id };
  }

  


}
