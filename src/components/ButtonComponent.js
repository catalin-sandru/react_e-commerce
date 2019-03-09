import styled from 'styled-components'

export const ButtonContainer = styled.button`
font-size: 1.4rem;
background: transparent;
border: 0.2rem solid var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
transition: all 0.2s ease-in-out;
color: var(--mainWhite);

&:hover {
  background: var(--lightBlue);
  color: var(--mainDark);
}
`
