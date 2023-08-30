import { Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDTO, TransactionMaleFemaleDTO } from './transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private TransactionRepository: Repository<TransactionEntity>,
  ) {}

  async showAll() {
    const getAllTransactions = this.TransactionRepository.find();
    return getAllTransactions;
  }

  async addTransaction(data: TransactionDTO) {
    const addTransaction = this.TransactionRepository.create(data);
    await this.TransactionRepository.save(data);
    return {
      transaction: addTransaction,
      ResponseCode: '00',
      ResponseDescription: 'Payment succesfully',
    };
  }

  private async find(id: any) {
    const transactions = await this.TransactionRepository.find();
    if (!transactions.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      };
    }
    return transactions;
  }

  async getDailyTransactionSales(){
    let getDailyTransactionSales = await this.TransactionRepository.find({where:{
      date : new Date().toJSON().slice(0, 10)
    }});
    if(getDailyTransactionSales.length){
    const sumDailyTransactions = getDailyTransactionSales.reduce((total, transaction) => {
      return total + transaction.amount;
    }, 0)

    return {
      Transaction: sumDailyTransactions,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
    }
    else{
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      }
    }
  }

  async getDailyTransactionSalesMaleOrFemale(data: TransactionMaleFemaleDTO){
    let getDailyTransactionSales = (await this.TransactionRepository.find())
    .filter(
      x => x.gender === data.gender && x.date === new Date().toJSON().slice(0, 10));
    if(getDailyTransactionSales.length){
      const sumDailyTransactionsMaleOrFemale = getDailyTransactionSales.reduce((total, transaction) => {
        return total + transaction.amount;
      }, 0)
      return {
        Transaction: sumDailyTransactionsMaleOrFemale,
        ResponseCode: '00',
        ResponseDescription: 'Succesfully',
      };
      }
      else{
        return {
          ResponseCode: '03',
          ResponseDescription: 'No record found',
        }
      }
  }
 
  async getTransactionSalesOfCurrentMonthMale0rFemale(data: TransactionMaleFemaleDTO){
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    const transactionSalesOfCurrentMonthMale0rFemale = (await this.TransactionRepository.find()).filter(
      (x:any) =>
        x.gender === data.gender && 
        new Date(x.date).getMonth() + 1 === currentMonth
    );
    if(transactionSalesOfCurrentMonthMale0rFemale.length){
    const getTransactionSalesOfCurrentMonthMale0rFemale = transactionSalesOfCurrentMonthMale0rFemale.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    return {
      Transaction: getTransactionSalesOfCurrentMonthMale0rFemale,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    }
    }
    else{
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      }
    }
  }

  async getTransactionSalesOfCurrentYearMale0rFemale(data: TransactionMaleFemaleDTO){
    const currentYear = new Date().getFullYear();

    const getTransactionSalesOfCurrentYearMale0rFemale = (await this.TransactionRepository.find()).filter(
      (x:any) =>
        x.gender === data.gender && 
        new Date(x.date).getFullYear()  === currentYear
    );
    if(getTransactionSalesOfCurrentYearMale0rFemale.length){
    const transactionSalesOfCurrentMonthMale0rFemale = getTransactionSalesOfCurrentYearMale0rFemale.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    return {
      Transaction: transactionSalesOfCurrentMonthMale0rFemale,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    }
    }
    else{
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      }
    }
  }

  async getTransactionSalesOfCurrentMonth() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based

    const transactionsThisMonth = (await this.TransactionRepository.find()).filter(
      (transactionMonthly) => {
        const transactionDate = new Date(transactionMonthly.date);
        return (
          transactionDate.getMonth() + 1 === currentMonth
        );
      }
    );
    if(transactionsThisMonth.length){
    const getTransactionSalesOfCurrentMonth = transactionsThisMonth.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    return {
      Transaction: getTransactionSalesOfCurrentMonth,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    }
  }
  else{
    return {
      ResponseCode: '03',
      ResponseDescription: 'No record found',
    }
  }
  }

  async getTransactionSalesOfCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const transactionsThisYear = (await this.TransactionRepository.find()).filter(
      (transactionYearly) => {
        const transactionDate = new Date(transactionYearly.date);
        return (
          transactionDate.getFullYear() === currentYear
        );
      }
    );
    if(transactionsThisYear.length){
    const getTransactionSalesOfCurrentYear = transactionsThisYear.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    return {
      Transaction: getTransactionSalesOfCurrentYear,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    }
  }
  else{
    return {
      ResponseCode: '03',
      ResponseDescription: 'No record found',
    }
  }
  }

  async updateTransactionById(id: any, data: Partial<TransactionDTO>) {
    let transaction = await this.find(id);
    await this.TransactionRepository.update(id, data);
    transaction = await this.find(id);
    return {
      resident: transaction,
      ResponseCode: '00',
      ResponseDescription: 'Transaction updated succesfully',
    };
  }
}
