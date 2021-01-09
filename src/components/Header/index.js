import React from 'react'

import { Container } from './styles'

const Header = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Header
