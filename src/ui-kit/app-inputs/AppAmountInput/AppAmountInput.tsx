import {
  ComponentProps,
  FC,
  FocusEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useCurrencySign } from 'hooks/useCurrencySign';
import { joinClasses } from 'utils/joinClasses';

import { StyledAppAmountInput } from './AppAmountInput.styles';

export interface IAppAmountInputProps
  extends Omit<ComponentProps<'input'>, 'type' | 'inputMode'> {
  isSelectOnFocus?: boolean;
  label?: string;
  errCssMinHeight?: string;
  errText?: string;
  isValid?: boolean;
  currency: string | null;
  lang: string;
  value?: string;
  onClear?: () => void;
}

const AppAmountInput: FC<IAppAmountInputProps> = ({
  className,
  value,
  isSelectOnFocus = true,
  placeholder = '0',
  label,
  disabled,
  required,
  autoComplete = 'off',
  onFocus,
  onBlur,
  onKeyDown,
  isValid = true,
  errCssMinHeight,
  currency,
  lang,
  errText,
  ...rest
}) => {
  const { sign, position } = useCurrencySign(lang, currency);

  const [isLabelRaised, setIsLabelRaised] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const invisibleAmountSpanRef = useRef<HTMLSpanElement>(null);

  const isEmptyValue = !value && value !== '0';

  useEffect(() => {
    const isLabelRaiseNeeded = Boolean(
      !isEmptyValue || document.activeElement === inputRef.current
    );

    setIsLabelRaised(isLabelRaiseNeeded);
  }, [value]);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (isSelectOnFocus) {
      e.target.select();
    }

    setIsLabelRaised(true);

    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (isEmptyValue) {
      setIsLabelRaised(false);
    }

    onBlur?.(e);
  };

  useEffect(() => {
    const isLabelRaiseNeeded = Boolean(
      value || document.activeElement === inputRef.current
    );

    setIsLabelRaised(isLabelRaiseNeeded);
  }, [value]);

  useEffect(() => {
    if (!inputRef?.current || !invisibleAmountSpanRef?.current) {
      return;
    }

    invisibleAmountSpanRef.current.innerText =
      inputRef.current.value === '' ? '0' : inputRef.current.value;
    inputRef.current.style.width = `${invisibleAmountSpanRef.current.offsetWidth}px`;
  }, [inputRef.current?.value, value]);

  return (
    <StyledAppAmountInput
      className={joinClasses('app-amount-input', className)}
      disabled={disabled}
      isValid={isValid}
      errText={errText}
      currencyPosition={position || 'right'}
      errCssMinHeight={errCssMinHeight}
      label={label}
      isLabelRaised={isLabelRaised}
    >
      <label className="app-amount-input__input-wrapper">
        {label && (
          <span className="app-amount-input__label">
            {required ? label + ' *' : label}
          </span>
        )}

        <div className="app-amount-input__sized-box">
          <input
            className="app-amount-input__input"
            ref={inputRef}
            type="text"
            inputMode="decimal"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={autoComplete}
            {...rest}
          />

          <span
            className="app-amount-input__invisible-amount"
            ref={invisibleAmountSpanRef}
          />
        </div>

        <span className="app-amount-input__currency">{sign}</span>
      </label>

      <p className="app-amount-input__err">{errText}</p>
    </StyledAppAmountInput>
  );
};

export default AppAmountInput;
