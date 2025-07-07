import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledAccountRow = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    .account-row {
      &__account-row {
        display: grid;
        grid-template-columns: repeat(5, 1fr) min-content;
        gap: 85px;
        align-items: center;
        padding: 17px 20px;
        border-bottom: 1px solid ${theme.palette.secondary.light};
      }

      &__number,
      &__date-txt-day,
      &__status-txt {
        font-size: 14px;
        color: ${theme.palette.text.primary};
      }

      &__price {
        font-size: 14px;
      }

      &__date-container,
      &__status {
        display: flex;
        gap: 9px;
      }

      &__status {
        gap: 6px;
      }

      &__date-txt-time {
        font-size: 14px;
        color: ${theme.palette.text.tertiary};
      }

      &__btn-container {
        display: flex;
        gap: 20px;
      }

      &__btn {
        width: 25px;
      }

      &__open-btn {
        padding: 10px 6px 8px;
        border: none;

        .app-btn__icon {
          width: 12px;
          height: 6px;
        }
      }

      &__icon {
        width: 15px;
      }
    }
  `
);
