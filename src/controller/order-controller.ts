import { Request, Response, NextFunction } from "express";
import {knex} from '@/database/knex'
import {z} from 'zod'
import { AppError } from "@/utils/AppError";

class OrderController{
  create = async (req:Request, res: Response, next:NextFunction)=>{
    try{
      const bodySchema = z.object({
        table_id: z.number().gt(0, {message: 'table_id must be positive.'}),
      })

      const {table_id} = bodySchema.parse(req.body)

      await knex('orders').insert({table_id, total: 0, data: knex.fn.now()})
      return res.status(201).json()
    }catch(error){
      next(error)
    }

  }

  getAllOrders = async (req:Request, res: Response, next:NextFunction)=>{

    try{
      const orders = await knex<OrderRepository>('orders').select()
      return res.status(200).json(orders)
    }catch(error){
      next(error)
    }

  }
  
  delete = async (req:Request, res: Response, next:NextFunction)=>{
    try{
      const id = Number(this.parseNumber(req))

    if(await this.verifingOrder(id)){
      await knex('orders').delete().where({id})

      return res.status(200).json()
    } else {
      throw new AppError('Order is not existing')
    }
    }catch(error){
      next(error)
    }

  }

  getById = async (req:Request, res: Response, next:NextFunction)=> {
    try{
      const id = this.parseNumber(req)

      const order: OrderRepository = await knex('orders').select().where({id}).first()

      if(order) { 
        return res.status(200).json(order)
      } else
        throw new AppError('Order not existing')
    }catch(error){
      next(error)
    }
  }

  insertProduct = async(req:Request, res: Response, next:NextFunction)=>{
    try{
      const {product_id, qtd} = req.body
      const product = await knex<ProductRepository>('products').select().where({id: product_id}).first()
      
      if(product){
        const order_id = Number(this.parseNumber(req))
        const order = await  knex<OrderRepository>('orders').select().where({id: order_id}).first()

        if(order){
          const total = order.total + (product.value * qtd)

          //Add product in order
          await knex('products_order').insert({order_id, product_id, qtd})

          //Update total of the order
          await knex('orders').update({total}).where({id: order.id})

          res.status(200).json({
            product: product.description,
            order: order.id
          })
        } else
          throw new AppError('Order does not existing')
      } else
        throw new AppError('Product does not existing')
    }catch(error){
      next(error)
    }
  }

   parseNumber(req: Request): Number{
    return z.string().transform(v => Number(v)).refine(v => !isNaN(v)).parse(req.params.id)
  }

  async verifingOrder(id:number):Promise<Boolean>{
      return !! await knex('orders').select().where({id}).first()
  }
}

export {OrderController}