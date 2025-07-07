import { IAccount } from 'types/accounts';

export type TSortDirection = 'botm-up' | 'up-botm';

export interface ISortDirectionState {
  accountNumber: TSortDirection;
  createDate: TSortDirection;
  sumPrice: TSortDirection;
}

export interface IAccountsState {
  accounts: IAccount[];
  originalAccounts: IAccount[];
  searchQuery: {
    price: string;
    accountNumber: string;
  };
  sortDirection: ISortDirectionState;
}
