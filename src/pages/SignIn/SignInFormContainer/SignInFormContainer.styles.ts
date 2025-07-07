import styled from '@emotion/styled';
import { css } from '@mui/material';

export const StyledSignInFormContainer = styled.div(
  ({ theme }) => css`
    max-width: 610px;
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 30px;

    .sign-in-form-container {
      &__logo {
        margin-bottom: 50px;
        max-width: 96px;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.values.md}px) {
      max-width: 425px;
      padding: 0 16px;

      .form-wrapper {
        &__logo {
          margin-bottom: 70px;
        }
      }
    }
  `
);
