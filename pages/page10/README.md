# @react-login-page/page10

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@react-login-page/page10.svg)](https://www.npmjs.com/package/@react-login-page/page10)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/page10.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/page10)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/236256991-1655b83e-d901-4b86-b974-a6fedbda350f.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/page10 --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page10';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

const Demo = () => (
  <Login style={{ height: 690, backgroundImage: `url(${LoginImg})` }}>
    <Login.InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
    <Login.InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
  </Login>
);

export default Demo;
```

## Modify Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, {
  Email,
  Password,
  InnerBox,
  TitleSignup,
  TitleLogin,
  Submit,
  Title,
  Logo,
} from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

const Demo = () => (
  <LoginPage
    style={{ height: 690, backgroundImage: `url(${LoginImg})`, '--login-inner-image': `url("${LoginInnerBgImg}")` }}
  >
    <InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
    <InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
    <Title />
    <TitleSignup>注册</TitleSignup>
    <TitleLogin>登录</TitleLogin>
    <Logo>
      <LoginLogo />
    </Logo>
    <Email placeholder="请输入用户名" name="userUserName" />
    <Password placeholder="请输入密码" name="userPassword" />
    <Submit keyname="submit">提交</Submit>
    <Submit keyname="reset">重置</Submit>

    <Email panel="signup" placeholder="E-mail" keyname="e-mail" />
    <Password panel="signup" placeholder="请输入密码" keyname="password" />
    <Password panel="signup" placeholder="请输入确认密码" keyname="confirm-password" />
    <Submit panel="signup" keyname="signup-submit">
      注册
    </Submit>
    <Submit panel="signup" keyname="signup-reset">
      重置
    </Submit>
  </LoginPage>
);

export default Demo;
```

## Hide Controls

Use `visible={false}` to hide controls.

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Password, Footer } from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo-rect';
import LoginImg from '@react-login-page/page10/bg.png';

const Demo = () => (
  <LoginPage style={{ height: 690, backgroundImage: `url(${LoginImg})` }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Password panel="signup" visible={false} keyname="confirm-password" />
    <Password visible={false} />
    <Footer>
      Not a member? <a href="#">Sign up now</a>
    </Footer>
  </LoginPage>
);

export default Demo;
```

## Add Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Submit, Title, Logo, Footer, Email, Password } from '@react-login-page/page10';
import LoginLogo from 'react-login-page/logo-rect';
import LoginImg from '@react-login-page/page10/bg.png';

const imgSrc =
  'data:image/png;base64,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';

const Demo = () => {
  const [data, setData] = React.useState({});
  const handle = (even) => {
    even.preventDefault();
    const formData = new FormData(even.target);
    const data = Object.fromEntries(formData);
    setData({ ...data });
  };
  return (
    <form onSubmit={handle}>
      <LoginPage style={{ height: 990, '--login-inner-height': '580px', backgroundImage: `url(${LoginImg})` }}>
        <Logo>
          <LoginLogo />
        </Logo>
        <Title />
        <Email keyname="subtitle" visible={false} index={0}>
          欢迎登录页面
        </Email>
        {/* hide default Email field */}
        <Email visible={false} />
        <Email keyname="fields" index={3} placeholder="修改了 name 字段" />
        <Email keyname="code" index={2} placeholder="验证码" label={<img src={imgSrc} height={38} />}>
          xx
        </Email>
        <Email keyname="email_rule" visible={false} index={4}>
          用户名规则
        </Email>
        <Password index={1} placeholder="密码" />
        <Footer>
          Not a member? <a href="#">Sign up now</a>
        </Footer>
        <Submit>登录</Submit>

        <Email panel="signup" label="邮箱" type="email" placeholder="请输入邮箱" keyname="e-mail" />
        <Password panel="signup" label="密码" placeholder="请输出密码" keyname="password" />
        <Password panel="signup" label="确认密码" placeholder="请确认密码" keyname="confirm-password" />
        <Submit keyname="signup-submit" panel="signup">
          注册
        </Submit>
        <Footer panel="signup">
          Not a member? <a href="#">Login now</a>
        </Footer>
      </LoginPage>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
};

export default Demo;
```

## Modify default control `name`

Modify the string that specifies the **`name`** of the input control by default

1. remove default `name=username` controls

```jsx
<Email visible={false} />
```

2. add `name=user` controls

```jsx
<Email keyname="user" index={3} placeholder="修改了 name 字段" />
```

## Modify Color Style

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/page10';

const css = {
  '--login-bg': '#135344',
  '--login-color': '#c4c3ca',
  '--login-inner-height': '460px',
  '--login-inner-bg': '#19725f',
  '--login-input': '#c4c3ca',
  '--login-input-bg': '#1f2029',
  '--login-input-placeholder': '#49475d',
  '--login-input-placeholder-active': '#53e3a6',
  '--login-input-bg-hover': '#191821',
  '--login-input-bg-focus': '#23222e',
  '--login-input-shadow': '0 4px 8px 0 rgba(21,21,21,.2)',
  '--login-btn': '#fff',
  '--login-btn-bg': '#a7e245',
  '--login-btn-focus': 'white',
  '--login-btn-hover': '#53e3a6',
  '--login-btn-active': '#1aa97d',
  '--login-footer': '#ffffff99',
  '--login-icon-color': '#ffeba7',
  '--login-icon-toggle-color': '#b400ff',
};

const Demo = () => <Login style={{ height: 690, ...css }} />;

export default Demo;
```

Use css variables to override default color values

```css
.login-page10 {
  --login-bg: #1f2029;
  --login-color: #c4c3ca;
  --login-inner-height: 460px;
  --login-inner-bg: #2a2b38;
  --login-input: #c4c3ca;
  --login-input-bg: #1f2029;
  --login-input-placeholder: #49475d;
  --login-input-placeholder-active: #53e3a6;
  --login-input-bg-hover: #191821;
  --login-input-bg-focus: #23222e;
  --login-input-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  --login-btn: #fff;
  --login-btn-bg: #a7e245;
  --login-btn-focus: white;
  --login-btn-hover: #53e3a6;
  --login-btn-active: #1aa97d;
  --login-footer: #ffffff99;
  --login-icon-color: #ffeba7;
  --login-icon-toggle-color: #102770;
}
```

Custom CSS style overrides

```css
.login-page10 section button:focus {
  box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.26);
}
.login-page10 section button:hover {
  background-color: #0070bd;
}
.login-page10 section button:active {
  background-color: #00528a;
}
```

## Light & Dark Theme

```css
[data-color-mode*='dark'] .login-page10,
.login-page10 {
  --login-bg: #1f2029;
  --login-color: #c4c3ca;
  --login-inner-height: 460px;
  --login-inner-bg: #2a2b38;
  --login-input: #c4c3ca;
  --login-input-bg: #1f2029;
  --login-input-placeholder: #49475d;
  --login-input-placeholder-active: #53e3a6;
  --login-input-bg-hover: #191821;
  --login-input-bg-focus: #23222e;
  --login-input-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  --login-btn: #fff;
  --login-btn-bg: #a7e245;
  --login-btn-focus: white;
  --login-btn-hover: #53e3a6;
  --login-btn-active: #1aa97d;
  --login-footer: #ffffff99;
  --login-icon-color: #ffeba7;
  --login-icon-toggle-color: #102770;
}
[data-color-mode*='light'] .login-page10 {
  --login-bg: #1f2029;
  --login-color: #c4c3ca;
  --login-inner-height: 460px;
  --login-inner-bg: #2a2b38;
  --login-input: #c4c3ca;
  --login-input-bg: #1f2029;
  --login-input-placeholder: #49475d;
  --login-input-placeholder-active: #53e3a6;
  --login-input-bg-hover: #191821;
  --login-input-bg-focus: #23222e;
  --login-input-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  --login-btn: #fff;
  --login-btn-bg: #a7e245;
  --login-btn-focus: white;
  --login-btn-hover: #53e3a6;
  --login-btn-active: #1aa97d;
  --login-footer: #ffffff99;
  --login-icon-color: #ffeba7;
  --login-icon-toggle-color: #102770;
}
```

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import LoginPage from '@react-login-page/page10';
// buttons
import { Reset, Submit } from '@react-login-page/page10';
// blocks
import { Logo, InnerBox, Title, TitleLogin, TitleSignup, Footer } from '@react-login-page/page10';
// fields
import { Email, Password } from '@react-login-page/page10';

import LoginBgImg from '@react-login-page/page9/bg.png';
import LoginInnerBgImg from '@react-login-page/page9/inner-bg.jpg';

<LoginPage>
  <Password index={2} />
</LoginPage>

// Define the order of `Password` controls
<Password index={2} />

// Hiding the `Password` control
<Password visible={false} />

// Add footer content
<Footer>
  Not a member? <a href="#">Sign up now</a>
</Footer>

// Modify logo image
<Logo>⚛️</Logo>

<InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
<InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />

// Signup Fields
<Email panel="signup" keyname="e-mail" />
<Password panel="signup" placeholder="Your Password" keyname="password" />
<Password panel="signup" placeholder="Confirm Password" keyname="confirm-password" />
<Submit panel="signup" keyname="signup-submit">
  Signup
</Submit>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/page10';

<Login>
  <Login.Password index={2} />
</Login>

// Define the order of `Password` controls
<Login.Password index={2} />

<Login.InnerBox style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />
<Login.InnerBox panel="signup" style={{ backgroundImage: `url(${LoginInnerBgImg})` }} />

// Hiding the `Password` control
<Login.Password visible={false} />

// Add footer content
<Login.Footer>
  Not a member? <a href="#">Sign up now</a>
</Login.Footer>

// Modify logo image
<Login.Logo>⚛️</Login.Logo>

// Signup Fields
<Login.Email panel="signup" keyname="e-mail" />
<Login.Password panel="signup" placeholder="Your Password" keyname="password" />
<Login.Password panel="signup" placeholder="Confirm Password" keyname="confirm-password" />
<Login.Submit panel="signup" keyname="signup-submit">
  Signup
</Login.Submit>
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-login-page/graphs/contributors">
  <img src="https://uiwjs.github.io/react-login-page/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
