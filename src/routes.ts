import { Router } from "express";
import { TransactionController } from "./controllers/TransactionController.js";

const routes = Router();
const transactionController = new TransactionController();

routes.post('/transactions', transactionController.create);
routes.get('/transactions', transactionController.index)
routes.get('/transactions/balance', transactionController.balance)

export default routes;