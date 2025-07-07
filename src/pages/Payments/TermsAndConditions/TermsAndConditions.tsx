import { ChangeEventHandler, FC, useEffect } from 'react';

import AppCheckbox from 'ui-kit/app-inputs/AppCheckbox/AppCheckbox';

import { StyledTermsAndConditions } from './TermsAndConditions.styles';

interface ITermsAndConditionsProps {
  commission: number;
  isCommissionChecked: boolean;
  onCommissionChange: ChangeEventHandler<HTMLInputElement>;
  isOfferChecked: boolean;
  setIsOfferChecked: (value: boolean) => void;
  isTipsDisabled: boolean;
  comissionValue: number;
  setComissionValue: (value: number) => void;
}

const TermsAndConditions: FC<ITermsAndConditionsProps> = ({
  commission,
  isCommissionChecked,
  onCommissionChange,
  isOfferChecked,
  setIsOfferChecked,
  isTipsDisabled,
  comissionValue,
  setComissionValue,
}) => {
  useEffect(() => {
    switch (true) {
      case isCommissionChecked && isTipsDisabled:
        setComissionValue(comissionValue + commission);
        break;
      default:
        setComissionValue(0);
    }
  }, [isCommissionChecked, isTipsDisabled]);

  return (
    <StyledTermsAndConditions className="terms-and-conditions">
      <AppCheckbox
        disabled={!isTipsDisabled}
        className="terms-and-conditions__input"
        onChange={onCommissionChange}
        checked={isCommissionChecked}
      >
        <p className="terms-and-conditions__txt">
          Оплатить комиссию за чаевые сотрудника {commission + ' ₽'}
        </p>
      </AppCheckbox>

      <AppCheckbox
        className="terms-and-conditions__input"
        onChange={() => setIsOfferChecked(!isOfferChecked)}
        checked={isOfferChecked}
      >
        <p className="terms-and-conditions__txt">
          Согласен и принимаю условия{' '}
          <a
            href="https://gozpp.ru/images/wp-content/uploads/2019/01/oferta2.jpg"
            target="_blank"
            className="terms-and-conditions__link"
            rel="noreferrer"
          >
            Оферты
          </a>
        </p>
      </AppCheckbox>
    </StyledTermsAndConditions>
  );
};

export default TermsAndConditions;
