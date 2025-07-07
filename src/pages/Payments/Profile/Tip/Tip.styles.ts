import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledTip = styled.div(
  ({ theme }) => css`
    .tip {
      &__input:checked,
      &__input {
        position: absolute;
        visibility: hidden;
      }

      &__input + .tip__label {
        position: relative;
        border-radius: 10px;
        width: 79px;
        height: 71px;
        background-color: ${theme.palette.background.line};
        color: ${theme.palette.text.secondary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
      }

      &__percent {
        font-size: 18px;
        font-weight: 600;
      }

      &__input + &__label {
        background-color: ${theme.palette.background.neutral};
      }
      &__input:checked + .tip__percent,
      &__input:checked + .tip__label {
        background-color: ${theme.palette.controls.focus};
        color: ${theme.palette.text.invertedPrimary};
      }

      @media (any-hover: hover) {
        &__input + .tip__label:hover {
          opacity: 0.8;
        }
      }

      &__input:disabled + .tip__label {
        color: ${theme.palette.text.disabled};
        background-color: ${theme.palette.background.neutral};
        cursor: auto;
        opacity: 0.6;
      }
    }
  `
);
