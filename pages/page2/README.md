# @react-login-page/page2

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@react-login-page/page2.svg)](https://www.npmjs.com/package/@react-login-page/page2)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/page2.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/page2)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/233849699-37ef045c-083c-4ad9-b03c-ca98f79f9c54.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/page2 --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page2';
import defaultBannerImage from '@react-login-page/page2/banner-image';

const Demo = () => (
  <Login style={{ height: 580 }}>
    <Login.Banner>
      <img src={defaultBannerImage} />
    </Login.Banner>
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
import LoginPage, { Email, Password, Submit, Title, Logo, Reset } from '@react-login-page/page2';
import defaultBannerImage from '@react-login-page/page2/banner-image';
import LoginLogo from 'react-login-page/logo';

const styles = { height: 580 };

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <LoginPage.Banner>
        <img src={defaultBannerImage} />
      </LoginPage.Banner>
      <Email name="userUserName" />
      <Password placeholder="请输入密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset disabled>重置</Reset>
      <Title visible={false} />
      <Logo>
        <LoginLogo />
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
import LoginPage, { Reset, Title, Logo, Banner, Password } from '@react-login-page/page2';
import LoginLogo from 'react-login-page/logo-rect';
import defaultBannerImage from '@react-login-page/page2/banner-image';

const Demo = () => (
  <LoginPage style={{ height: 580 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Title />
    <Password visible={false} />
    <Banner>
      <img src={defaultBannerImage} />
    </Banner>
  </LoginPage>
);

export default Demo;
```

## Add content after the button

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Email, Banner, ButtonAfter, Password, Input } from '@react-login-page/page2';
import LoginLogo from 'react-login-page/logo-rect';
import defaultBannerImage from '@react-login-page/page2/banner-image';

const Demo = () => (
  <LoginPage style={{ height: 580 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Email index={3} type="text" placeholder="Username" />
    <Password index={2} />
    <Input name="phone" index={1} placeholder="Phone number">
      <div>xx</div>
    </Input>
    <Banner>
      <img src={defaultBannerImage} />
    </Banner>
    <ButtonAfter>
      Forgot <a href="#">Username / Password?</a>
    </ButtonAfter>
  </LoginPage>
);

export default Demo;
```

## Modify Color Style

```jsx
import React from 'react';
import Login from '@react-login-page/page2';

const css = {
  '--login-bg': 'linear-gradient(-135deg,#c850c0,#4158d0)',
  '--login-color': '#333',
  '--login-inner-bg': '#fff',
  '--login-input': '#57b846',
  '--login-input-bg': '#e6e6e6',
  '--login-input-placeholder': '#999999',
  '--login-btn': '#fff',
  '--login-btn-bg': '#57b846',
  '--login-btn-bg-focus': '#57b846',
  '--login-btn-bg-hover': '#333',
  '--login-btn-bg-active': '#57b846',
};

const Demo = () => <Login style={{ height: 380, ...css }} />;

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
[data-color-mode*='dark'] .login-page2,
.login-page2 {
  --login-bg: linear-gradient(-135deg, #c850c0, #4158d0);
  --login-color: #333;
  --login-inner-bg: #fff;
  --login-input: #666;
  --login-input-bg: #e6e6e6;
  --login-input-placeholder: #999999;
  --login-btn: #fff;
  --login-btn-bg: #57b846;
  --login-btn-bg-focus: #57b846;
  --login-btn-bg-hover: #333;
  --login-btn-bg-active: #57b846;
}
[data-color-mode*='light'] .login-page2 {
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

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import LoginPage from '@react-login-page/page2';
// buttons
import { Reset, Submit } from '@react-login-page/page2';
// blocks
import { Logo, Title, ButtonAfter } from '@react-login-page/page2';
// fields
import { Email, Password } from '@react-login-page/page2';

import defaultBannerImage from '@react-login-page/page2/banner-image';

// Basic Components
import { Button, Input } from '@react-login-page/page2';
// or
import { Button, Input } from 'react-login-page';

<LoginPage>
  <Password index={2} />
</LoginPage>

// Define the order of `Password` controls
<Password index={2} />

// Hiding the `Password` control
<Password visible={false} />

// Add input control
<Input name="phone" index={1} placeholder="Phone number">
  <svg>...</svg>
</Input>

// Add content after the button
<ButtonAfter>
  Forgot <a href="#">Username / Password?</a>
</ButtonAfter>

// Modify logo image
<Logo>⚛️</Logo>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/page2';

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
