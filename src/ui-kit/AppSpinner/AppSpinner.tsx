import { forwardRef, HtmlHTMLAttributes } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppSpinner } from './AppSpinner.styles';

export interface IAppSpinnerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  size?: number;
  className?: string;
}

const AppSpinner = forwardRef<HTMLDivElement, IAppSpinnerProps>(
  ({ size = 48, className, ...rest }, ref) => {
    return (
      <StyledAppSpinner
        className={joinClasses('app-spinner', className)}
        size={size}
        {...rest}
      >
        <div ref={ref} className="app-spinner__spinner" />
      </StyledAppSpinner>
    );
  }
);

export default AppSpinner;
