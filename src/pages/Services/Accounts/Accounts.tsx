import { useAppDispatch, useAppSelector } from 'store';
import {
  sortAccountsByDate,
  sortAccountsByNumber,
  sortAccountsByPrice,
} from 'store/accounts';

import { SortIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledAccounts } from './Accounts.styles';
import AccountRow from './CloseAccount/AccountRow';

import { accountsHeaders } from '../constants';

const Accounts = () => {
  const dispatch = useAppDispatch();

  const { accounts } = useAppSelector((state) => state.accounts);

  const sortingData = (type: string | undefined) => {
    if (type === 'number') {
      dispatch(sortAccountsByNumber());
    }
    if (type === 'date') {
      dispatch(sortAccountsByDate());
    }
    if (type === 'price') {
      dispatch(sortAccountsByPrice());
    }
  };

  return (
    <StyledAccounts className="accounts">
      <div className="accounts__column">
        {accountsHeaders.map(({ label, sortable, type }) => (
          <div key={label} className="accounts__column-container">
            <p
              className={`accounts__column-txt ${
                label === 'Статус' ? 'accounts__column-txt-status' : ''
              }`}
            >
              {label}
            </p>
            {sortable && (
              <AppBtn
                className="accounts__column-btn"
                filling="none"
                RightIcon={SortIcon}
                onClick={() => sortingData(type)}
              />
            )}
          </div>
        ))}
      </div>

      {accounts.map((data) => (
        <AccountRow key={data.accountNumber} data={data} />
      ))}
    </StyledAccounts>
  );
};

export default Accounts;
