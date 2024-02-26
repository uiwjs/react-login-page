import { FC, PropsWithChildren, cloneElement, forwardRef, isValidElement, useState } from 'react';
import { Render, Provider, Container, useStore, ContainerProps } from 'react-login-page';
import { Email } from './control/login/Email';
import { Password } from './control/login/Password';
import { Submit } from './control/login/Submit';
import { Footer } from './control/Footer';
import { Logo } from './control/Logo';
import { Title } from './control/Title';
import { InnerBox } from './control/InnerBox';
import { TitleLogin } from './control/TitleLogin';
import { TitleSignup } from './control/TitleSignup';
import { IconUser } from './icons/user';
import { IconArrow } from './icons/arrow';

import './index.css';

export * from 'react-login-page';
export * from './control/login/Email';
export * from './control/login/Password';
export * from './control/login/Submit';
export * from './control/InnerBox';
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
  const switchButton = () => setPanel(panel === 'login' ? 'signup' : 'login');
  const loginarticle = blocks[`$$loginarticle`];
  const loginArticleProps = loginarticle?.props || {};
  const signuparticle = blocks[`$$signuparticle`];
  const signupArticleProps = signuparticle?.props || {};
  return (
    <Render>
      <section className={`login-page10-toggle ${panel === 'login' ? 'active-login' : 'active-signup'}`}>
        <h6>
          {blocks['title-login']}
          {blocks['title-signup']}
        </h6>
        <label onClick={switchButton}>{IconArrow}</label>
      </section>
      <div className="login-page10-inner">
        {(blocks.logo || blocks.title) && (
          <header>
            {blocks.logo}
            {blocks.title}
          </header>
        )}
        <main className={panel === 'login' ? 'active-login' : 'active-signup'}>
          {loginarticle &&
            cloneElement(
              loginarticle,
              Object.assign({ ...loginArticleProps, className: panel === 'login' ? 'active' : '' }),
              <section className="login-page10-fields login-page10-login">
                <h4>{blocks['title-login']}</h4>
                {loginFields.map((item, idx) => {
                  const extraLabel = extra[item.name as keyof typeof extra];
                  if (!item.children && !extraLabel) return null;
                  if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
                  if (!item.children) return null;
                  const htmlFor = item.name.replace('$$login', '');
                  const { name, ...props } = item.children.props;
                  const labelElement = label[item.name];
                  return (
                    <label className={`rlp-${item.name}`} htmlFor={htmlFor} key={item.name + idx}>
                      {cloneElement(item.children, {
                        ...props,
                        name: panel === 'login' ? name : '',
                        key: item.name + idx,
                      })}
                      {extraLabel && <div>{extraLabel}</div>}
                      {labelElement && <span className={`login-page10-label`}>{labelElement}</span>}
                    </label>
                  );
                })}
                <section className="login-page10-button">
                  {loginButtons.map((item, idx) => {
                    const child = item.children;
                    if (!isValidElement(child)) return null;
                    return cloneElement(child, {
                      ...child.props,
                      key: item.name + idx,
                    });
                  })}
                </section>
                {blocks[`$$loginfooter`]}
              </section>,
            )}
          {signuparticle &&
            cloneElement(
              signuparticle,
              Object.assign({ ...signupArticleProps, className: panel === 'signup' ? 'active' : '' }),
              <section className="login-page10-fields login-page10-signup">
                <h4>{blocks['title-signup']}</h4>
                {signupFields.map((item, idx) => {
                  const extraLabel = extra[item.name as keyof typeof extra];
                  if (!item.children && !extraLabel) return null;
                  if (!item.children && extraLabel) return <div key={idx}>{extraLabel}</div>;
                  if (!item.children) return null;
                  const htmlFor = item.name.replace('$$signup', '');
                  const { name, ...props } = item.children.props;
                  const labelElement = label[item.name];
                  return (
                    <label htmlFor={htmlFor} key={item.name + idx}>
                      {cloneElement(item.children, {
                        ...props,
                        name: panel === 'signup' ? name : '',
                        key: item.name + idx,
                      })}
                      {extraLabel && <div>{extraLabel}</div>}
                      {labelElement && <span className={`login-page10-label`}>{labelElement}</span>}
                    </label>
                  );
                })}
                <section className="login-page10-button">
                  {signupButtons.map((item, idx) => {
                    const child = item.children;
                    if (!isValidElement(child)) return null;
                    return cloneElement(child, {
                      ...child.props,
                      key: item.name + idx,
                    });
                  })}
                </section>
                {blocks[`$$signupfooter`]}
              </section>,
            )}
        </main>
      </div>
    </Render>
  );
};

const LoginPage = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, className, ...divProps } = props;
  return (
    <Provider>
      <InnerBox />
      <InnerBox panel="signup" />
      <TitleSignup />
      <TitleLogin />
      <Email />
      <Password />
      <Submit />

      <Email panel="signup" keyname="e-mail" />
      <Email panel="signup" keyname="name" placeholder="Your Full Name" type="text">
        {IconUser}
      </Email>
      <Password panel="signup" placeholder="Your Password" keyname="password" />
      <Submit panel="signup" keyname="signup-submit">
        Signup
      </Submit>

      <Container {...divProps} ref={ref} className={`login-page10 ${className || ''}`}>
        <RenderLogin />
        {children}
      </Container>
    </Provider>
  );
});

type LoginComponent = typeof LoginPage & {
  Email: typeof Email;
  Password: typeof Password;
  Submit: typeof Submit;
  Footer: typeof Footer;
  Logo: typeof Logo;
  InnerBox: typeof InnerBox;
  Title: typeof Title;
  TitleLogin: typeof TitleLogin;
  TitleSignup: typeof TitleSignup;
};

const Login = LoginPage as LoginComponent;

Login.Email = Email;
Login.Password = Password;
Login.Submit = Submit;
Login.Footer = Footer;
Login.Logo = Logo;
Login.InnerBox = InnerBox;
Login.Title = Title;
Login.TitleLogin = TitleLogin;
Login.TitleSignup = TitleSignup;
Login.displayName = 'LoginPage';

export default Login;
