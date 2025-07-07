import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px;
    width: 100%;
    align-self: center;
    font-family: ${theme.typography.fontFamily};
    border-bottom: 1px solid ${theme.palette.secondary.light};

    .header {
      &__container {
        width: 1300px;
        display: flex;

        justify-content: space-between;
      }

      &__logo {
        height: 60px;
        max-width: 220px;
        width: auto;
        transition: height 0.2s, max-width 0.2s;
      }

      &__link-container {
        display: flex;
        align-items: center;
        gap: 50px;
      }

      &__link {
        color: ${theme.palette.text.secondary};
        font-weight: 500;
        padding: 40px 0;
      }

      &__link_active {
        color: ${theme.palette.text.accent};
        border-bottom: 1px solid ${theme.palette.controls.focus};
      }

      &__profile {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      &__profile-avatar {
        width: 40px;
        height: 40px;
      }

      &__profile-container {
        display: flex;
        flex-direction: column;
      }

      &__profile-name {
        color: ${theme.palette.text.secondary};
        font-weight: 600;
      }

      &__profile-role {
        font-size: 12px;
        color: ${theme.palette.text.tertiary};
      }
    }
  `
);
