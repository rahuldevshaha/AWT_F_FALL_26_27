import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller.js';
import { EnrollmentService } from './enrollment.service.js';
import { NotificationModule } from '../notification/notification.module.js';
import { CourseModule } from '../course/course.module.js';

@Module({
  imports: [CourseModule, forwardRef(() => NotificationModule)],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})

export class EnrollmentModule {}