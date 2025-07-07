import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';

import { setSearchAccountNumber, setSearchPrice } from 'store/accounts';
import { useAppDispatch } from 'store';

import { joinClasses } from 'utils/joinClasses';

import { SearchIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';
import AppInput from 'ui-kit/app-inputs/AppInput/AppInput';
import AppSelect from 'ui-kit/app-selects/AppSelect/AppSelect';

import { StyledOperationsSearch } from './OperationsSearch.styles';

import { filters } from '../constants';

interface IOperationsSearchProps extends FormHTMLAttributes<HTMLFormElement> {}

interface ISelectValue {
  value: string;
}

const OperationsSearch: FC<IOperationsSearchProps> = ({
  className,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState(filters[0]);

  const setAccountsSearchParams = (
    inputValue: string,
    selectValue: ISelectValue
  ) => {
    if (selectValue.value === 'accountNumber') {
      dispatch(setSearchAccountNumber(inputValue.trim()));
    }
    if (selectValue.value === 'price') {
      dispatch(setSearchPrice(inputValue.trim()));
    }
    return false;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAccountsSearchParams(inputValue, selectValue);
  };

  return (
    <StyledOperationsSearch
      className={joinClasses('operations-search', className)}
      onSubmit={handleSubmit}
      {...rest}
    >
      <AppInput
        className="operations-search__input"
        placeholder="поиск"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        LeftEl={
          <AppSelect
            className="operations-search__criteria-select"
            options={filters}
            value={selectValue}
            onChange={(newValue) => newValue && setSelectValue(newValue)}
            isSearchable={false}
          />
        }
        RightEl={
          <AppBtn
            className="operations-search__btn"
            type="submit"
            RightIcon={SearchIcon}
            iconHeight={24}
            aria-label="Начать поиск"
          />
        }
      />
    </StyledOperationsSearch>
  );
};

export default OperationsSearch;
