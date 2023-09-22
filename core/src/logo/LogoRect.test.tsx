import { screen, render } from '@testing-library/react';
import Login, { Render } from '../';
import LogoRect from './LogoRect';

it('renders <LogoRect /> test case', () => {
  render(
    <Login>
      <Render>{({ blocks, buttons, fields, $$index, extra }, data) => <div>{blocks.logo}</div>}</Render>
      <Login.Block keyname="logo" tagName="span">
        <LogoRect data-testid="logo" />
      </Login.Block>
    </Login>,
  );
  const logo = screen.getByTestId('logo') as unknown as SVGSVGElement;
  expect(logo.tagName).toBe('svg');
  expect(logo.getAttribute('height')).toBe('28');
  expect(logo.getAttribute('width')).toBe('28');
  expect(logo.getAttribute('viewBox')).toBe('0 0 92 92');
});
