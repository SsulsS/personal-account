import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTermsAndConditions = styled.div(
  ({ theme }) => css`
    width: 100%;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 9px;

    .terms-and-conditions {
      &__input {
        gap: 0;
        .app-checkbox__checkbox:disabled {
          background-color: ${theme.palette.background.neutral};
          border-color: ${theme.palette.controls.dark};
          opacity: 0.3;
        }
      }

      &__txt {
        color: ${theme.palette.text.secondary};
        font-size: 12px;
        margin-left: 10px;
      }

      &__link {
        text-decoration: none;
        color: ${theme.palette.controls.focus};
      }

      @media (any-hover: hover) {
        &__link:hover {
          opacity: 0.8;
        }
      }
    }
  `
);
