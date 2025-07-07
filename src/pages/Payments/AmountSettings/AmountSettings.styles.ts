import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledAmountSettings = styled.div(
  ({ theme }) => css`
    width: 100%;
    border-radius: 14px;
    background-color: ${theme.palette.background.secondary};
    box-shadow: ${theme.shadows[3]};
  `
);
