import { ButtonHTMLAttributes, FC, memo, SVGProps } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppBtn } from './AppBtn.styles';

export interface IAppBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  filling?: 'filled' | 'border' | 'none' | 'ascetic';
  LeftIcon?: FC<SVGProps<SVGSVGElement>>;
  RightIcon?: FC<SVGProps<SVGSVGElement>>;
  isLoading?: boolean;
  iconHeight?: number;
}

const AppBtn: FC<IAppBtnProps> = ({
  children,
  filling = 'filled',
  LeftIcon,
  RightIcon,
  className,
  isLoading,
  disabled,
  iconHeight,
  ...rest
}) => {
  return (
    <StyledAppBtn
      className={joinClasses('app-btn', className)}
      type="button"
      filling={filling}
      disabled={disabled || isLoading}
      iconHeight={iconHeight}
      {...rest}
    >
      {LeftIcon && (
        <LeftIcon className="app-btn__icon app-btn__icon_position_left" />
      )}
      {children}
      {RightIcon && (
        <RightIcon className="app-btn__icon app-btn__icon_position_right" />
      )}
    </StyledAppBtn>
  );
};

export default memo(AppBtn);
