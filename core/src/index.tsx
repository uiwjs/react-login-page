import React from 'react';
import { Provider } from './store';
import { Container, ContainerProps } from './Container';
import { Block } from './Block';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Input } from './Input';
import { Button } from './Button';

export * from './Input';
export * from './Textarea';
export * from './Select';
export * from './Block';
export * from './Button';
export * from './Container';
export * from './Render';
export * from './store';
export interface LoginRef {}
export interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

type LoginComponent = React.FC<React.PropsWithRef<LoginProps>> & {
  Block: typeof Block;
  Button: typeof Button;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
};

const Login: LoginComponent = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  return (
    <Provider>
      <Container {...props} ref={ref} />
    </Provider>
  );
}) as unknown as LoginComponent;

Login.Block = Block;
Login.Button = Button;
Login.Input = Input;
Login.Textarea = Textarea;
Login.Select = Select;
Login.displayName = 'Login';

export default Login;
