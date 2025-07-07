import { FC } from 'react';

import { ScoreIcon, TipsIcon } from 'assets/icons';

import { StyledAmountSettings } from './AmountSettings.styles';
import Amount from './Amount/Amount';

interface IAmountProps {
  amount: number;
  onPaymentChange: () => void;
  isTipsDisabled: boolean;
  setIsTipsDisabled: (value: boolean) => void;
}

const AmountSettings: FC<IAmountProps> = ({
  amount,
  onPaymentChange,
  isTipsDisabled,
  setIsTipsDisabled,
}) => {
  return (
    <StyledAmountSettings className="amount-settings">
      <Amount
        Icon={ScoreIcon}
        text="Оплатить счет"
        price={amount}
        onChange={onPaymentChange}
      />

      <Amount
        Icon={TipsIcon}
        text="Оставить чаевые"
        onChange={() => setIsTipsDisabled(!isTipsDisabled)}
      />
    </StyledAmountSettings>
  );
};

export default AmountSettings;
