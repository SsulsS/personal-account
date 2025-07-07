import { FC } from 'react';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

import { StyledPaymentCreation } from './PaymentCreation.styles';

interface IPaymentCreationProps {
  isPaymentBill: boolean;
  totalAmount: Number;
  isOfferChecked: boolean;
}

const PaymentCreation: FC<IPaymentCreationProps> = ({
  isPaymentBill,
  totalAmount,
  isOfferChecked,
}) => {
  return (
    <StyledPaymentCreation className="payment-creation">
      <AppBtn
        type="submit"
        className="payment-creation__pay-btn"
        disabled={!isOfferChecked || !totalAmount || !isPaymentBill}
        filling="none"
      >
        Оплатить {String(totalAmount) + ' ₽'}
      </AppBtn>
    </StyledPaymentCreation>
  );
};

export default PaymentCreation;
