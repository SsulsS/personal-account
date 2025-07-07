import { FC } from 'react';

import { joinClasses } from 'utils/joinClasses';
import { IIsMobileViewProp } from 'types/general';

import background from 'assets/images/auth-background-lk.png';

import { StyledAuthWrapper } from './AuthWrapper.styles';

interface IAuthWrapperProps extends IIsMobileViewProp {
  children: React.ReactNode;
  className: string;
}

const AuthWrapper: FC<IAuthWrapperProps> = ({
  isMobileView,
  children,
  className,
}) => {
  return (
    <StyledAuthWrapper className={joinClasses('auth-wrapper', className)}>
      <div className="auth-wrapper-content-box">{children}</div>

      {!isMobileView && (
        <div className="background">
          <img
            src={background}
            alt="Фоновое изображение"
            className="background__img"
          />
        </div>
      )}
    </StyledAuthWrapper>
  );
};

export default AuthWrapper;
