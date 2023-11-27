# @react-login-page/page3

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@react-login-page/page3.svg)](https://www.npmjs.com/package/@react-login-page/page3)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/page3.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/page3)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/233929466-66229192-529a-4c86-b0dc-b3bae387c3ec.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/page3 --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page3';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

const Demo = () => (
  <Login style={{ height: 580 }}>
    <Login.Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
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
import LoginPage, { Email, Password, Welcome, Banner, Submit, Title, Logo, Reset } from '@react-login-page/page3';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';
import LoginLogo from 'react-login-page/logo';

const styles = { height: 580 };

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
      <Email name="userUserName" />
      <Password placeholder="请输入密码" label="密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset disabled>重置</Reset>
      <Welcome>欢迎回来！ 登录您的帐户以查看今天的客户：</Welcome>
      <Title visible={false} />
      <Logo>
        <LoginLogo height={21} width={55} />
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
import LoginPage, { Reset, Title, Logo, Banner, Password } from '@react-login-page/page3';
import LoginLogo from 'react-login-page/logo-rect';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

const Demo = () => (
  <LoginPage style={{ height: 580 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Title />
    <Password visible={false} />
    <Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
  </LoginPage>
);

export default Demo;
```

## Add content after the button

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Email, Banner, ButtonAfter, Password, Input } from '@react-login-page/page3';
import LoginLogo from 'react-login-page/logo-rect';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

const Demo = () => (
  <LoginPage style={{ height: 580 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Email index={3} placeholder="Email" />
    <Password index={2} />
    <Email rename="phone" label="Phone:" type="tel" index={1} placeholder="Phone number">
      <div>xx</div>
    </Email>
    <Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
    <ButtonAfter>
      Forgot <a href="#">Username / Password?</a>
    </ButtonAfter>
  </LoginPage>
);

export default Demo;
```

## Modify Color Style

```jsx mdx:preview
import React from 'react';
import Login, { Banner } from '@react-login-page/page3';
import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

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

const Demo = () => (
  <Login style={{ height: 480, ...css }}>
    <Banner style={{ backgroundImage: `url(${defaultBannerImage})` }} />
  </Login>
);

export default Demo;
```

Use css variables to override default color values

```css
.login-page2 {
  --login-bg: linear-gradient(-135deg, #c850c0, #4158d0);
  --login-color: #333;
  --login-inner-bg: #fff;
  --login-input: #57b846;
  --login-input-bg: #e6e6e6;
  --login-input-placeholder: #999999;
  --login-btn: #fff;
  --login-btn-bg: #57b846;
  --login-btn-bg-focus: #57b846;
  --login-btn-bg-hover: #333;
  --login-btn-bg-active: #57b846;
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
[data-color-mode*='dark'] .login-page3,
.login-page3 {
  --login-bg: #f3f2f2;
  --login-color: #333;
  --login-logo: #fff;
  --login-inner-bg: #fff;
  --login-banner-bg: #fbfbfb;
  --login-valid: #e15549;
  --login-input: #333;
  --login-input-icon: #dddddd;
  --login-input-bg: transparent;
  --login-input-border: rgba(0, 0, 0, 0.13);
  --login-input-placeholder: #999999;
  --login-btn: #fff;
  --login-btn-bg: #b08bf8;
  --login-btn-bg-focus: #b08bf8;
  --login-btn-bg-hover: #b08bf8;
  --login-btn-bg-active: #b08bf8;
}
[data-color-mode*='light'] .login-page3 {
  --login-bg: #f3f2f2;
  --login-color: #333;
  --login-logo: #fff;
  --login-inner-bg: #fff;
  --login-banner-bg: #fbfbfb;
  --login-valid: #e15549;
  --login-input: #333;
  --login-input-icon: #dddddd;
  --login-input-bg: transparent;
  --login-input-border: rgba(0, 0, 0, 0.13);
  --login-input-placeholder: #999999;
  --login-btn: #fff;
  --login-btn-bg: #b08bf8;
  --login-btn-bg-focus: #b08bf8;
  --login-btn-bg-hover: #b08bf8;
  --login-btn-bg-active: #b08bf8;
}
```

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import Login from '@react-login-page/page3';
// buttons
import { Reset, Submit } from '@react-login-page/page3';
// blocks
import { Logo, Title, Welcome, ButtonAfter } from '@react-login-page/page3';
// fields
import { Email, Password } from '@react-login-page/page3';

import defaultBannerImage from '@react-login-page/page3/bg.jpeg';

// Basic Components
import { Button } from '@react-login-page/page3';
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
<ButtonAfter>
  Forgot <a href="#">Username / Password?</a>
</ButtonAfter>

<Welcome>Welcome back! Log in to your account.</Welcome>

// Modify logo image
<Logo>⚛️</Logo>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/page3';

<Login>
  <Login.Password index={2} />
</Login>

// Define the order of `Password` controls
<Login.Password index={2} />

// Hiding the `Password` control
<Login.Password visible={false} />

// Add content after the button
<Login.ButtonAfter>
  Forgot <a href="#">Username / Password?</a>
</Login.ButtonAfter>

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
