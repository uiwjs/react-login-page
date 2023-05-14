# Create Login Page

Welcome to the tutorial! We will build a compact yet feature-rich login page component, teaching you how to quickly create a login page component.

## Step 1: Create the Login Page Container

```tsx
import { FC, PropsWithChildren } from 'react';
import { Render, Provider, Container } from 'react-login-page';

const RenderLogin = () => {
  return (
    <Render>
      <div className="login-page-example-wrapper"> </div>
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
      <Container {...divProps} className={`login-page-example ${className || ''}`}>
        <RenderLogin />
        {children}
      </Container>
    </Provider>
  );
};

type LoginComponent = FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> & {};
const Login = LoginPage as LoginComponent;
Login.displayName = 'LoginExamplePage';

export default Login;
```

In the example above, we defined an empty `Login` component. The `<Provider>` component is used for data collection, and the layout is placed inside the `<Container>` component, which wraps a `div` around the content to be rendered. The `<Render>` component provides a flexible API to help render the component layout.

## Step 2: Define a `Title` Component

```tsx
import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  return <Block {...elmProps} keyname={keyname} />;
};

Title.displayName = 'ExampleLogin.Title';
```

When using the `<Title>` component, we need to write the display logic. The `keyname` defined in the `<Title>` component is very important, as we need it when displaying the component. Its purpose is to give your component a name, and determine its position based on the name when displaying it.

```tsx
import { Render, useStore } from 'react-login-page';

const RenderLogin = () => {
  const { blocks = {} } = useStore();
  return (
    <Render>
      <div className="login-page-example-wrapper">
        <h2>{blocks.title}</h2>
      </div>
    </Render>
  );
};
```

If you need to display the `<Title>` component by default, you should add it to the `<Provider>` component by default.

```tsx
<Provider>
  <Title>Example Title</Title>
</Provider>
```

## Step 3: Define an `Input Box` Component

```tsx
import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { keyname = 'username', name, ...elmProps } = props;
  return (
    <Input placeholder="Username" spellCheck={false} {...elmProps} name={name || keyname} keyname={keyname || name} />
  );
};

Username.displayName = 'LoginExamplePage.Username';
```

By default, you need to display the `<Username />` component, so add it to the `<Provider>` component.

```tsx
<Provider>
  <Username />
</Provider>
```

## Step 4: Define a `Submit Button` Component

```tsx
import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Submit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Submit';
  }
  return <Button type="submit" keyname={keyname} {...elmProps} />;
};

Submit.displayName = 'LoginExamplePage.Submit';
```

By default, you need to display the `<Submit />` component, so add it to the `<Provider>` component.

```tsx
<Provider>
  <Submit />
</Provider>
```

If you also need to display a `Reset Button` by default, you can add another one based on `<Submit />` in the `<Provider>` component:

```tsx
<Provider>
  <Submit />
  <Submit keyname="resetBtn" type="reset">
    Reset
  </Submit>
</Provider>
```

## Step 5: Provide a Point Component

Defines [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```tsx
type LoginComponent = FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> & {
  Title: typeof Title;
  Username: typeof Username;
  Submit: typeof Submit;
};
const Login = LoginPage as LoginComponent;

Login.displayName = 'LoginExamplePage';
Login.Title = Title;
Login.Username = Username;
Login.Submit = Submit;

export default Login;
```

## Using the Defined Component

```tsx
import LoginExample from '../login';

function Demo() {
  return <LoginExample />;
}
```

## Complete Example

```tsx mdx:preview
import React, { FC, PropsWithChildren, isValidElement, cloneElement } from 'react';
import { Render, Provider, Container, useStore } from 'react-login-page';
import { Block, BlockProps, BlockTagType } from 'react-login-page';
import { Button, ButtonProps } from 'react-login-page';
import { Input, InputProps } from 'react-login-page';

// <Title /> Component
const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  return <Block {...elmProps} keyname={keyname} />;
};
Title.displayName = 'ExampleLogin.Title';

// <Username /> Component
const Username: FC<InputProps> = (props) => {
  const { keyname = 'username', name, ...elmProps } = props;
  return (
    <Input placeholder="Username" spellCheck={false} {...elmProps} name={name || keyname} keyname={keyname || name} />
  );
};
Username.displayName = 'LoginExamplePage.Username';

// <Submit /> Component
const Submit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Submit';
  }
  return <Button type="submit" keyname={keyname} {...elmProps} />;
};
Submit.displayName = 'LoginExamplePage.Submit';

const RenderLogin = () => {
  const { blocks = {}, data = {} } = useStore();
  const { fields, buttons } = data;
  return (
    <Render>
      <div className="login-page-example-wrapper">
        <b>{blocks.title}</b>
        {fields
          .sort((a, b) => a.index - b.index)
          .map((item, idx) => {
            return <label key={item.name + idx}>{item.children}</label>;
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
      <Title>Example Title</Title>
      <Username />
      <Submit />
      <Submit keyname="resetBtn" type="reset">
        Reset
      </Submit>
      <Container {...divProps} className={`login-page-example ${className || ''}`}>
        <RenderLogin />
        {children}
      </Container>
    </Provider>
  );
};

type LoginComponent = FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> & {
  Title: typeof Title;
};
const Login = LoginPage as LoginComponent;
Login.displayName = 'LoginExamplePage';
Login.Title = Title;

// Here, we use the encapsulated <Login /> component
const Example = () => {
  return <Login></Login>;
};

export default Example;
```
