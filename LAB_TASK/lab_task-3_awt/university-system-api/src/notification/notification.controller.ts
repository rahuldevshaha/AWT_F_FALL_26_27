import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {

  constructor(private readonly notificationService: NotificationService) {
  }


  @Post('send')
  send(
    @Body('stuName') stuName: string,
    @Body('courseId') courseId: string
  ){

    return this.notificationService.sendNotification(stuName, courseId);
  }


@Post('check')
  check(
    @Body("stuNam") stuNam: string,
    @Body("courseId") courseId: string
){

    return this.notificationService.checkEnrollmentAndNotify(stuNam, courseId)



}



}
