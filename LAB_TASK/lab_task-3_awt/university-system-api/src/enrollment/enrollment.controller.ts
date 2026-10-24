import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';

@Controller('enrollment')
export class EnrollmentController {

  constructor( private readonly enrollmentService: EnrollmentService) {
  }


  @Get()
  getEnrollments(){
    return this.enrollmentService.getEnrollments();
  }


  @Post()
  enrollStudent(
    @Body('stuName') stuName: string,
    @Body('courseId') courseId: string
  ){
    return this.enrollmentService.enrollStudent(stuName, courseId)
  }



}
