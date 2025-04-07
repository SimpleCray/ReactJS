import { Box, IconButton, Popper, styled, Typography } from '@mui/material';

export const UserPopper = styled(Popper)({
  zIndex: 10000,
  background: 'white',
  boxShadow:
    'rgb(0, 0, 0, 0.2) 0px 5px 5px -3px, rgb(0, 0, 0, 0.14) 0px 8px 10px 1px, rgb(0, 0, 0, 0.12) 0px 3px 14px 2px',
});

export const PopoverContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 375px;
  padding: 15px;
  text-align: center;
`;

export const ClosePopover = styled(IconButton)({
  position: 'absolute',
  top: 0,
  right: 0,
});
