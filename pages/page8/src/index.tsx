import { FC, PropsWithChildren, cloneElement, forwardRef, isValidElement, useState } from 'react';
import { Render, Provider, Container, useStore, ContainerProps } from 'react-login-page';
import { Username } from './control/login/Username';
import { Password } from './control/login/Password';
import { Submit } from './control/login/Submit';
import { Footer } from './control/Footer';
import { Logo } from './control/Logo';
import { Title } from './control/Title';
import { TitleLogin } from './control/TitleLogin';
import { TitleSignup } from './control/TitleSignup';

import './index.css';

export * from 'react-login-page';
export * from './control/login/Username';
export * from './control/login/Password';
export * from './control/login/Submit';
export * from './control/Title';
export * from './control/TitleLogin';
export * from './control/TitleSignup';
export * from './control/Logo';
export * from './control/Footer';

const RenderLogin = () => {
  const { blocks = {}, extra = {}, data, ...label } = useStore();
  const { fields, buttons } = data || { fields: [] };
  const [panel, setPanel] = useState<'login' | 'signup'>('login');
  const loginButtons = buttons.filter((m) => m.name.indexOf(`$$login`) > -1).sort((a, b) => a.index - b.index);
  const loginFields = fields.filter((m) => m.name.indexOf(`$$login`) > -1).sort((a, b) => a.index - b.index);
  const signupButtons = buttons.filter((m) => m.name.indexOf(`$$signup`) > -1).sort((a, b) => a.index - b.index);
  const signupFields = fields.filter((m) => m.name.indexOf(`$$signup`) > -1).sort((a, b) => a.index - b.index);
  return (
    <Render>
      <div className="login-page8-inner">
        <header>
          {blocks.logo}
          {blocks.title}
        </header>
        <main>
          <article className={panel === 'login' ? 'active' : ''}>
            <button onClick={() => setPanel('login')}>{blocks['title-login']}</button>
            <section className="login-page8-fields login-page8-login">
              {loginFields.map((item, idx) => {
                const extraLabel = extra[item.name as keyof typeof extra];
                if (!item.children && !extraLabel) return null;
                if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
                if (!item.children) return null;
                const labelElement = label[item.name];
                const htmlFor = item.name.replace('$$login', '');
                const { name, ...props } = item.children.props;
                return (
                  <label className={`rlp-${item.name}`} htmlFor={htmlFor} key={item.name + idx}>
                    {labelElement && <span className={`login-page8-label`}>{labelElement}</span>}
                    {cloneElement(item.children, {
                      ...props,
                      name: panel === 'login' ? name : '',
                      key: item.name + idx,
                    })}
                    {extraLabel && <div>{extraLabel}</div>}
                  </label>
                );
              })}
              <section className="login-page8-button">
                {loginButtons.map((item, idx) => {
                  const child = item.children;
                  if (!isValidElement(child)) return null;
                  return cloneElement(child, {
                    ...child.props,
                    key: item.name + idx,
                  });
                })}
              </section>
            </section>
          </article>
          <article className={panel === 'signup' ? 'active' : ''}>
            <button onClick={() => setPanel('signup')}>{blocks['title-signup']}</button>
            <section className="login-page8-fields login-page8-signup">
              {signupFields.map((item, idx) => {
                const extraLabel = extra[item.name as keyof typeof extra];
                if (!item.children && !extraLabel) return null;
                if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
                if (!item.children) return null;
                const labelElement = label[item.name];
                const htmlFor = item.name.replace('$$signup', '');
                const { name, ...props } = item.children.props;
                return (
                  <label htmlFor={htmlFor} key={item.name + idx}>
                    {labelElement && <span className={`login-page8-label`}>{labelElement}</span>}
                    {cloneElement(item.children, {
                      ...props,
                      name: panel === 'signup' ? name : '',
                      key: item.name + idx,
                    })}
                    {extraLabel && <div>{extraLabel}</div>}
                  </label>
                );
              })}
              <section className="login-page8-button">
                {signupButtons.map((item, idx) => {
                  const child = item.children;
                  if (!isValidElement(child)) return null;
                  return cloneElement(child, {
                    ...child.props,
                    key: item.name + idx,
                  });
                })}
              </section>
            </section>
          </article>
        </main>
        {blocks.footer}
      </div>
    </Render>
  );
};

const LoginPage = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, ...divProps } = props;
  return (
    <Provider>
      <Title />
      <TitleSignup />
      <TitleLogin />
      <Logo />
      <Username />
      <Password />
      <Submit />

      <Username panel="signup" label="E-mail" type="email" placeholder="E-mail" keyname="e-mail" />
      <Password panel="signup" label="Password" placeholder="Password" keyname="password" />
      <Password panel="signup" label="Confirm Password" placeholder="Confirm Password" keyname="confirm-password" />
      <Submit keyname="signup-submit" panel="signup">
        Signup
      </Submit>
      <Container {...divProps} className={`login-page8 ${className || ''}`}>
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
  TitleLogin: typeof TitleLogin;
  TitleSignup: typeof TitleSignup;
};

const Login = LoginPage as LoginComponent;

Login.Username = Username;
Login.Password = Password;
Login.Submit = Submit;
Login.Footer = Footer;
Login.Logo = Logo;
Login.Title = Title;
Login.TitleLogin = TitleLogin;
Login.TitleSignup = TitleSignup;
Login.displayName = 'BaseLoginPage';

export default Login;
