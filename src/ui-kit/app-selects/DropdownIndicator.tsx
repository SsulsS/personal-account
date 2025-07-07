import { FC } from 'react';
import { components, DropdownIndicatorProps } from 'react-select';

import { ArrowDownIcon } from 'assets/icons';

export const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => (
  <components.DropdownIndicator {...props}>
    <ArrowDownIcon />
  </components.DropdownIndicator>
);
