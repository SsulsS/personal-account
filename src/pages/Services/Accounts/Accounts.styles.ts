import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledAccounts = styled.div(
  ({ theme }) => css`
    border: 1px solid #ebe6fa;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-top: 32px;

    .accounts {
      &__column {
        display: grid;
        padding: 20px;
        gap: 85px;
        grid-template-columns: repeat(5, 1fr) min-content;
        background-color: ${theme.palette.background.neutral};
      }

      &__column-container {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      &__column-txt {
        font-size: 12px;
        font-weight: 500;
        color: ${theme.palette.text.secondary};
      }

      &__column-btn {
        padding: 0;
        color: ${theme.palette.text.tertiary};
      }
    }
  `
);
