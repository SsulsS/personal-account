import { FC, SVGProps } from 'react';

import AppSwitch from 'ui-kit/app-inputs/AppSwitch/AppSwitch';

import { StyledAmount } from './Amount.styles';

interface IAmountProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
  price?: number;
  onChange: () => void;
}

const Amount: FC<IAmountProps> = ({ Icon, text, price, onChange }) => {
  return (
    <StyledAmount className="amount">
      <Icon className="amount__icon" />
      <p className="amount__text">{text}</p>
      {price && <p className="amount__price">{price + ' ₽'}</p>}
      <AppSwitch className="amount__switch" onChange={onChange} />
    </StyledAmount>
  );
};

export default Amount;
