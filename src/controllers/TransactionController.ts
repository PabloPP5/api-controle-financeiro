import {type Request, type Response} from 'express'
import { TransactionService } from '../services/TransactionService.js'

const transactionService = new TransactionService();

export class TransactionController {
    async create(req: Request, res: Response){
        try{
            const result = await transactionService.create(req.body)
            return res.status(201).json(result)
        } catch (error:any) {
            return res.status(400).json({erro:error.message})
        }
    }

    async index(req: Request, res: Response){
        const transactions = await transactionService.listAll();
        return res.json(transactions)
    }

    async balance(req: Request, res: Response){
        const balance = await transactionService.getBalance()
        return res.json(balance)
    }
}