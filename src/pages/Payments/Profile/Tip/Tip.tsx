import { ChangeEventHandler, FC } from 'react';

import { StyledTip } from './Tip.styles';

interface ITipsProps {
  percent: string;
  price: string | false;
  disabled: boolean;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  tipSelected: number;
}

const Tip: FC<ITipsProps> = ({
  percent,
  price,
  id,
  disabled,
  onChange,
  tipSelected,
}) => {
  return (
    <StyledTip className="tip">
      <input
        className="tip__input"
        type="radio"
        name="tip"
        id={id}
        value={id}
        onChange={onChange}
        disabled={!disabled}
        checked={tipSelected === Number(id)}
      />
      <label className="tip__label" htmlFor={id}>
        <p className="tip__percent">{percent}</p>
        <p className="tip__price">{price}</p>
      </label>
    </StyledTip>
  );
};

export default Tip;
