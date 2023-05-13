import { createTheme } from '@mui/material/styles';
import '@fontsource/outfit/'
// Create a theme instance.
const theme = createTheme({
     typography: {
    fontFamily: [
        "outfit",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#33b7fb',
      main: '#00a6fb',
      dark: '#0074af',
      contrastText: '#FBFDFE',
    },
    secondary: {
      light: '#f0f6f8',
      main: '#edf4f7',
      dark: '#a5aaac',
      contrastText: '#051923',
    },
    error:{
        light: '#d4376f',
        main: '#CA054C',
        dark: '#8d0335',
        contrastText: '#FBFDFE',
    },
    warning:{
        light: '#d4376f',
        main: '#CA054C',
        dark: '#8d0335',
        contrastText: '#FBFDFE',
    },
    success:{
        light: '#37d47f',
        main: '#05CA60',
        dark: '#038d43',
        contrastText: '#FBFDFE',
    },
    background:{
        paper: '#edf4f7'
    },
    text:{
        primary: '#222'
    }
  },
});

export default theme