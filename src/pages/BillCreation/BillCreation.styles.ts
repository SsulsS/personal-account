import styled from '@emotion/styled';
import { css } from '@mui/material';

export const StyledBillCreation = styled.div(
  ({ theme }) => css`
    display: flex;
    font-family: ${theme.typography.fontFamily};
    margin: 40px 0 250px 0;
    padding-left: 300px;
    

    .create-account {
      &__wrapper {
        display: flex;
        flex-direction: column;
        align-self: start;
        justify-self: start;
      }

      &__back-btn {
        max-width: 200px;
        margin-bottom: 20px;
      }

      &__title {
        font-size: 24px;
        font-weight: 600;
        color: ${theme.palette.text.secondary};
      }

      &__container {
        border-radius: 10px;
        box-shadow: ${theme.shadows[2]};
        width: 600px;
        margin-top: 24px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      &__tips-txt {
        font-weight: 600;
      }

      &__cart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        column-gap: 10px;
      }

      &__cart-icon {
        height: 55px;
        color: ${theme.palette.primary.main};
      }

      &__cart-txt {
        font-size: 14px;
        font-weight: 500;
        color: ${theme.palette.text.secondary};
      }

      &__add-btn {
        padding: 16px 0;
        border-radius: 10px;
      }

      &__btn-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }

      &__clear-btn {
        flex-grow: 1;
        padding: 10px 0;
      }

      &__pay-btn {
        flex-grow: 1;
      }
    }
  `
);
