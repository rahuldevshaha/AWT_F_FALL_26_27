import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto.js';


type ApiResponse<T> = {
  message: string;
  data: T;
};



@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}



  async create(dto: CreateProductDto):Promise<ApiResponse<Products>> {
    const product = this.productsRepo.create(dto);
    const savedProduct = await this.productsRepo.save(product);

    return {
      message: 'Product created successfully',
      data: savedProduct,
    };

  }


  async findAll():Promise<ApiResponse<Products[]>> {
    const products = await this.productsRepo.find({
      order: { createdAt: 'DESC' },
    });

    return {
      message: 'Products retrieved successfully',
      data: products,
    };
  }






}
