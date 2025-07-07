import { FC, InputHTMLAttributes, useRef, useEffect } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppCheckbox } from './AppCheckbox.styles';

export interface IAppCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isIndeterminate?: boolean;
}

const AppCheckbox: FC<IAppCheckboxProps> = ({
  children,
  className,
  isIndeterminate = false,
  title,
  disabled,
  checked,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!checkboxRef || !checkboxRef.current) {
      return;
    }

    checkboxRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  return (
    <StyledAppCheckbox
      className={joinClasses('app-checkbox', className)}
      title={title}
      disabled={disabled}
      checked={checked}
      isIndeterminate={isIndeterminate}
    >
      <input
        type="checkbox"
        className="app-checkbox__checkbox"
        checked={checked}
        disabled={disabled}
        {...rest}
        ref={checkboxRef}
      />

      {children && <div className="app-checkbox__label">{children}</div>}
    </StyledAppCheckbox>
  );
};

export default AppCheckbox;
