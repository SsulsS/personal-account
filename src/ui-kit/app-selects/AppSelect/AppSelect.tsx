import { FC, useEffect, useState } from 'react';
import Select, { ActionMeta } from 'react-select';

import { joinClasses } from 'utils/joinClasses';
import { IClassName } from 'types/general';

import { StyledAppSelect } from './AppSelect.styles';

import { ISelectOption } from '../types';
import { DropdownIndicator } from '../DropdownIndicator';

export interface IAppSelectProps extends IClassName {
  options: ISelectOption[];
  label?: string;
  placeholder?: string;
  noOptionsMessage?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  errCssMinHeight?: string;
  errText?: string;
  isValid?: boolean;
  required?: boolean;
  value: ISelectOption | null;
  onChange: (
    option: ISelectOption | null,
    actionMeta?: ActionMeta<ISelectOption>
  ) => void;
}

const AppSelect: FC<IAppSelectProps> = ({
  options,
  className,
  label,
  placeholder = '',
  noOptionsMessage = 'Ничего не найдено',
  isDisabled,
  isLoading,
  isSearchable = true,
  errCssMinHeight,
  errText,
  isValid = true,
  required,
  value,
  onChange,
}) => {
  const [isLabelRaised, setIsLabelRaised] = useState(false);

  useEffect(() => {
    setIsLabelRaised(Boolean(value));
  }, [value]);

  const handleMenuOpen = () => {
    setIsLabelRaised(true);
  };

  const handleMenuClose = () => {
    !value && setIsLabelRaised(false);
  };

  const customStyles = {
    //@ts-ignore
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#37ACDE' : '#B6E6F9',
      boxShadow: state.isFocused ? '0 0 0 1.5px #37ACDE' : 'none',
      backgroundColor: isDisabled ? '#F5F8FA' : '#FFFFFF',
      minHeight: 44,
      borderRadius: 12,
      transition: 'border-color 0.2s, box-shadow 0.2s',
      '&:hover': {
        borderColor: '#37ACDE',
      },
    }),
    //@ts-ignore
    option: (provided, state) => ({
      ...provided,
      fontFamily: 'Noto Sans',
      backgroundColor: state.isSelected
        ? '#B6E6F9'
        : state.isFocused
        ? '#E6F7FD'
        : '#FFFFFF',
      color: 'black',
      borderRadius: 8,
      margin: '2px 4px',
      transition: 'background 0.2s',
      '&:hover': {
        backgroundColor: '#E6F7FD',
        color: 'black',
      },
    }),
    //@ts-ignore
    menu: (provided) => ({
      ...provided,
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(55, 172, 222, 0.10)',
      border: '1px solid #B6E6F9',
      marginTop: 6,
      zIndex: 20,
    }),
    //@ts-ignore
    singleValue: (provided) => ({
      ...provided,
      color: '#222',
      fontWeight: 500,
    }),
    //@ts-ignore
    placeholder: (provided) => ({
      ...provided,
      color: '#A0B4C8',
      fontWeight: 400,
    }),
    //@ts-ignore
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#37ACDE',
      padding: '0 8px',
      transition: 'color 0.2s',
    }),
  };

  return (
    <StyledAppSelect
      className={joinClasses('app-select', className)}
      label={label}
      isLabelRaised={isLabelRaised}
      isDisabled={isDisabled}
      errCssMinHeight={errCssMinHeight}
      errText={errText}
      isValid={isValid}
    >
      <div className="app-select__select-box">
        {label && (
          <span className="app-select__label">
            {required ? label + ' *' : label}
          </span>
        )}

        <Select
          styles={customStyles}
          className="app-select__select"
          classNamePrefix="select"
          options={options}
          isClearable={false}
          placeholder={placeholder}
          noOptionsMessage={() => noOptionsMessage}
          components={{ DropdownIndicator }}
          onChange={(newValue, actionMeta) =>
            onChange(
              newValue as ISelectOption,
              actionMeta as ActionMeta<ISelectOption>
            )
          }
          value={value}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          isDisabled={isDisabled || isLoading}
          isLoading={isLoading}
          isSearchable={isSearchable}
          menuPortalTarget={document.body}
        />
      </div>

      <p className="app-select__err">{errText}</p>
    </StyledAppSelect>
  );
};

export default AppSelect;
