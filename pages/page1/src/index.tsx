import { cloneElement, forwardRef, isValidElement } from 'react';
import { Render, Provider, Container, useStore, ContainerProps } from 'react-login-page';
import { Username } from './control/Username';
import { Password } from './control/Password';
import { Submit } from './control/Submit';
import { Reset } from './control/Reset';
import { Logo } from './control/Logo';
import { Title } from './control/Title';

import './index.css';

export * from 'react-login-page';
export * from './control/Username';
export * from './control/Password';
export * from './control/Submit';
export * from './control/Reset';
export * from './control/Title';
export * from './control/Logo';

const RenderLogin = () => {
  const { blocks = {}, data } = useStore();
  const { fields, buttons } = data || { fields: [] };
  return (
    <Render>
      <div className="login-page-1-wrapper">
        <article>
          <header>
            {blocks.logo} {blocks.title}
          </header>
          {fields
            .sort((a, b) => a.index - b.index)
            .map((item, idx) => {
              if (!item.children) return null;
              return (
                <label className={`rlp-${item.name}`} key={item.name + idx}>
                  {item.children}
                </label>
              );
            })}
          <section>
            {buttons
              .sort((a, b) => a.index - b.index)
              .map((item, idx) => {
                const child = item.children;
                if (!isValidElement(child)) return null;
                return cloneElement(child, {
                  ...child.props,
                  key: item.name + idx,
                });
              })}
          </section>
        </article>
        <div className="login-page-1-drops">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Render>
  );
};

const LoginPage = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, ...divProps } = props;
  return (
    <Provider>
      <Username />
      <Password />
      <Logo />
      <Title />
      <Submit />
      <Container {...divProps} ref={ref} className={`login-page-1 ${className || ''}`}>
        <RenderLogin />
        {children}
      </Container>
    </Provider>
  );
});

type LoginComponent = typeof LoginPage & {
  Username: typeof Username;
  Password: typeof Password;
  Submit: typeof Submit;
  Reset: typeof Reset;
  Logo: typeof Logo;
  Title: typeof Title;
};

const Login = LoginPage as LoginComponent;

Login.Username = Username;
Login.Password = Password;
Login.Submit = Submit;
Login.Reset = Reset;
Login.Logo = Logo;
Login.Title = Title;
Login.displayName = 'LoginPage';

export default Login;
