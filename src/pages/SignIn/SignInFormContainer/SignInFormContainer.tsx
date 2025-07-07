import { FC } from 'react';

import { IIsMobileViewProp } from 'types/general';

import logo from 'assets/images/LK.png';

import { StyledSignInFormContainer } from './SignInFormContainer.styles';

import SignInForm from '../SignInForm/SignInForm';
import SignInTerms from '../SignInTerms/SignInTerms';

interface ISignInFormContainerProps extends IIsMobileViewProp {}

const SignInFormContainer: FC<ISignInFormContainerProps> = ({
  isMobileView,
}) => {
  return (
    <StyledSignInFormContainer className="sign-in-form-container">
      <img
        src={logo}
        alt="Логотип LK"
        className="sign-in-form-container__logo"
      />

      <SignInForm isMobileView={isMobileView} />

      <SignInTerms />
    </StyledSignInFormContainer>
  );
};

export default SignInFormContainer;
