import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledServices = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.typography.fontFamily};
    margin: 40px auto;
    max-width: 1300px;

    .container {
      display: flex;
      flex-direction: column;
    }
  `
);
