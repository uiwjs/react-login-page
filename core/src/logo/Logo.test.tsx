import { screen, render } from '@testing-library/react';
import Login, { Render } from '../';
import Logo from './Logo';

it('renders <Logo /> test case', () => {
  render(
    <Login>
      <Render>{({ blocks, buttons, fields, $$index, extra }, data) => <div>{blocks.logo}</div>}</Render>
      <Login.Block keyname="logo" tagName="span">
        <Logo data-testid="logo" />
      </Login.Block>
    </Login>,
  );
  const logo = screen.getByTestId('logo') as unknown as SVGSVGElement;
  expect(logo.tagName).toBe('svg');
  expect(logo.getAttribute('height')).toBe('35');
  expect(logo.getAttribute('width')).toBe('93');
  expect(logo.getAttribute('viewBox')).toBe('0 0 249 95');
});
