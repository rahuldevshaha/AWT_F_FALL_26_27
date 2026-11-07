import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { Products } from './entities/products.entity.js';



type ApiResponse<T> = {
  message: string;
  data: T;
};



@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}



  @Post()
  create(@Body() dto: CreateProductDto):Promise<ApiResponse<Products>> {
    return this.productsService.create(dto);
  }


  @Get()
  findAll() :Promise<ApiResponse<Products[]>>{
    return this.productsService.findAll();
  }








}
