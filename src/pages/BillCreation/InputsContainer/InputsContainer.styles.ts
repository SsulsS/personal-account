import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledInputsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .inputs {
      &__inputs-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      &__input {
        height: 48px;
      }

      &__select {
        .select {
          &__control {
            height: 48px;
            border-radius: 10px;
          }
        }
      }

      &__buttons-container {
        display: flex;
        align-self: flex-end;
        margin-right: 20px;
      }
    }
  `
);
