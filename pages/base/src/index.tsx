import { FC, PropsWithChildren, cloneElement, isValidElement } from 'react';
import { Render, Provider, Container, useStore } from 'react-login-page';
import { Password } from './control/Password';
import { Username } from './control/Username';
import { Submit } from './control/Submit';
import { Logo } from './control/Logo';
import { Title } from './control/Title';

import './index.css';

export * from 'react-login-page';;
export * from './control/Username';
export * from './control/Password';
export * from './control/Submit';
export * from './control/Reset';
export * from './control/Title';
export * from './control/Logo';
export * from './control/Footer';

const RenderLogin = () => {
  const { blocks = {}, data } = useStore();
  const { fields, buttons } = data || { fields: [] };
  return (
    <Render>
      <div className="login-page-base-wrapper">
        <header>
          {blocks.logo} {blocks.title}
        </header>
        {fields.sort((a, b) => a.index - b.index).map((item, idx) => {
          if (!item.children) return null;
          return <label key={item.name + idx}>{item.children}</label>
        })}
        <section>
          {buttons.sort((a, b) => a.index - b.index).map((item, idx) => {
            const child = item.children;
            if (!isValidElement(child)) return null;
            return cloneElement(child, {
              ...child.props,
              key: item.name + idx,
            })
          })}
        </section>
        {blocks.footer}
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
      <Username />
      <Password />
      <Logo />
      <Title />
      <Submit />
      <Container {...divProps} className={`login-page-base ${className || ''}`}>
        <RenderLogin />
      </Container>
      {children}
    </Provider>
  );
};

export default LoginPage;
