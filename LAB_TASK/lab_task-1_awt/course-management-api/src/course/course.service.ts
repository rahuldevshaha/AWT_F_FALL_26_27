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


  patchUCourse(id: string):string{
    return `Partial Update(PATCH) Course with ID: ${id} - from Service`
  }

  deleteCourse(id : string): string{
    return `Delete Course with ID: ${id} - from Service`;
  }



}
