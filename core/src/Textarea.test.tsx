import { screen, render } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login.Textarea /> test case', () => {
  render(
    <Login>
      <Render>
        {({ blocks, fields, $$index, extra }, data) => (
          <label>
            {fields.textarea} {extra.textarea}
          </label>
        )}
      </Render>
      <Login.Textarea data-testid="textarea" keyname="textarea" defaultValue="default">
        extra content
      </Login.Textarea>
    </Login>,
  );
  const textarea = screen.getByTestId('textarea');
  expect(textarea.parentElement?.tagName).toBe('LABEL');
  expect(textarea.tagName).toBe('TEXTAREA');
  expect(textarea.innerHTML).toBe('default');
});
