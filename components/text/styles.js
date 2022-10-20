import { styled } from '@mui/material/styles'

const elementsWithSize = ['p', 'span']

const desktopSizes = {
  h1: '3.75rem',
  h2: '1.875rem',
  h3: '1.125rem',
}

const mobileSizes = {
  h1: '2.75rem',
  h2: '1.5rem',
  h3: '1.125rem',
}

const lineHeights = {
  h1: '69px',
  h2: '34px',
}

export const StyledText = (el) =>
  styled(el)(
    ({
      theme,
      color,
      fontSize,
      lineheight,
      decoration,
      textTransform,
      fontWeight,
      sx,
      font,
    }) => ({
      color: theme.palette[color]?.main || theme.palette.text.main,
      fontSize: !elementsWithSize.includes(el)
        ? desktopSizes[el] || 'inherit'
        : fontSize || 'clamp(1rem, 1.25rem, 1.25rem)',
      textDecoration: decoration || 'none',
      textTransform: textTransform || 'none',
      lineHeight: lineHeights[el] || lineheight || '36px',
      fontWeight: fontWeight || 'normal',
      fontFamily: font ? theme.font[font] : theme.font.primary,
      ...sx,

      [theme.breakpoints.down('sm')]: {
        fontSize: !elementsWithSize.includes(el)
          ? mobileSizes[el] || 'inherit'
          : fontSize || 'clamp(1rem, 1.25rem, 1rem)',
      },
    })
  )
