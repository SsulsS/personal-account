import { FC, useState } from 'react';

import { ISelectOption } from 'types/general';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';
import AppInput from 'ui-kit/app-inputs/AppInput/AppInput';
import AppSelect from 'ui-kit/app-selects/AppSelect/AppSelect';

import { StyledInputsContainer } from './InputsContainer.styles';

import { methodFilteres, taxFilteres, typeFilteres } from '../constants';

interface IInputsContainerProps {
  setIsOpenAddProduct: (value: boolean) => void;
}

const InputsContainer: FC<IInputsContainerProps> = ({
  setIsOpenAddProduct,
}) => {
  const [positionValue, setPositionValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [quantityValue, setQuantityValue] = useState('');

  const [taxValue, setTaxValue] = useState<ISelectOption | null>(
    taxFilteres[0]
  );
  const [productValue, setProductValue] = useState<ISelectOption | null>(
    typeFilteres[0]
  );
  const [methodValue, setMethodValue] = useState<ISelectOption | null>(
    methodFilteres[0]
  );

  const isBtnDisabled =
    positionValue === '' || priceValue === '' || quantityValue === '';

  return (
    <StyledInputsContainer className="inputs">
      <div className="inputs__inputs-container">
        <AppInput
          className="inputs__input"
          type="text"
          label="Наименование позиции"
          value={positionValue}
          onChange={(e) => setPositionValue(e.target.value)}
        />
        <AppInput
          className="inputs__input"
          type="number"
          label="Цена"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
        <AppInput
          className="inputs__input"
          type="text"
          label="Количество"
          value={quantityValue}
          onChange={(e) => setQuantityValue(e.target.value)}
        />
        <AppSelect
          className="inputs__select"
          label="Налог"
          options={taxFilteres}
          value={taxValue}
          onChange={(newValue) => setTaxValue(newValue)}
          isSearchable={false}
        />
        <AppSelect
          className="inputs__select"
          label="Предмет расчета"
          options={typeFilteres}
          value={productValue}
          onChange={(newValue) => setProductValue(newValue)}
          isSearchable={false}
        />
        <AppSelect
          className="inputs__select"
          label="Способ расчета"
          options={methodFilteres}
          value={methodValue}
          onChange={(newValue) => setMethodValue(newValue)}
          isSearchable={false}
        />
      </div>
      <div className="inputs__buttons-container">
        <AppBtn onClick={() => setIsOpenAddProduct(false)} filling="none">
          Отмена
        </AppBtn>
        <AppBtn disabled={isBtnDisabled}>Сохранить</AppBtn>
      </div>
    </StyledInputsContainer>
  );
};

export default InputsContainer;
