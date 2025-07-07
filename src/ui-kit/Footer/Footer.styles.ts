import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledFooter = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-around;
    background-color: ${theme.palette.background.neutral};
    padding: 40px 0;
    font-family: ${theme.typography.fontFamily};
    margin-top: auto;

    .footer {
      &__inn-container {
        display: flex;
        flex-direction: column;
      }

      &__description,
      &__description-inn {
        color: ${theme.palette.text.secondary};
      }

      &__description-inn {
        color: ${theme.palette.text.tertiary};
      }

      &__contacts-container {
        display: flex;
        gap: 60px;
      }

      &__txt {
        color: ${theme.palette.controls.focus};
        font-weight: 500;
      }

      &__links-container {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }
    }
  `
);
