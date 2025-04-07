import { Stack, styled, Typography } from '@mui/material';

export const Wrapper = styled(Stack)({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Logo = styled('img')({
  objectFit: 'cover',
  width: '188px',
  cursor: 'pointer',
});

export const BottomLogo = styled('img')({
  marginTop: '1rem',
  width: '298px',
  objectFit: 'cover',
});

export const CustomBox = styled(Stack)({
  // marginTop: '2.8rem',
  // minWidth: '660px',
  padding: '1.7rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

export const CodeText = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 400,
  textAlign: 'center',
});

export const MessageParagraph = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 500,
  textAlign: 'center',
});
