import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

export const desktopXPadding = 12
export const tabletXPadding = 7.5
export const mobileXPadding = 7.5

export const desktopYPadding = 5
export const tabletYPadding = 1.5
export const mobileYPadding = 2.5

export const MainContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  background: `linear-gradient(to bottom, ${theme.palette.grey.main}, ${theme.palette.grey.main}) no-repeat top`,
  backgroundSize: '100% 25vh',
  minHeight: '100vh',
  overflow: 'auto',
  paddingLeft: theme.spacing(desktopXPadding),
  paddingRight: theme.spacing(desktopXPadding),
  paddingTop: theme.spacing(desktopYPadding),
  paddingBottom: theme.spacing(`${1.5 * desktopYPadding}`),

  [theme.breakpoints.down('lg')]: {
    paddingLeft: theme.spacing(tabletXPadding),
    paddingRight: theme.spacing(tabletXPadding),
    paddingBottom: theme.spacing(`${3 * desktopYPadding}`),
  },
  [theme.breakpoints.down('md')]: {
    padding: `0px ${theme.spacing(mobileXPadding)}`,
    minHeight: '100vh',
    paddingBottom: theme.spacing(`${4 * mobileYPadding}`),
  },
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '100% 55vh',
    paddingBottom: theme.spacing(`${8 * mobileYPadding}`),
  },
}))
