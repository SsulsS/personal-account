import { css } from '@mui/material';
import styled from '@emotion/styled';

export const StyledPayments = styled.form(
  ({ theme }) => css`
    background-color: ${theme.palette.background.primary};
    max-width: 425px;
    padding: 15px 25px 0 25px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: relative;
    z-index: 0;
    font-family: ${theme.typography.fontFamily};
  `
);
