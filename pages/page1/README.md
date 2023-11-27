# @react-login-page/page1

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@react-login-page/page1.svg)](https://www.npmjs.com/package/@react-login-page/page1)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/page1.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/page1)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/233596590-5a2b7196-b9ca-4d19-bf95-75a903192ec3.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/page1 --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page1';

const Demo = () => <Login style={{ height: 580 }} />;

export default Demo;
```

## Modify Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/page1';
import LoginLogo from 'react-login-page/logo';

const styles = { height: 620 };

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <Username name="userUserName" />
      <Password placeholder="请输入密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset disabled>重置</Reset>
      <Title />
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
import LoginPage, { Reset, Logo, Password } from '@react-login-page/page1';
import LoginLogo from 'react-login-page/logo-rect';

const Demo = () => (
  <LoginPage style={{ height: 620 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Password visible={false} />
  </LoginPage>
);

export default Demo;
```

## Add New Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Username, Password, Input } from '@react-login-page/page1';
import LoginLogo from 'react-login-page/logo-rect';

const Demo = () => (
  <LoginPage style={{ height: 620 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Username index={3} />
    <Password index={2} />
    <Input name="phone" index={1} placeholder="Phone number" />
  </LoginPage>
);

export default Demo;
```

## Modify Color Style

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page1';

const css = {
  '--login-bg': '#edeff3',
  '--login-bg-from': '#46acfc',
  '--login-bg-to': '#3ffbd8',
};

const Demo = () => <Login style={{ height: 620, ...css }} />;

export default Demo;
```

Use css variables to override default color values

```css
.login-page-1 {
  --login-bg': #edeff3;
  --login-bg-from': #46acfc;
  --login-bg-to': #3ffbd8;
}
```

Custom CSS style overrides

```css
.login-page-1 section button:focus {
  box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.26);
}
.login-page-1 section button:hover {
  background-color: #0070bd;
}
.login-page-1 section button:active {
  background-color: #00528a;
}
```

## Light & Dark Theme

```css
[data-color-mode*='dark'] .login-page-1,
.login-page-1 {
  --login-bg: #2c3338;
  --login-color: #fff;
  --login-bg-from: #fc466b;
  --login-bg-to: #3f5efb;
}
[data-color-mode*='light'] .login-page-1 {
  --login-bg: #edeff3;
  --login-color: #3b4148;
  --login-bg-from: #fc466b;
  --login-bg-to: #3f5efb;
}
```

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import LoginPage from '@react-login-page/page1';
// buttons
import { Reset, Submit } from '@react-login-page/page1';
// blocks
import { Logo, Title } from '@react-login-page/page1';
// fields
import { Username, Password } from '@react-login-page/page1';
// Basic Components
import { Button, Input } from '@react-login-page/page1';
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
<Input name="phone" index={1} placeholder="Phone number" />

// Modify logo image
<Logo>⚛️</Logo>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/page1';

<Login>
  <Login.Password index={2} />
</Login>

// Define the order of `Password` controls
<Login.Password index={2} />

// Hiding the `Password` control
<Login.Password visible={false} />

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
