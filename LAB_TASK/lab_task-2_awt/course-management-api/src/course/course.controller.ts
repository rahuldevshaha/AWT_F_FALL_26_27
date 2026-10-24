import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('course')
export class CourseController {


  constructor(private readonly courseSrvc: CourseService){

  }


  @Get()
  getAllCourses():string{
    return this.courseSrvc.getAllCourses();
  }


  @Get(":id")
  getCourseById(@Param('id') id: string):string{
    return this.courseSrvc.getCourseById(id);
  }


  @Post()
  createCourse(@Body() course: CreateCourseDto):string{
    return this.courseSrvc.createCourse(course);
  }


  @Put(":id")
  updateCourse(@Param("id") id: string, @Body() course: UpdateCourseDto):string {
    return this.courseSrvc.updateCourse(id, course);
  }


  @Patch(":id")
  patchUCourse(@Param("id") id: string, @Body() course: UpdateCourseDto):string{
    return this.courseSrvc.patchUCourse(id, course);
  }


  @Delete(":id")
  deleteCourse(@Param("id") id: string):string{
    return this.courseSrvc.deleteCourse(id);
  }



  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, Date.now() + '-' + file.originalname);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg|jpeg|png|pdf)$/i)) {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('Only jpg, jpeg, png, pdf files allowed'),
            false,
          );
        }
      },
      limits: { fileSize: 2 * 1024 * 1024 },
    }),
  )


  uploadCourseMaterial(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.courseSrvc.uploadCourseMaterial(id, file);
  }



}
