import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IAppSpinnerProps } from './AppSpinner';

interface IStyledAppSpinnerProps extends Pick<IAppSpinnerProps, 'size'> {}

export const StyledAppSpinner = styled.div<IStyledAppSpinnerProps>(
  ({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    .app-spinner {
      &__spinner {
        display: block;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite;
      }

      &__spinner::before,
      &__spinner::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 2px solid ${theme.palette.primary.light};
        animation: prixClipFix 2s linear infinite;
        transition: border-color ${theme.transitions.duration.shortest}ms
          ease-out;
      }

      &__spinner::after {
        border-color: ${theme.palette.primary.main};
        animation:
          prixClipFix 2s linear infinite,
          rotate 0.5s linear infinite reverse;
        inset: 4px;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes prixClipFix {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
          clip-path: polygon(
            50% 50%,
            0 0,
            100% 0,
            100% 100%,
            100% 100%,
            100% 100%
          );
        }
        75% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
      }
    }
  `
);
