import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledSignInTerms = styled.div(
  ({ theme }) => css`
    .sign-in-terms {
      &__text {
        font-size: 16px;
        color: ${theme.palette.text.secondary};
      }

      &__link {
        text-decoration: none;
        color: ${theme.palette.text.accent};
      }

      @media screen and (max-width: ${theme.breakpoints.values.md}px) {
        &__text {
          font-size: 14px;
        }
      }
    }
  `
);
