import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { UpdateProductDto } from './dtos/update-product.dto.js';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto.js';


type ApiResponse<T> = {
  message: string;
  data?: T;
};



@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}






  async search(keyword: string):Promise<ApiResponse<Products[]>> {
    const products = await this.productsRepo.find({
      where: {
        name: ILike(`%${keyword}%`),
      },
    });

    return {
      message: `${products.length} Products Found!`,
      data: products,
    };
  }





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


  async findOne(id: number):Promise<ApiResponse<Products>> {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return {
      message: 'Product retrieved successfully',
      data: product,
    };
  }


  async update(id: number, dto: PartialUpdateProductDto):Promise<ApiResponse<Products>> {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    Object.assign(product, dto);

    const updatedProduct = await this.productsRepo.save(product);

    return {
      message: 'Product updated successfully',
      data: updatedProduct,
    };
  }



  async replace(id: number, dto: UpdateProductDto):Promise<ApiResponse<Products>> {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    Object.assign(product, dto);

    const replacedProduct = await this.productsRepo.save(product);

    return {
      message: 'Product replaced successfully',
      data: replacedProduct,
    };
  }




  async remove(id: number):Promise<ApiResponse<Products>> {
    const product = await this.productsRepo.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    await this.productsRepo.remove(product);

    return {
      message: `Product deleted successfully For ID ${id}`
    };
  }










}
