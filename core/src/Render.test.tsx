import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login /> <Render> test case', () => {
  render(
    <Login data-testid="login">
      <Render>xxx</Render>
    </Login>,
  );
  const login = screen.getByTestId('login');
  expect(login.tagName).toBe('DIV');
});

it('renders <Login /> <Render> test case', () => {
  render(
    <Login data-testid="login">
      <Render>
        <div>xxx</div>
      </Render>
    </Login>,
  );
  const login = screen.getByTestId('login');
  expect(login.tagName).toBe('DIV');
  expect(login.children.length).toBe(1);
  expect(login.children[0].tagName).toBe('DIV');
  expect(login.children[0].innerHTML).toBe('xxx');
});
