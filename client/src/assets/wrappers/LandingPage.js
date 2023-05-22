import styled from 'styled-components'

const Wrapper = styled.main`
  background: var(--black);
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 0 auto;
  }
  h1 {
    font-weight: 700;
    color:  var(--grey-50);
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-50);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper
