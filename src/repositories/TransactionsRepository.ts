import Transaction from '../models/Transaction';

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDto {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

export default class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;
    this.transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        income += transaction.value;
      } else {
        outcome += transaction.value;
      }
    });
    return { income, outcome, total: income - outcome };
  }

  public create({ title, value, type }: TransactionDto): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}
