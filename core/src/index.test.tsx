import renderer from 'react-test-renderer';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import Login, { Render } from './';

it('renders <Login /> test case', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();
  expect(tree).toHaveProperty('type');
  expect(tree).toHaveProperty('props');
  expect(tree).toHaveProperty('children');
  expect(tree).toHaveProperty('type', 'div');
  expect(tree).toHaveProperty('props.className', 'login-page ');
});
