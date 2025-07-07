import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledAmount = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    align-items: center;

    .amount {
      &__icon {
        width: auto;
        height: 22px;
      }

      &__text {
        margin-left: 6px;
        color: ${theme.palette.text.secondary};
        text-align: center;
        font-size: 16px;
        font-weight: 600;
      }

      &__price {
        margin-left: 10px;
        color: ${theme.palette.text.primary};
        font-size: 18px;
        font-weight: 600;
      }

      &__switch {
        flex-grow: 1;
        justify-content: flex-end;
      }
    }
  `
);
