# @react-login-page/page4

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@react-login-page/page4.svg)](https://www.npmjs.com/package/@react-login-page/page4)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/page4.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/page4)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/234056085-dddfd8f7-c234-4016-8b31-4dbe6df998b0.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/page4 --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page4';

const Demo = () => (
  <Login style={{ height: 580 }}>
    <Login.Password>
      <div>xx</div>
    </Login.Password>
  </Login>
);

export default Demo;
```

## Modify Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Email, Password, Title, Submit, Logo, Reset } from '@react-login-page/page4';
import LoginLogo from 'react-login-page/logo';

const styles = { height: 580 };

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <Email name="userUserName" />
      <Password placeholder="请输入密码" label="密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset disabled>重置</Reset>
      <Title>欢迎回来！ 登录您的帐户以查看今天的客户：</Title>
      <Logo>
        <LoginLogo height={31} />
      </Logo>
    </LoginPage>
  </div>
);

export default Demo;
```

## Hide Controls

Use `visible={false}` to hide controls.

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Title, Logo, Password } from '@react-login-page/page4';
import LoginLogo from 'react-login-page/logo-rect';
const Demo = () => (
  <LoginPage style={{ height: 580 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Title />
    <Password visible={false} />
  </LoginPage>
);

export default Demo;
```

## Add content after the button

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Email, Footer, Password, Input } from '@react-login-page/page4';
import LoginLogo from 'react-login-page/logo-rect';

const Demo = () => (
  <LoginPage style={{ height: 750 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Email index={3} placeholder="Email" />
    <Password index={2} />
    <Email keyname="phone" label="Phone:" type="tel" index={1} placeholder="Phone number">
      <div>xx</div>
    </Email>
    <Email keyname="xx" visible={false} index={1}>
      <div>xx2</div>
    </Email>
    <Footer>
      Forgot <a href="#">Username / Password?</a>
    </Footer>
  </LoginPage>
);

export default Demo;
```

## Modify Color Style

```jsx
import React from 'react';
import Login from '@react-login-page/page4';

const css = {
  '--login-bg': '#f3f2f2',
  '--login-color': '#333',
  '--login-logo': '#fff',
  '--login-inner-bg': '#fff',
  '--login-banner-bg': '#fbfbfb',
  '--login-input': '#333',
  '--login-input-icon': '#dddddd',
  '--login-input-bg': 'transparent',
  '--login-input-border': 'rgba(0, 0, 0, 0.13)',
  '--login-input-placeholder': '#999999',
  '--login-btn': '#fff',
  '--login-btn-bg': '#b08bf8',
  '--login-btn-bg-focus': '#b08bf8',
  '--login-btn-bg-hover': '#b08bf8',
  '--login-btn-bg-active': '#b08bf8',
};

const Demo = () => <Login style={{ height: 380, ...css }} />;

export default Demo;
```

Use css variables to override default color values

```css
.login-page2 {
  --login-bg: #363e47;
  --login-color: #333;
  --login-inner-bg: #d9d9d9;
  --login-logo: #333;
  --login-btn: #fff;
  --login-btn-linear-gradient: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  --login-input: #333;
  --login-input-border: #adadad;
  --login-input-placeholder: #5d5d5d;
  --login-input-border-valid: red;
  --login-input-linear-gradient: -webkit-linear-gradient(left, #21d4fd, #b721ff);
  --login-input-border-bg: #6a7dfe;
}
```

Custom CSS style overrides

```css
.login-page2 section button:focus {
  box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.26);
}
.login-page2 section button:hover {
  background-color: #0070bd;
}
.login-page2 section button:active {
  background-color: #00528a;
}
```

## Light & Dark Theme

```css
[data-color-mode*='dark'] .login-page4,
.login-page4 {
  --login-bg: #363e47;
  --login-color: #333;
  --login-inner-bg: #d9d9d9;
  --login-logo: #333;
  --login-btn: #fff;
  --login-btn-linear-gradient: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  --login-input: #333;
  --login-input-border: #adadad;
  --login-input-placeholder: #5d5d5d;
  --login-input-border-valid: red;
  --login-input-linear-gradient: -webkit-linear-gradient(left, #21d4fd, #b721ff);
  --login-input-border-bg: #6a7dfe;
}
[data-color-mode*='light'] .login-page4 {
  --login-bg: #f2f2f2;
  --login-color: #333;
  --login-inner-bg: #fff;
  --login-logo: #333;
  --login-btn: #fff;
  --login-btn-linear-gradient: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
  --login-input: #333;
  --login-input-border: #adadad;
  --login-input-placeholder: #5d5d5d;
  --login-input-border-valid: red;
  --login-input-linear-gradient: -webkit-linear-gradient(left, #21d4fd, #b721ff);
  --login-input-border-bg: #6a7dfe;
}
```

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import Login from '@react-login-page/page4';
// buttons
import { Reset, Submit } from '@react-login-page/page4';
// blocks
import { Logo, Title, Footer } from '@react-login-page/page4';
// fields
import { Email, Password } from '@react-login-page/page4';

// Basic Components
import { Button } from '@react-login-page/page4';
// or
import { Button } from 'react-login-page';

<Login>
  <Password index={2} />
</Login>

// Define the order of `Password` controls
<Password index={2} />

// Hiding the `Password` control
<Password visible={false} />

// Add new input control
<Email rename="phone" label="Phone:" type="tel" index={1} placeholder="Phone number">
  <div>xx</div>
</Email>

// Add content after the button
<Footer>
  Forgot <a href="#">Username / Password?</a>
</Footer>

// Modify logo image
<Logo>⚛️</Logo>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/page4';

<Login>
  <Login.Password index={2} />
</Login>

// Define the order of `Password` controls
<Login.Password index={2} />

// Hiding the `Password` control
<Login.Password visible={false} />

// Add content after the button
<Login.Footer>
  Forgot <a href="#">Username / Password?</a>
</Login.Footer>

// Modify logo image
<Login.Logo>⚛️</Login.Logo>
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-login-page/graphs/contributors">
  <img src="https://uiwjs.github.io/react-login-page/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
