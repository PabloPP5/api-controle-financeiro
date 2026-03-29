# API de Controle Financeiro

A API calcula automaticamente quanto você tem, somando as entradas e subtraindo as saídas.

## O que eu usei
* **Node.js e TypeScript**: Para o código ficar organizado e seguro.
* **Express**: Para criar o servidor e as rotas.
* **SQLite**: Para salvar os dados em um arquivo de banco de dados real.

## Como usar a API
Depois de baixar o projeto e rodar o comando: 
  ``bash
    npm install
  ``
1.  **Para ligar o servidor:**
   ``bash
     npm run dev
   ``
2.  **Para cadastrar um gasto/ganho:** Mande um POST no Postman para `http://localhost:3333/transactions` usando essa estrutura (exemplo):
  ```bash
   { 
   "title": "Venda de Teclado Gamer",
   "amount": 250.00,
   "type": "income",
   "category": "Vendas"
   }  
```
  **Observação: use "income" para ganhos ou "outcome" para gastos
4.  **Para ver a lista de tudo o que salvou:** Acesse no navegador ou Postman: `http://localhost:3333/transactions`
5.  **Para ver os gastos,ganhos e o saldo total:** Acesse no navegador ou Postman :`http://localhost:3333/transactions/balance`

## Organização das Pastas
* `src/controllers`: Cuida de receber o que você digita no Postman.
* `src/services`: Onde fica a lógica (ex: não aceitar valor negativo).
* `src/database`: Onde o banco de dados é configurado.
