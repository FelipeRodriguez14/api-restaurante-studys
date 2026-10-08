import { Request, Response, NextFunction } from "express";
import {knex} from '@/database/knex'
import { z } from 'zod'
import { AppError } from "@/utils/AppError";

class TableController{

  getAllTables = async (req: Request, res:Response, next:NextFunction)=>{

    try{
      const status = req.query
    
      const tables = status 
      ? await knex<TableRespository>('tables').select().where(status)
      : await knex<TableRespository>('tables').select()
      


      return res.status(200).json(tables)
    }catch(error){
      next(error)
    }
  }

  create = async (req: Request, res:Response, next:NextFunction)=>{
    try{
      await knex('tables').insert({status:'ABERTA'})
      return res.status(201).json()
    }catch(error){
      next(error)
    }
  }

  delete = async(req: Request, res:Response, next:NextFunction)=>{
    try{
      const id =  z
        .string()
        .transform((v) => Number(v))
        .refine((v)=> !isNaN(v), {message: 'id must be a number'})
        .parse(req.params.id)

      if (!await this.verifingExist(id)) {
        throw new AppError('Table does not exist.');
      }

      await knex('tables').delete().where({id})

      return res.status(200).json()
    }catch(error){
      next(error)
    }
  }

  update = async (req: Request, res:Response, next:NextFunction)=>{
    try{
      const id =  z
        .string()
        .transform((v) => Number(v))
        .refine((v)=> !isNaN(v), {message: 'id must be a number'})
        .parse(req.params.id)

      if (!await this.verifingExist(id)) {
        throw new AppError('Table does not exist.');
      }

      const table = await knex<TableRespository>('tables').select().where({id}).first()
      await knex('tables').update({status: `${table?.status === 'ABERTA' ? 'FECHADA':'ABERTA'}`}).where({id})

      return res.status(200).json()

    }catch(error){
      next(error)
    }
  }

  async verifingExist(id: number):Promise<Boolean>{
    return !! await knex('tables').select().where({id}).first()
  }

}

export {TableController}