import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Kiwi } from '@kiwi/icons';

const StyledKiwi = styled(Kiwi)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledKiwi />
    </Box>
  );
}
