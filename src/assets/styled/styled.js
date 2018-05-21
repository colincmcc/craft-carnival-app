
import theme from './theme'
import {css} from 'styled-components'

const sizes = { 
    xlarge: '1680px',
    large: '1280px',
    medium: '980px',
    small: '736px',
    xsmall: '480px',
    xxsmall: '360px'
  }

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {}) 

  

  
