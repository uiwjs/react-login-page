import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '@wcj/dark-mode';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PagesLayout = () => {
  return (
    <Wrapper className="wmde-markdown-var">
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
