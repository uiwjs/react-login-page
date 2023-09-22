import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login.Input /> test case', () => {
  render(
    <Login>
      <Render>
        {({ blocks, fields, $$index, extra }, data) => (
          <label>
            {fields.password} {extra.password}
          </label>
        )}
      </Render>
      <Login.Input data-testid="input" name="password" type="password" placeholder="Password">
        <span> extra content </span>
      </Login.Input>
    </Login>,
  );
  const input = screen.getByTestId('input');
  expect(input.parentElement?.tagName).toBe('LABEL');
  expect(input.tagName).toBe('INPUT');
  expect(input.nextElementSibling?.innerHTML).toBe(' extra content ');
});
