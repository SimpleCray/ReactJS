import { Stack, styled, Typography, IconButton } from '@mui/material';

export const AlertBox = styled(Stack)({
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  // border: '1px solid black',
  padding: '1rem',
  gap: '1rem',
  borderRadius: '8px',
  cursor: 'default',
  position: 'relative',
});

export const AlertText = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 400,
});

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: 0,
  top: 0,
});
