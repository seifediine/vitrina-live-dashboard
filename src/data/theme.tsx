import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#103B66',
    },
    secondary: {
      main: '#21B8F9',
    },
    success: {
      main: '#00C48C',
    },
    error: {
      main: '#F33451',
    },
    warning: {
      main: '#FFA26B',
    },
  },
  typography: {
    fontFamily: 'Noto Sans HK',
    fontWeightMedium: 500,
  },
})
