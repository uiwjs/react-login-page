import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login.Select /> test case', () => {
  render(
    <Login>
      <Render>{({ blocks, fields, $$index, extra }, data) => <label>{fields.selectname}</label>}</Render>
      <Login.Select data-testid="select" name="selectname">
        <option value="1" data-testid="option1">
          One
        </option>
        <option value="2" data-testid="option2">
          Two
        </option>
      </Login.Select>
    </Login>,
  );
  const select = screen.getByTestId('select');
  expect(select.parentElement?.tagName).toBe('LABEL');
  expect(select.tagName).toBe('SELECT');

  const option1 = screen.getByTestId('option1');
  expect(option1.tagName).toBe('OPTION');
  expect(option1.innerHTML).toBe('One');

  const option2 = screen.getByTestId('option2');
  expect(option2.tagName).toBe('OPTION');
  expect(option2.innerHTML).toBe('Two');
});
