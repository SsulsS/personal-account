import styled from '@emotion/styled';
import { css } from '@mui/material';

export const StyledSignInForm = styled.form(
  ({ theme }) => css`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .sign-in-form {
      &__header {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 50px;
      }

      &__title {
        font-weight: 600;
        font-size: 28px;
        color: ${theme.palette.text.primary};
      }

      &__subtitle {
        font-size: 18px;
        color: ${theme.palette.text.secondary};
      }

      &__input {
        position: relative;
        padding: 0;

        .app-input__err {
          margin-top: 6px;
        }
      }

      &__login-input {
        margin-bottom: 20px;
      }

      &__password-input {
        margin-bottom: 30px;

        .app-input__eye-btn {
          position: absolute;
          right: 5px;
        }

        .app-input__right-el {
          padding-right: 35px;
        }
      }

      &__submit-button {
        height: 48px;
      }

      @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
        margin-bottom: 40px;

        .sign-in-form {
          &__title {
            font-size: 20px;
          }

          &__subtitle {
            font-size: 16px;
          }

          &__header {
            margin-bottom: 40px;
          }

          &__password-input {
            margin-bottom: 20px;
          }
        }
      }
    }
  `
);
