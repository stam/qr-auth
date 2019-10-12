import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 120px;

  background: #2ea289;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;

  &:disabled {
    opacity: 0.4;
    text-decoration: strikethrough;
  }
`;

export default Button;
