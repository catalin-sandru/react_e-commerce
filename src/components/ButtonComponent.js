import styled from 'styled-components'
import Cart from './Cart';

export const ButtonContainer = styled.button`
font-size: 1.4rem;
background: transparent;
border: 0.2rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0rem;
transition: all 0.2s ease-in-out;

&:hover {
  background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainDark);
}
`
