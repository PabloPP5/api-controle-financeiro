import { getDbConnection } from "../database/database.js";

interface TransactionData {
    title: string,
    amount: number,
    type: 'income' | 'outcome',
    category: string;
}

export class TransactionService {
    async create({title,amount, type, category}: TransactionData){
        const db = await getDbConnection();

        if (amount<=0){
            throw new Error ("O valor deve ser positivo")
        }
        await db.run(
            'INSERT INTO transactions (title,amount,type,category) VALUES (?,?,?,?)',
            [title, amount, type, category]
        )

        return {message:"Transação criada!"}
    }

    async listAll(){
        const db = await getDbConnection();
        return db.all('SELECT * FROM transactions ORDER BY created_at DESC')
    }

    async getBalance(){
        const transaction = await this.listAll()

        const balance = transaction.reduce((acc, transaction)=>{
            if(transaction.type==='income'){
                acc.income += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.outcome += transaction.amount;
                acc.total -= transaction.amount
            }
            return acc;
        }, {income:0, outcome:0, total:0})
        
        return balance
    }
}