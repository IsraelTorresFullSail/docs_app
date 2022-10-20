import { StyledText } from './styles'
import PropTypes from 'prop-types'
import React from 'react'

const Text = ({
  color,
  fontSize,
  lineheight,
  decoration,
  textTransform,
  fontWeight,
  children,
  font,
  variant = 'p',
  sx,
}) => {
  const Variant = StyledText(variant)
  return (
    <Variant
      color={color}
      fontSize={fontSize}
      lineheight={lineheight}
      decoration={decoration}
      texttransform={textTransform}
      font={font}
      fontWeight={fontWeight}
      sx={sx}
    >
      {children}
    </Variant>
  )
}
Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  lineheight: PropTypes.string,
  font: PropTypes.string,
  fontWeight: PropTypes.string,
  decoration: PropTypes.string,
  textTransform: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Text
