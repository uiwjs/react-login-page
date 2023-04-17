import React from 'react';
import { Provider } from './store';
import { Container, ContainerRef } from './Container';
import { Block } from './Block';
import { Input } from './Input';
import { Button } from './Button';

export * from './Block';
export * from './Input';
export * from './Button';
export * from './Container';
export * from './Render';
export * from './store';
export interface LoginRef {}
export interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

const InternalLogin = (props: LoginProps, ref?: React.ForwardedRef<ContainerRef>) => {
  return (
    <Provider>
      <Container {...props} ref={ref} />
    </Provider>
  );
};

type LoginComponent = React.FC<React.PropsWithRef<LoginProps>> & {
  Block: typeof Block;
  Button: typeof Button;
  Input: typeof Input;
};

const Login: LoginComponent = React.forwardRef<ContainerRef>(InternalLogin) as unknown as LoginComponent;

Login.Block = Block;
Login.Button = Button;
Login.Input = Input;
Login.displayName = 'Login';

export default Login;
