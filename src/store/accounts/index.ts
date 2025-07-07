import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAccountsState } from './types';

export const initialState: IAccountsState = {
  accounts: [],
  originalAccounts: [],
  searchQuery: {
    price: '',
    accountNumber: '',
  },
  sortDirection: {
    accountNumber: 'botm-up' as 'botm-up' | 'up-botm',
    createDate: 'botm-up' as 'botm-up' | 'up-botm',
    sumPrice: 'botm-up' as 'botm-up' | 'up-botm',
  },
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<IAccountsState['accounts']>) {
      state.accounts = action.payload;
      state.originalAccounts = action.payload;
    },

    setSearchPrice(
      state,
      action: PayloadAction<IAccountsState['searchQuery']['price']>
    ) {
      state.searchQuery.price = action.payload;

      if (action.payload === '' && state.searchQuery.accountNumber === '') {
        state.accounts = state.originalAccounts;
        return;
      }

      state.accounts = state.originalAccounts.filter((account) => {
        const priceFilter = account.sumPrice.includes(action.payload);
        const numberFilter = state.searchQuery.accountNumber
          ? account.accountNumber.includes(state.searchQuery.accountNumber)
          : true;
        return priceFilter && numberFilter;
      });
    },

    setSearchAccountNumber(
      state,
      action: PayloadAction<IAccountsState['searchQuery']['accountNumber']>
    ) {
      state.searchQuery.accountNumber = action.payload;

      if (action.payload === '' && state.searchQuery.price === '') {
        state.accounts = state.originalAccounts;
        return;
      }

      state.accounts = state.originalAccounts.filter((account) => {
        const priceFilter = state.searchQuery.price
          ? account.sumPrice.includes(state.searchQuery.price)
          : true;
        const numberFilter = account.accountNumber.includes(action.payload);
        return priceFilter && numberFilter;
      });
    },

    sortAccountsByNumber(state) {
      const direction = state.sortDirection.accountNumber;
      state.accounts.sort((a, b) =>
        direction === 'botm-up'
          ? a.accountNumber.localeCompare(b.accountNumber)
          : b.accountNumber.localeCompare(a.accountNumber)
      );

      state.sortDirection.accountNumber =
        direction === 'botm-up' ? 'up-botm' : 'botm-up';
    },

    sortAccountsByDate(state) {
      const direction = state.sortDirection.createDate;

      state.accounts.sort((a, b) => {
        const dateA = new Date(
          `${a.createDate.day} ${a.createDate.time}`
        ).getTime();

        const dateB = new Date(
          `${b.createDate.day} ${b.createDate.time}`
        ).getTime();

        return direction === 'botm-up' ? dateA - dateB : dateB - dateA;
      });

      state.sortDirection.createDate =
        direction === 'botm-up' ? 'up-botm' : 'botm-up';
    },

    sortAccountsByPrice(state) {
      const direction = state.sortDirection.sumPrice;
      state.accounts.sort((a, b) =>
        direction === 'botm-up'
          ? parseFloat(a.sumPrice) - parseFloat(b.sumPrice)
          : parseFloat(b.sumPrice) - parseFloat(a.sumPrice)
      );

      state.sortDirection.sumPrice =
        direction === 'botm-up' ? 'up-botm' : 'botm-up';
    },
  },
});

export const {
  setAccounts,
  setSearchPrice,
  setSearchAccountNumber,
  sortAccountsByNumber,
  sortAccountsByDate,
  sortAccountsByPrice,
} = accountsSlice.actions;

export default accountsSlice.reducer;
