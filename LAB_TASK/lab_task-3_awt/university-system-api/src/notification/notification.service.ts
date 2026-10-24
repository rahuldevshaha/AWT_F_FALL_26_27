import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {

  constructor(

    @Inject(forwardRef(()=> EnrollmentService))
    private enrollmentService: any,
    ){}


  sendNotification(studentName: string, message: string ): any{
    return {
      message: "Notification Sent",
      student: studentName,
      content: message
    }
  }


  checkEnrollmentAndNotify(stuName: string, courseID: string): any{
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: 'Enrollment checked',
      student: stuName,
      courseID,
      enrollments,
    }
  }



}
