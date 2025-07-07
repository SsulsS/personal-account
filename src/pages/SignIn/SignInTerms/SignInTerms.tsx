import { StyledSignInTerms } from './SignInTerms.styles';

const SignInTerms = () => {
  return (
    <StyledSignInTerms className="sign-in-terms">
      <p className="sign-in-terms__text">
        Своими действиями вы даёте своё согласие и принимаете условия{' '}
        <a
          href="https://i.pinimg.com/originals/21/95/2e/21952ee007c8f9a88475e4c18665acc0.jpg"
          className="sign-in-terms__link"
          target="_blank"
          rel="noreferrer"
        >
          Оферты
        </a>{' '}
        и соглашаетесь с условиями{' '}
        <a
          href="https://i.pinimg.com/originals/21/95/2e/21952ee007c8f9a88475e4c18665acc0.jpg"
          className="sign-in-terms__link"
          target="_blank"
          rel="noreferrer"
        >
          Обработки персональных данных
        </a>
      </p>
    </StyledSignInTerms>
  );
};

export default SignInTerms;
