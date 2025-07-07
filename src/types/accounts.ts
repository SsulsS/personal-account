export interface IAccountItem {
  position: string;
  price: string;
  quantity: string;
  type: string;
  tax: string;
  method: string;
}

interface IPayment {
  comissionValue: string;
  percentValue: number;
}

interface IDate {
  day: string;
  time: string;
}

export interface IAccount {
  accountNumber: string;
  createDate: IDate;
  sumPrice: string;
  payDate: IDate;
  statusValue: string;
  link: string;
  items: IAccountItem[];
  payment?: IPayment;
}
