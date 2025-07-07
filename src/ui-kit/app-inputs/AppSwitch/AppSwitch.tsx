import { FC, InputHTMLAttributes, useId } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppSwitch } from './AppSwitch.styles';

export interface IAppSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
}

const AppSwitch: FC<IAppSwitchProps> = ({
  className,
  children,
  height = 20,
  ...rest
}) => {
  const id = useId();

  return (
    <StyledAppSwitch
      className={joinClasses('app-switch', className)}
      height={height}
    >
      <input
        type="checkbox"
        className="app-switch__switcher"
        id={id}
        {...rest}
      />

      {children && (
        <label htmlFor={id} className="app-switch__label">
          {children}
        </label>
      )}
    </StyledAppSwitch>
  );
};

export default AppSwitch;
