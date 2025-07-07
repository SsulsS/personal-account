import { css } from '@emotion/react';
import styled from '@emotion/styled';

import AppBtn from 'ui-kit/app-btns/AppBtn/AppBtn';

export const StyledAppCrossBtn = styled(AppBtn)(
  ({ theme }) => css`
    padding: 0;
    color: ${theme.palette.text.secondary};
    outline-offset: 0;
  `
);
