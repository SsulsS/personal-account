import styled from '@emotion/styled';
import { css } from '@mui/material';

export const StyledAuthWrapper = styled.div(
  ({ theme }) => css`
    height: 100vh;
    display: flex;
    font-family: ${theme.typography.fontFamily};

    .auth-wrapper-content-box {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .background {
      background-color: ${theme.palette.background.neutral};
      max-width: 764px;
      height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;

      &__img {
        max-width: 811px;
        max-height: 679px;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.values.md}px) {
      .background {
        display: none;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
      align-items: start;
      margin-top: 45px;
    }
  `
);
