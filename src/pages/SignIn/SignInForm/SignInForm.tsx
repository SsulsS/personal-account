import { FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAccounts } from 'store/accounts';

import { getUsers } from 'api/auth';

import { useInputValidation } from 'hooks/useInput/useInput';
import { IIsMobileViewProp } from 'types/general';
import { ROUTES } from 'constants/general';

import { ArrowRightIcon } from 'assets/icons';

import AppSpinner from 'ui-kit/AppSpinner/AppSpinner';
import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';
import AppInput from 'ui-kit/app-inputs/AppInput/AppInput';

import { data } from 'pages/SignIn/constants';

import { StyledSignInForm } from './SignInForm.styles';

const {
  title,
  errTitle,
  mobSubtitle,
  errSubtitle,
  emailLabel,
  mobEmailLabel,
  passwordLabel,
  errLoginText,
  errPasswordText,
} = data;

interface ISignInFormProps extends IIsMobileViewProp {}

const SignInForm: FC<ISignInFormProps> = ({ isMobileView }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useInputValidation(
    '',
    { required: true, isEmail: true },
    { errTexts: { isEmail: errLoginText } }
  );

  const password = useInputValidation(
    '',
    { required: true, isPassword: true },
    { errTexts: { isPassword: errPasswordText } }
  );

  const [isLoading, setIsLoading] = useState(false);

  const [isFormValid, setIsFormValid] = useState(true);

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        email: login.value,
        password: password.value,
      };

      const response = await getUsers();

      response.data.forEach((element) => {
        if (
          element.user.login === payload.email &&
          element.user.password === payload.password
        ) {
          navigate(ROUTES.services);
          localStorage.setItem('id', element.id);
          localStorage.setItem('jwt', element.id);
        } else {
          setIsFormValid(false);
        }
      });
    } catch (err) {
      setIsFormValid(false);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFormValid) {
      return;
    }

    setIsFormValid(true);
  }, [login.value, password.value]);

  const isSubmitBtnDisabled =
    !login.isValid || !password.isValid || !login.value || !password.value;

  if (isLoading) {
    return <AppSpinner />;
  }

  return (
    <StyledSignInForm className="sign-in-form" onSubmit={onSubmit}>
      <div className="sign-in-form__header">
        <h2 className="sign-in-form__title">
          {isFormValid ? title : errTitle}
        </h2>

        {isFormValid ? (
          isMobileView && (
            <p className="sign-in-form__subtitle">{mobSubtitle}</p>
          )
        ) : (
          <p className="sign-in-form__subtitle">{errSubtitle}</p>
        )}
      </div>

      <AppInput
        type="text"
        className="sign-in-form__input sign-in-form__login-input"
        label={isMobileView ? mobEmailLabel : emailLabel}
        value={login.value}
        onChange={login.handleChange}
        onClear={login.handleClear}
        isValid={login.isValid && isFormValid}
        errText={login.errText}
      />

      <AppInput
        type="password"
        className="sign-in-form__input sign-in-form__password-input"
        label={passwordLabel}
        value={password.value}
        onChange={password.handleChange}
        onClear={password.handleClear}
        isValid={password.isValid && isFormValid}
        errText={password.errText}
      />

      <AppBtn
        type="submit"
        className="sign-in-form__submit-button"
        filling="filled"
        disabled={isSubmitBtnDisabled}
        RightIcon={ArrowRightIcon}
      >
        Далее
      </AppBtn>
    </StyledSignInForm>
  );
};

export default SignInForm;
