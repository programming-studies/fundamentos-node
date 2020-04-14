import TransactionsRepository, {
  Balance,
} from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionsDto {
  transactions: Transaction[];
  balance: Balance;
}

export default class ListTransactionsService {
  transactionRepository: TransactionsRepository;

  constructor(transactionRepository: TransactionsRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(): TransactionsDto {
    return {
      transactions: this.transactionRepository.all(),
      balance: this.transactionRepository.getBalance(),
    };
  }
}
