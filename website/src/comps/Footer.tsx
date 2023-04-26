import styled from 'styled-components';

const Wrappre = styled.footer`
  padding-top: 6rem;
  padding-bottom: 8rem;
  text-align: center;
  position: relative;
`;

export const Footer = () => {
  return (
    <Wrappre>
      © 2023 react-login-page · Built by <a href="https://github.com/uiwjs">uiwjs</a>
    </Wrappre>
  );
};
