import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login.Block /> test case', () => {
  render(
    <Login>
      <Render>{({ blocks, fields, $$index, extra }, data) => <label>{blocks.title}</label>}</Render>
      <Login.Block data-testid="block" keyname="title">
        Login
      </Login.Block>
    </Login>,
  );
  const block = screen.getByTestId('block');
  expect(block.parentElement?.tagName).toBe('LABEL');
  expect(block.tagName).toBe('DIV');
  expect(block.innerHTML).toBe('Login');
});
