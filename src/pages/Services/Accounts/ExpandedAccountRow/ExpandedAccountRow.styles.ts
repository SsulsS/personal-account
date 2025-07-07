import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledExpandedAccountRow = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    .expanded-account {
      display: flex;
      gap: 50px;
      padding: 20px;

      &__contaner-link-info {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 20px;
        max-width: 326px;
        border-radius: 10px;
        box-shadow: ${theme.shadows[2]};
      }

      &__title {
        font-size: 14px;
        font-weight: 600;
        color: ${theme.palette.text.secondary};
      }

      &__status-container,
      &__container-positions {
        display: flex;
        gap: 6px;
      }

      &__info-container,
      &__container-box-user,
      &__container-box-positions {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      &__icon {
        width: 15px;
      }

      &__container-box {
        padding-top: 20px;
      }

      &__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr) min-content;
        gap: 10px;
      }

      &__info-txt,
      &__info-txt-user,
      &__info-txt-positions {
        font-size: 14px;
        color: ${theme.palette.text.tertiary};
      }

      &__info-txt-user {
        width: 58px;
        flex-grow: 0;
      }

      &__info-txt-positions {
        font-weight: 500;
      }

      &__data-txt,
      &__data-txt-positions {
        font-size: 14px;
        color: ${theme.palette.text.primary};
      }

      &__pay-btn {
        margin-right: 10px;
        align-self: end;
        justify-self: flex-end;
      }

      &__link {
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        color: ${theme.palette.text.accent};
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }

      &__copy-btn {
        color: ${theme.palette.controls.focus};
        padding: 0;
        height: auto;
      }
    }
  `
);
