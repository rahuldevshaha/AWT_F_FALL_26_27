import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { Products } from './entities/products.entity.js';
import { UpdateProductDto } from './dtos/update-product.dto.js';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto.js';



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


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number):Promise<ApiResponse<Products>> {
    return this.productsService.findOne(id);
  }



  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PartialUpdateProductDto,
  ):Promise<ApiResponse<Products>>{
    return this.productsService.update(id, dto);
  }



  @Put(':id')
  replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ):Promise<ApiResponse<Products>> {
    return this.productsService.replace(id, dto);
  }





}
