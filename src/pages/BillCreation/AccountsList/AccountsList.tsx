import { FC } from 'react';

import { IAccount } from 'types/billCreation';

import { Edit } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledAccountsList } from './AccountsList.styles';

import AccountItem from '../AccountItem/AccountItem';

interface IAccountsListProps {
  accounts: IAccount[];
}

const AccountsList: FC<IAccountsListProps> = ({ accounts }) => {
  return (
    <StyledAccountsList>
      {accounts.map((item, idx) => (
        <div key={idx} className="accounts-container">
          <AccountItem item={item} />
          <AppBtn
            className="accounts-container__btn"
            filling="none"
            RightIcon={Edit}
          />
        </div>
      ))}
    </StyledAccountsList>
  );
};

export default AccountsList;
