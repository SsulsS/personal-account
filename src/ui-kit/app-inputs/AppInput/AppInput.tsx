import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { INPUT_MAX_LENGTH } from 'constants/general';
import { checkIsMacOs } from 'utils/checkIsMacOs';
import { joinClasses } from 'utils/joinClasses';

import { ClosedEyeIcon, OpenedEyeIcon } from 'assets/icons';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';
import AppCrossBtn from 'ui-kit/app-btns/AppCrossBtn/AppCrossBtn';

import { StyledAppInput } from './AppInput.styles';

export interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelectOnFocus?: boolean;
  label?: string;
  errCssMinHeight?: string;
  errText?: string;
  isValid?: boolean;
  iconSize?: number;
  passwordVisibilityAriaLabel?: string;
  clearBtnAriaLabel?: string;
  LeftEl?: ReactElement | string | false | null;
  RightEl?: ReactElement | string | false | null;
  onClear?: () => void;
}

const getInputType = (type: string, isPassVisible: boolean) => {
  if (type !== 'password' && type !== 'text') {
    return type;
  }

  if (type !== 'password' || (type === 'password' && isPassVisible)) {
    return 'text';
  }

  return 'password';
};

const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(
  (
    {
      className,
      errCssMinHeight,
      type,
      label,
      placeholder = ' ',
      LeftEl,
      RightEl,
      errText,
      isValid = true,
      iconSize = 24,
      value,
      disabled,
      isSelectOnFocus = true,
      passwordVisibilityAriaLabel = 'Показать или скрыть пароль.',
      clearBtnAriaLabel = 'Очистить поле ввода.',
      maxLength = INPUT_MAX_LENGTH,
      autoComplete = 'off',
      required,
      onClear,
      onFocus,
      onBlur,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const previousValue = useRef<IAppInputProps['value']>(value);

    const [isLabelRaised, setIsLabelRaised] = useState(false);

    const [isPassVisible, setIsPassVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current
    );

    useEffect(() => {
      const isLabelRaiseRequired = Boolean(
        value || document.activeElement === inputRef.current
      );

      setIsLabelRaised(isLabelRaiseRequired);
    }, [value]);

    const handleClearBtnClick = () => {
      if (onClear) {
        previousValue.current = value;
        onClear();
        inputRef.current?.focus();
      }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      if (isSelectOnFocus) {
        e.target.select();
      }

      setIsLabelRaised(true);

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (!value) {
        setIsLabelRaised(false);
      }

      onBlur?.(e);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const isCtrlKeyDown = (!checkIsMacOs() && e.ctrlKey) || e.metaKey;

      if (e.key === 'z' && isCtrlKeyDown) {
        e.preventDefault();

        if (inputRef.current) {
          const nativeInputValue = Object.getOwnPropertyDescriptor?.(
            window.HTMLInputElement.prototype,
            'value'
          )?.set;

          nativeInputValue?.call(inputRef.current, previousValue.current);
          inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }

      onKeyDown?.(e);
    };

    const isClearBtnVisible = value && onClear;

    return (
      <StyledAppInput
        className={joinClasses('app-input', className)}
        errCssMinHeight={errCssMinHeight}
        isPassVisible={isPassVisible}
        isLabelRaised={isLabelRaised}
        type={type}
        isValid={isValid}
        errText={errText}
        iconSize={iconSize}
        disabled={disabled}
      >
        <div className="app-input__input-wrapper">
          <label className="app-input__input-box">
            {label && (
              <span className="app-input__label">
                {required ? label + ' *' : label}
              </span>
            )}

            <div className="app-input__left-el">{LeftEl}</div>

            <input
              className="app-input__input"
              type={getInputType(type || 'text', isPassVisible)}
              value={value}
              ref={inputRef}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              maxLength={maxLength}
              onKeyDown={handleKeyDown}
              autoComplete={autoComplete}
              {...rest}
            />

            <div className="app-input__right-el">
              {isClearBtnVisible && (
                <AppCrossBtn
                  className="app-input__clear-btn"
                  disabled={disabled}
                  iconHeight={iconSize}
                  aria-label={clearBtnAriaLabel}
                  onClick={handleClearBtnClick}
                />
              )}

              {RightEl}
            </div>
          </label>

          {type === 'password' && (
            <AppBtn
              className="app-input__eye-btn"
              filling="none"
              aria-label={passwordVisibilityAriaLabel}
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? (
                <ClosedEyeIcon className="app-input__eye-icon" />
              ) : (
                <OpenedEyeIcon className="app-input__eye-icon" />
              )}
            </AppBtn>
          )}
        </div>

        <p className="app-input__err">{errText}</p>
      </StyledAppInput>
    );
  }
);

export default AppInput;
