import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

  getAllCourses():string{
    return "Get All Courses - from Service"
  }

  getCourseById(id: string):string{
    return `Get Course with ID: ${id} - from Service`
  }


  createCourse():string{
    return "Create Course - from Service";
  }


  updateCourse(id: string):string {
    return `Update Course with ID: ${id} - from Service`
  }


}
