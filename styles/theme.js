import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#BA0000',
      dark: '#0E0B2A',
      light: '',
    },
    secondary: {
      main: '#030021',
      contrastText: '#ffffff',
      dark: '',
    },
    tertiary: {
      main: '#0E0B2A',
      contrastText: '',
      dark: '',
    },
    error: {
      main: '#db3124',
    },
    warning: {
      main: '#eec140',
    },
    success: {
      main: '#04813d',
    },
    light: {
      main: '#f6f9fc',
    },
    darkgrey: {
      main: '#E1E1E1',
    },
    grey: {
      main: '#FCFCFC',
    },
    white: {
      main: '#ffffff',
    },
    text: {
      main: '#0E0B2A',
    },
    btn_transparent: { main: 'transparent' },
  },
  font: {
    primary: 'Montserrat, sans-serif',
    secondary: 'EB Garamond, serif',
  },
  boxShadow: {
    primary: '0px 22px 30px #00000012',
    secondary: '1px 9px 30px #00000012',
  },
  border: {
    primary: '1px solid #44435b',
  },
  spacing: (factor) => `${0.5 * factor}vw`,
})

export default theme
