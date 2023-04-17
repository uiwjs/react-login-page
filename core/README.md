<!--rehype:ignore:start-->
<br />
<br />
<br />
<p align="center">
  <a href="https://uiwjs.github.io/react-login-page">
    <img alt="react-codemirror logo" src="https://uiwjs.github.io/react-login-page/logo.svg">
  </a>
</p>
<h3 align="center">React Login Pages</h3>
<br />
<br />
<br />
<!--rehype:ignore:end-->

Getting Started
===

Some `react` login pages, which can be used quickly after installation.

## React Login Page

Current components are used to quickly develop more `login` pages

### Install

```bash
npm install react-login-page --save
```

### Usage

```jsx mdx:preview
import React from 'react';
import Login, { Render } from 'react-login-page';

const Demo = () => {
  return (
    <Login>
      <Render>
        {({ fields, buttons, blocks }) => {
          return (
            <div>
              <header>{blocks.logo} {blocks.title}</header>
              <label>{fields.username}</label>
              <label>{fields.password}</label>
              <div>
                {buttons.submit}
                {buttons.reset}
              </div>
            </div>
          );
        }}
      </Render>
      <Login.Block name="logo">⚛️</Login.Block>
      <Login.Block name="title">Login</Login.Block>
      <Login.Input name="username" placeholder="Please input Username" />
      <Login.Input name="password" placeholder="please enter password" />
      <Login.Button name="submit" type="submit">Submit</Login.Button>
      <Login.Button name="reset" type="reset">Reset</Login.Button>
    </Login>
  );
}
export default Demo;
```

### `Login.Block`

```jsx
<Login.Block name="title">Login</Login.Block>
```

```jsx
import { FC, PropsWithChildren } from "react";
export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  visible?: boolean;
}
export declare const Block: FC<PropsWithChildren<BlockProps>>;
```

### `Login.Input`

```jsx
<Login.Block name="title">Login</Login.Block>
```

```tsx
import React, { FC, PropsWithChildren } from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  /** Used to define the name of form controls */
  rename?: string;
  visible?: boolean;
}
export declare const Input: FC<PropsWithChildren<InputProps>>;
```

### `Login.Button`

```jsx
<Login.Block name="title">Login</Login.Block>
```

```jsx
import { FC, PropsWithChildren } from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  visible?: boolean;
}
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
```

### `Render`

```jsx
import { Render } from 'react-login-page';

<Render>
  {({ fields, buttons, blocks }) => {
    return (
      <div>
        <header>{blocks.logo} {blocks.title}</header>
        <label>{fields.username}</label>
        <label>{fields.password}</label>
        <div>
          {buttons.submit}
          {buttons.reset}
        </div>
      </div>
    );
  }}
</Render>
```

### `useStore`

```jsx mdx:preview
import React, { Fragment } from 'react';
import Login, { Render, Provider, Container, useStore } from 'react-login-page';

const RenderLoginPage = () => {
  const { fields, buttons, blocks } = useStore();
  return (
    <Render>
      <header>{blocks.logo} {blocks.title}</header>
      <label>{fields.username}</label>
      <label>{fields.password}</label>
      <div>
        {buttons.submit}
        {buttons.reset}
      </div>
    </Render>
  );
}

const Demo = () => {
  return (
    <Provider>
      <Container>
        <RenderLoginPage />
      </Container>
      <Login.Block name="logo">⚛️</Login.Block>
      <Login.Block name="title">Login</Login.Block>
      <Login.Input name="username" placeholder="Please input Username" />
      <Login.Input name="password" placeholder="please enter password" />
      <Login.Button name="submit" type="submit">Submit</Login.Button>
      <Login.Button name="reset" type="reset">Reset</Login.Button>
    </Provider>
  );
}

export default Demo;
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-login-page/graphs/contributors">
  <img src="https://uiwjs.github.io/react-login-page/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
