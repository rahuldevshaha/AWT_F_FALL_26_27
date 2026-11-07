import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto.js';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}


  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    const savedProduct = await this.productsRepo.save(product);

    return {
      message: 'Product created successfully',
      data: savedProduct,
    };

  }








}
