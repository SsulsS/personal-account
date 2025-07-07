import styled from '@emotion/styled';
import { css } from '@mui/material';

export const StyledAccountsList = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .accounts-container {
      border: 1px solid ${theme.palette.secondary.light};
      padding: 14px;
      border-radius: 14px;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      max-width: 560px;

      &__container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &__txt-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }

      &__txt-container-method {
        justify-content: space-between;
      }

      &__txt {
        color: ${theme.palette.text.primary};
        font-size: 14px;
        font-weight: 500;
      }

      &__txt-price {
        margin-left: 46px;
      }

      &__txt-method {
        justify-self: start;
      }

      &__txt-tax {
        align-self: flex-end;
        color: ${theme.palette.text.tertiary};
      }

      &__btn {
        height: 0;
        padding: 15px;
      }
    }

    .text-blur {
      color: ${theme.palette.text.tertiary};
      font-weight: 400;
    }
  `
);
