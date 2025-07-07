import { useMediaQuery } from '@mui/material';

import { theme } from 'styles/theme';

import SignInFormContainer from './SignInFormContainer/SignInFormContainer';

import AuthWrapper from '../../ui-kit/AuthWrapper/AuthWrapper';

const SignIn = () => {
  const isMobileView = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`
  );

  return (
    <AuthWrapper isMobileView={isMobileView} className="sign-in">
      <SignInFormContainer isMobileView={isMobileView} />
    </AuthWrapper>
  );
};

export default SignIn;
