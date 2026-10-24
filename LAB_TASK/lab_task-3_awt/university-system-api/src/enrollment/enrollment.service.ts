import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {

  constructor (

    private courseService : CourseService,
    @Inject(forwardRef(()=> NotificationService))
    private notificationService: any

  ){
  }

  enrollStudent(stuName: string, courseId:string): any{
    const course = this.courseService.getCourseById(courseId);
    const notification = this.notificationService.sendNotification(stuName,`You have been enrolled in course ${courseId}`);

    return {
      message: 'Student enrolled successfully',
      student: stuName,
      course,
      notification,

    };

  }


  getEnrollments():any{
    return { message: 'All ENROLLMENT Fetched', data: []}
  }




}

