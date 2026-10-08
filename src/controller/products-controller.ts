import { NextFunction, Request, Response } from "express";
import { z } from 'zod'
import { knex } from '@/database/knex'
import { AppError } from "@/utils/AppError";
import { parse } from "node:path";

class ProductController {

  create = async (req: Request, res: Response, next: NextFunction)=>{
    try{
      const bodySchema = z.object({
        description: z.string().trim().min(6),
        value: z.number().gt(0, {message: 'value must be greater than 0'})
      })

      const {description, value} = bodySchema.parse(req.body)

      await knex<ProductRepository>('products').insert({
        description,
        value
      })

       res.status(201).json()

    }catch(error){
      next(error)
    }
  }

  getAllProducts = async(req: Request, res:Response, next: NextFunction) => {
    try{
      const {description} = req.query
      const products = await knex<ProductRepository>('products')
      .select()
      .whereLike('description', `%${description ?? ""}%`)
      .orderBy('description')
          return res.status(200).json(products)
    }catch(error){
      next(error)
    }


  }

  updateProduct = async (req: Request, res:Response, next: NextFunction) => {
    
    try{
      const id = z
      .string()
      .transform((v)=> Number(v))
      .refine((v)=> !isNaN(v), {message: 'id must be a number'}).parse(req.params.id)

    if(await this.verifingProduct(id)){
      const bodySchema = z.object({
      description: z.string().trim().min(6),
      value: z.number().gt(0, {message: 'value must be greater than 0'})
    })

    const {description, value} = bodySchema.parse(req.body) 

    await knex<ProductRepository>('products')
      .update({description, value})
      .where({id})
    
      return res.json() 
    } else{
      throw new AppError('Product is not existing')
    }
    }catch(error){
      next(error)
    }
    
  }

  deleteProduct = async (req:Request, res:Response, next:NextFunction) => {

    try{
      const id = z
        .string()
        .transform((v) => Number(v))
        .refine((v)=> !isNaN(v), {message: 'id must be a number'})
        .parse(req.params.id)

        if(await this.verifingProduct(id)){
          await knex<ProductRepository>('products').delete().where({id})
           res.json()
        }else{
          throw new AppError('Product is not existing')
        }
    
    }catch(error){
      next(error)
    }

  }
  
  //Verifing if product exist 
  async verifingProduct(id:number):Promise<Boolean>{
    return !! await knex('products').select().where({id}).first()
  }

  async parseNumber(req: Request): Promise<Number>{
    return z.string().transform(v => Number(v)).refine(v => !isNaN(v)).parse(req.params.id)
  }
}
export {ProductController}