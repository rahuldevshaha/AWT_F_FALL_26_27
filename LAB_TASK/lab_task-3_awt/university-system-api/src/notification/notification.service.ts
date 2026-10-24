import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {

  constructor(

    ){}


  sendNotification(studentName: string, message: string ): any{
    return {
      message: "Notification Sent",
      student: studentName,
      content: message
    }
  }




}
