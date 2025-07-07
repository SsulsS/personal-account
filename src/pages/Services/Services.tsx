import { useEffect } from 'react';

import { setAccounts } from 'store/accounts';
import { useAppDispatch } from 'store';

import { getUsers } from 'api/auth';

import { IUser } from 'types/auth';

import Accounts from './Accounts/Accounts';
import OperationsSearch from './OperationsSearch/OperationsSearch';
import { StyledServices } from './Services.styles';

const Services = () => {
  const dispatch = useAppDispatch();

  const userId = localStorage.getItem('id');

  useEffect(() => {
    const handleAccountsGet = async () => {
      try {
        const response = await getUsers();

        const accounts = response.data.find(
          (item) => item.id === userId
        )?.accounts;

        if (accounts) {
          dispatch(setAccounts(accounts));
        }
      } catch (err) {
        console.error(err);
      }
    };

    handleAccountsGet();
  }, []);

  return (
    <StyledServices className="service">
      <OperationsSearch className="service__search-input" />

      <Accounts />
    </StyledServices>
  );
};

export default Services;
