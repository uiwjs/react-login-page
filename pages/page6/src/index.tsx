import { FC, PropsWithChildren, cloneElement, forwardRef, isValidElement } from 'react';
import { Render, Provider, Container, useStore, ContainerProps } from 'react-login-page';
import { Username } from './control/Username';
import { Password } from './control/Password';
import { Submit } from './control/Submit';
import { Footer } from './control/Footer';
import { Logo } from './control/Logo';
import { Title } from './control/Title';

import './index.css';

export * from 'react-login-page';
export * from './control/Username';
export * from './control/Password';
export * from './control/Submit';
export * from './control/Title';
export * from './control/Logo';
export * from './control/Footer';

const RenderLogin = () => {
  const { blocks = {}, extra = {}, data, ...label } = useStore();
  const { fields, buttons } = data || { fields: [] };
  return (
    <Render>
      <div className="login-page6-inner">
        <article>
          <header>
            {blocks.logo}
            {blocks.title}
          </header>
          {fields
            .sort((a, b) => a.index - b.index)
            .map((item, idx) => {
              const extraLabel = extra[item.name as keyof typeof extra];
              if (!item.children && !extraLabel) return null;
              if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
              if (!item.children) return null;
              const labelElement = label[`$${item.name}`];
              return (
                <label className={`rlp-${item.name}`} htmlFor={item.name} key={item.name + idx}>
                  {labelElement && <span className={`login-page6-label`}>{labelElement}</span>}
                  {item.children}
                  {extraLabel && <div>{extraLabel}</div>}
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
      </div>
      {blocks.footer}
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
      <Container {...divProps} ref={ref} className={`login-page6 ${className || ''}`}>
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
  Footer: typeof Footer;
  Logo: typeof Logo;
  Title: typeof Title;
};

const Login = LoginPage as LoginComponent;

Login.Username = Username;
Login.Password = Password;
Login.Submit = Submit;
Login.Footer = Footer;
Login.Logo = Logo;
Login.Title = Title;
Login.displayName = 'BaseLoginPage';

export default Login;
