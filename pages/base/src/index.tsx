import { FC, PropsWithChildren } from 'react';
import Login, { Render, Provider, Container, useStore } from 'react-login-page';
import './index.css';

export * from './control/Username';
export * from './control/Password';
export * from './control/Submit';
export * from './control/Reset';
export * from './control/Title';
export * from './control/Logo';
export * from './control/Footer';

const RenderLogin = () => {
  const { fields = {}, buttons = {}, blocks = {} } = useStore();
  return (
    <Render>
      <div className="login-page-base-wrapper">
        <header>
          {blocks.logo} {blocks.title}
        </header>
        {fields.username && <label>{fields.username}</label>}
        {fields.password && <label>{fields.password}</label>}
        <section>
          {buttons.submit}
          {buttons.reset}
        </section>
        {blocks.footer && <footer>{blocks.footer}</footer>}
      </div>
    </Render>
  );
};

const LoginPage: FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  ...divProps
}) => {
  return (
    <Provider>
      <Container {...divProps} className={`login-page-base ${className || ''}`}>
        <RenderLogin />
      </Container>
      <Login.Block name="logo">⚛️</Login.Block>
      <Login.Block name="title">Login</Login.Block>
      <Login.Input name="username" placeholder="Username" spellCheck />
      <Login.Input name="password" type="password" placeholder="Password" />
      <Login.Button name="submit" type="submit">
        Submit
      </Login.Button>
      {children}
    </Provider>
  );
};

export default LoginPage;
