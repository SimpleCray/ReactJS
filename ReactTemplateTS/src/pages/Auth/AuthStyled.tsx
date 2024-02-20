import { Box, Button, Stack, styled, Typography } from '@mui/material';

export const AuthBox = styled(Box)(({ theme }) => ({
  // backgroundColor: themes.light.backgroundColorWhite,
  padding: '24px 0',
  minWidth: '600px',
  maxWidth: '600px',
  alignItems: 'center',
}));

export const StyledStack = styled(Stack)({
  gap: 10,
});

export const TitleTextBig = styled(Typography)({
  fontSize: '24px',
  fontWeight: 400,
  textAlign: 'center',
});

export const Subtitle = styled(Typography)({
  fontSize: '12px',
  fontWeight: 400,
  textAlign: 'center',
  margin: '-5px 0 30px 0',
});

export const TitleText = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  textAlign: 'center',
});

export const StepTitle = styled(TitleText)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: '40px',
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
}));

export const TextButton = styled(Button)({
  display: 'flex',
  textTransform: 'unset',
  fontSize: '1rem',
  border: '1px solid black',
  height: '54px',
});

export const Logo = styled('img')({
  width: '20px',
  objectFit: 'cover',
});

export const Subtext = styled(Typography)({
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '16px',
});

export const SubtextLink = styled(Subtext)({
  display: 'inline-block',
  cursor: 'pointer',
});
