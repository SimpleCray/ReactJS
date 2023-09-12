import { COLOR } from '../../../theme';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const RadioGroupContainer = styled(Box)({
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1), 1px 1px 3px rgba(0, 0, 0, 0.08)',
  borderRadius: '8px',
  padding: '20px 30px 10px 25px',
});

export const StyledBackground = styled(Box)({
  // width: '100vw',
  height: '100vh',
  backgroundColor: COLOR.white,
});

export const StyledStack = styled(Stack)({
  gap: 10,
});

// Typography

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
  fontWeight: 700,
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

export const Subtext = styled(Typography)({
  textAlign: 'center',
  fontWeight: 400,
  fontSize: '16px',
});

export const SubtextLink = styled(Subtext)({
  display: 'inline-block',
  cursor: 'pointer',
});

export const StyledLoadingButton = styled(LoadingButton)({
  height: '52px',
  textTransform: 'unset',
  backgroundColor: COLOR.black,
  color: 'white',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: COLOR.black,
  },
  '&:disabled': {
    backgroundColor: COLOR.backgroundColorDisabled,
    color: COLOR.white,
  },
});

export const LowPriorityButton = styled(StyledLoadingButton)({
  color: 'black',
  backgroundColor: COLOR.white,
  border: `2px solid ${COLOR.gray}`,
  '&:hover': {
    backgroundColor: COLOR.gray,
  },
  '&:disabled': {
    backgroundColor: COLOR.backgroundColorDisabled,
    color: COLOR.white,
  },
});
