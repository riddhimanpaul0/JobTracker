import styled, { keyframes } from 'styled-components'
const blinkAnimation = keyframes`
  0% {
    background: var(--black);
  }
  50% {
    background: var(--grey-600);
  }
  100% {
    background: var(--black);
  }
`;

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  background-color: var(--black);
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-700);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  .btn-hipster {
  color: var(--primary-500);
  background-color: var(--black);
  animation: ${blinkAnimation} 1s infinite;
  }

  .btn-hipster:hover {
    color: var(--primary-200);
    background: var(--grey-800);
  }
`
export default Wrapper
