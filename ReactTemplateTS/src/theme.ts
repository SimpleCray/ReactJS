import { createTheme } from '@mui/material/styles';

export const COLOR = {
  red: '#E10600',
  blue: '#537FE7',
  green: '#54B435',
  blueGreen: '#2CCCD3',
  white: '#FFF',
  whiteSmoke: '#DEE2E6',
  black: '#000',
  gray: '#999999',
  backgroundColorDisabled: 'rgba(153, 153, 153, 1)',
};

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: COLOR.blue,
      contrastText: COLOR.white,
    },
    secondary: {
      main: COLOR.green,
    },
    error: {
      main: COLOR.red,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'serif'].join(','),
  },
  components: {
    // Add custom components style
  },
});

export default theme;
