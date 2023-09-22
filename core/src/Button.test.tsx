import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login.Button /> test case', () => {
  render(
    <Login>
      <Render>{({ blocks, buttons, fields, $$index, extra }, data) => <label>{buttons.submit}</label>}</Render>
      <Login.Button data-testid="button" keyname="submit" type="submit">
        Login
      </Login.Button>
    </Login>,
  );
  const button = screen.getByTestId('button');
  expect(button).toHaveProperty('type', 'submit');
  expect(button.innerHTML).toBe('Login');
});
