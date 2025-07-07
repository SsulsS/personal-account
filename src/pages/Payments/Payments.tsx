import { FormEvent, useEffect, useMemo, useState } from 'react';

import Profile from './Profile/Profile';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import PaymentCreation from './PaymentCreation/PaymentCreation';
import AmountSettings from './AmountSettings/AmountSettings';
import { StyledPayments } from './Payments.stayles';

const amount = 1000;
const commission = 15;

const Payments = () => {
  const [isPaymentBill, setIsPaymentBill] = useState(false);
  const [isCommissionChecked, setIsCommissionChecked] = useState(false);
  const [isOfferChecked, setIsOfferChecked] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isTipsDisabled, setIsTipsDisabled] = useState(false);

  const [payment, setPayment] = useState(0);
  const [percentValue, setPercentValue] = useState(0);
  const [comissionValue, setComissionValue] = useState(0);

  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const onFeedbackClick = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
    setFeedback('');
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const payload = { totalAmount, rating, feedback };
    alert(JSON.stringify(payload));
  };

  const onPaymentChange = () => {
    setPayment(payment + (isPaymentBill ? -amount : amount));
    setIsPaymentBill(!isPaymentBill);
  };

  const onCommissionChange = () => {
    setIsCommissionChecked(!isCommissionChecked);
  };

  const totalAmount = useMemo(() => {
    return payment + percentValue + comissionValue;
  }, [payment, percentValue, comissionValue]);

  return (
    <StyledPayments onSubmit={onSubmit}>
      <AmountSettings
        amount={amount}
        onPaymentChange={onPaymentChange}
        isTipsDisabled={isTipsDisabled}
        setIsTipsDisabled={setIsTipsDisabled}
      />
      <Profile
        amount={amount}
        onFeedbackClick={onFeedbackClick}
        isFeedbackOpen={isFeedbackOpen}
        isTipsDisabled={isTipsDisabled}
        setPercentValue={setPercentValue}
        feedback={feedback}
        setFeedback={setFeedback}
        setRating={setRating}
      />
      <TermsAndConditions
        commission={commission}
        isCommissionChecked={isCommissionChecked}
        onCommissionChange={onCommissionChange}
        isOfferChecked={isOfferChecked}
        setIsOfferChecked={setIsOfferChecked}
        isTipsDisabled={isTipsDisabled}
        comissionValue={comissionValue}
        setComissionValue={setComissionValue}
      />
      <PaymentCreation
        isPaymentBill={isPaymentBill}
        totalAmount={totalAmount}
        isOfferChecked={isOfferChecked}
      />
    </StyledPayments>
  );
};

export default Payments;
