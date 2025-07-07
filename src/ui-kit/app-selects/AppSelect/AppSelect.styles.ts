import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IAppSelectProps } from './AppSelect';

interface IStyledAppSelectProps
  extends Pick<
    IAppSelectProps,
    'label' | 'isDisabled' | 'errCssMinHeight' | 'errText' | 'isValid'
  > {
  isLabelRaised: boolean;
}

export const StyledAppSelect = styled.div<IStyledAppSelectProps>(
  ({
    theme,
    label,
    isLabelRaised,
    isDisabled,
    errCssMinHeight,
    errText,
    isValid,
  }) => {
    const isInvalidSelect = Boolean(!isValid || errText);
    const isEmptyInputDisabled = isDisabled && !isLabelRaised;

    return css`
      padding-top: ${label && '9px'};
      isolation: isolate;

      .app-select {
        &__select-box {
          position: relative;
        }

        &__label {
          pointer-events: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 15px;
          padding: 1px 3px;
          border-radius: 3px;
          background-color: ${isEmptyInputDisabled
            ? 'transparent'
            : theme.palette.background.primary};
          z-index: 1;
          max-width: 80%;
          font-size: 14px;
          color: ${theme.palette.text.tertiary};
          transition-property: font-size, top, left;
          transition-duration: ${theme.transitions.duration.shortest}ms;
          transition-timing-function: ease-out;

          ${isLabelRaised &&
          css`
            top: 0;
            left: 15px;
            font-size: 12px;
            
          `}
        }

        &__err {
          color: ${theme.palette.text.error};
          min-height: ${errCssMinHeight};
          font-size: 12px;
          
        }
      }

      .select {
        &__control {
          border-color: ${isInvalidSelect && theme.palette.error.main};
          box-shadow: none;
          

          @media (any-hover: hover) {
            &:not(&--is-focused):hover,
            &--is-focused:hover {
              border-color: ${isInvalidSelect && theme.palette.error.main};
              
            }
          }
        }

        &__placeholder {
          opacity: ${isLabelRaised ? '1' : '0'};
          transform: translateY(${isLabelRaised ? '0' : '100%'});
          transition-property: opacity, transform;
          transition-duration: ${theme.transitions.duration.shortest}ms;
          transition-timing-function: ease-out;
          
        }
      }
    `;
  }
);
