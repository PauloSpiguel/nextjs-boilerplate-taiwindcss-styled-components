import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`mx-2 mb-4 p-6 overflow-hidden shadow-lg`};
  ${props => (props.rounded ? tw`rounded-xl` : ``)};

  background: var(--primaryColor);
  color: var(--white);
`
