import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  background: #2ea289;
  color: white;

  h1 {
    margin: 0 5rem 0 1rem;
  }

  a {
    color: inherit;

    &.active {
      font-weight: bold;
    }
  }
`;

const Header: React.FC = ({ children }) => (
  <Nav>
    <h1>QR Auth</h1>
    {children}
  </Nav>
);

export default Header;
