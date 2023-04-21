@react-login-page/base
===

[![npm version](https://img.shields.io/npm/v/@react-login-page/base.svg)](https://www.npmjs.com/package/@react-login-page/base)
[![Downloads](https://img.shields.io/npm/dm/@react-login-page/base.svg?style=flat)](https://www.npmjs.com/package/@react-login-page/base)

<!--rehype:ignore:start-->
<a href="https://uiwjs.github.io/react-login-page">
<img width="571" alt="login-page" src="https://user-images.githubusercontent.com/1680273/233357735-5ab70bd9-9261-46fc-8f4e-88d9074750f9.png">
</a>

<!--rehype:ignore:end-->

## Install

```bash
$ npm install @react-login-page/base --save
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/base';

const Demo = () => <Login style={{ height: 380 }} />;

export default Demo;
```

## Modify Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo';

const styles= { height: 460 }

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <Username name="userUserName" />
      <Password placeholder="请输入密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset>重置</Reset>
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
import LoginPage, { Reset, Logo, Password, Footer } from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';

const Demo = () => (
  <LoginPage style={{ height: 380 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Password visible={false} />
    <Footer>
      Not a member? <a href="#">Sign up now</a> 
    </Footer>
  </LoginPage>
);

export default Demo;
```

## Add Footer Controls

```jsx mdx:preview
import React from 'react';
import LoginPage, { Reset, Logo, Footer, Username, Password, Input } from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';

const Demo = () => (
  <LoginPage style={{ height: 420 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Username index={3} />
    <Password index={2} />
    <Input name="phone" index={1} placeholder="Phone number" />
    <Footer>
      Not a member? <a href="#">Sign up now</a> 
    </Footer>
  </LoginPage>
);

export default Demo;
```

## Modify Color Style

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/base';

const BackGroup = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2MSIgaGVpZ2h0PSI2MDkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+IDxnIG9wYWNpdHk9Ii44IiB0cmFuc2Zvcm09InJvdGF0ZSgtNyA0MjkxLjM0MTUyMzEgMjc4Ljg4MDcxMjg2KSI+IDxlbGxpcHNlIGZpbGw9IiNDRkRBRTYiIG9wYWNpdHk9Ii4yNSIgY3g9IjYzLjU3NDg3OTIiIGN5PSIzMi40NjgzNjciIHJ4PSIyMS43ODMwNDc5IiByeT0iMjEuNzY2MDA4Ii8+IDxlbGxpcHNlIGZpbGw9IiNDRkRBRTYiIG9wYWNpdHk9Ii41OTk5OTk5NiIgY3g9IjUuOTg3NDY0NzkiIGN5PSIxMy44NjY4NjAxIiByeD0iNS4yMTczOTEzIiByeT0iNS4yMTMzMDk5NyIvPiA8cGF0aCBkPSJNMzguMTM1NDUxNCA4OC4zNTIwMjE1YzUuNzYyOTcxMyAwIDEwLjQzNDc4MjYtNC42NjgxNTY4IDEwLjQzNDc4MjYtMTAuNDI2NjJzLTQuNjcxODExMy0xMC40MjY2MTk5LTEwLjQzNDc4MjYtMTAuNDI2NjE5OS0xMC40MzQ3ODI2IDQuNjY4MTU2Ny0xMC40MzQ3ODI2IDEwLjQyNjYxOTljMCA1Ljc1ODQ2MzIgNC42NzE4MTEzIDEwLjQyNjYyIDEwLjQzNDc4MjYgMTAuNDI2NjJaIiBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuNDUiLz4gPHBhdGggZD0ibTY0LjI3NzU1ODIgMzMuMTcwNDk2MyA1NC45MDgyNzc4LTE2LjYwNTAwNDgiIHN0cm9rZT0iI0NGREFFNiIgc3Ryb2tlLXdpZHRoPSIxLjczOTEzMDQzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPHBhdGggZD0iTTQyLjE0MzE3MDggMjYuNTAwMjY4MSA3LjcxMTkwMTYyIDE0LjU2NDA3MDIiIHN0cm9rZT0iI0UwQjRCNyIgc3Ryb2tlLXdpZHRoPSIuNzAyNjc4OTYiIG9wYWNpdHk9Ii43IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjEuNDA1MzU3ODk5ODczMTUzLDIuMTA4MDM2OTUzNDY5OTgxIi8+IDxwYXRoIGQ9Ik02My45MjYyMTg3IDMzLjUyMTU2MSA0My42NzIxMzI2IDY5LjMyNTA5NTEiIHN0cm9rZT0iI0JBQ0FEOSIgc3Ryb2tlLXdpZHRoPSIuNzAyNjc4OTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMS40MDUzNTc4OTk4NzMxNTMsMi4xMDgwMzY5NTM0Njk5ODEiLz4gPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNjAuMDMxMzUzMyAyMzAuMjEwODE0NTMpIiBmaWxsPSIjQ0ZEQUU2Ij4gPGVsbGlwc2Ugb3BhY2l0eT0iLjQ1IiBjeD0iOS4xMzQ4MjY1MyIgY3k9IjkuMTI3NjgwNzYiIHJ4PSI5LjEzNDgyNjUzIiByeT0iOS4xMjc2ODA3NiIvPiA8cGF0aCBkPSJNOWUtNyA5LjEyNzY4MDVjMCA1LjA0MTA3ODkgNC4wODk4MDEyIDkuMTI3NjgwNzQgOS4xMzQ4MjY1NyA5LjEyNzY4MDc0IDUuMDQ1MDI1MzkgMCA5LjEzNDgyNjUzLTQuMDg2NjAxODQgOS4xMzQ4MjY1My05LjEyNzY4MDc0SDllLTdaIi8+IDwvZz4gPC9nPiA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtNSA0NjIuNDc5ODQ2ODggLTEwOTIuNzU3ODc4MzcpIj4gPGVsbGlwc2UgZmlsbD0iI0NGREFFNiIgb3BhY2l0eT0iLjI1IiBjeD0iMjkuMTE3NjQ3MSIgY3k9IjI5LjE0MDI0MzkiIHJ4PSIyOS4xMTc2NDcxIiByeT0iMjkuMTQwMjQzOSIvPiA8ZWxsaXBzZSBmaWxsPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuMyIgY3g9IjI5LjExNzY0NzEiIGN5PSIyOS4xNDAyNDM5IiByeD0iMjEuNTY4NjI3NSIgcnk9IjIxLjU4NTM2NTkiLz4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBvcGFjaXR5PSIuNCIgY3g9IjE3OS4wMTk2MDgiIGN5PSIxMzguMTQ2MzQxIiByeD0iMjMuNzI1NDkwMiIgcnk9IjIzLjc0MzkwMjQiLz4gPGVsbGlwc2UgZmlsbD0iI0JBQ0FEOSIgb3BhY2l0eT0iLjUiIGN4PSIyOS4xMTc2NDcxIiBjeT0iMjkuMTQwMjQzOSIgcng9IjEwLjc4NDMxMzciIHJ5PSIxMC43OTI2ODI5Ii8+IDxwYXRoIGQ9Ik0yOS4xMTc2NDcxIDM5LjkzMjkyNjhWMTguMzQ3NTYxYy01Ljk1NjAxMiAwLTEwLjc4NDMxMzggNC44MzIwNDg3LTEwLjc4NDMxMzggMTAuNzkyNjgyOSAwIDUuOTYwNjM0MiA0LjgyODMwMTggMTAuNzkyNjgyOSAxMC43ODQzMTM4IDEwLjc5MjY4MjlaIiBmaWxsPSIjQkFDQUQ5Ii8+IDxnIG9wYWNpdHk9Ii40NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcyIDEzMSkiIGZpbGw9IiNFNkExQTYiPiA8ZWxsaXBzZSBjeD0iNy4wMTk2MDc4NCIgY3k9IjcuMTQ2MzQxNDYiIHJ4PSI2LjQ3MDU4ODI0IiByeT0iNi40NzU2MDk3NiIvPiA8cGF0aCBkPSJNNy4wMTk2MDg0IDEzLjYyMTk1MTJjLTMuNTczNjA3MjEgMC02LjQ3MDU4ODI0LTIuODk5MjI5Mi02LjQ3MDU4ODI0LTYuNDc1NjA5NzQgMC0zLjU3NjM4MDUxIDIuODk2OTgxMDMtNi40NzU2MDk3NSA2LjQ3MDU4ODIzLTYuNDc1NjA5NzVWMTMuNjIxOTUxMloiLz4gPC9nPiA8ZWxsaXBzZSBmaWxsPSIjQ0ZEQUU2IiBjeD0iMjE4LjM4MjM1MyIgY3k9IjEzOC42ODU5NzYiIHJ4PSIxLjYxNzY0NzA2IiByeT0iMS42MTg5MDI0NCIvPiA8ZWxsaXBzZSBmaWxsPSIjRTBCNEI3IiBvcGFjaXR5PSIuMzUiIGN4PSIxNzkuNTU4ODI0IiBjeT0iMTc1LjM4MTA5OCIgcng9IjEuNjE3NjQ3MDYiIHJ5PSIxLjYxODkwMjQ0Ii8+IDxlbGxpcHNlIGZpbGw9IiNFMEI0QjciIG9wYWNpdHk9Ii4zNSIgY3g9IjE4MC4wOTgwMzkiIGN5PSIxMDIuNTMwNDg4IiByeD0iMi4xNTY4NjI3NSIgcnk9IjIuMTU4NTM2NTkiLz4gPHBhdGggZD0iTTI4Ljk5ODUzODEgMjkuOTY3MTU5OCAxNzEuMTUxMDE4IDEzMi44NzYwMjQiIHN0cm9rZT0iI0NGREFFNiIgb3BhY2l0eT0iLjgiLz4gPC9nPiA8ZyBvcGFjaXR5PSIuNzk5OTk5OTUiIHRyYW5zZm9ybT0icm90YXRlKC0xMSA1MTcuMjYwNDU5MjIgLTUyOTAuNjEyNTYzMDIpIj4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIgY3g9IjQzLjgxMzU1OTMiIGN5PSIzMiIgcng9IjExLjE4NjQ0MDciIHJ5PSIxMS4yOTQxMTc2Ii8+IDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjU5Njc3NCAyMy4xMTExMTEpIiBmaWxsPSIjQkFDQUQ5Ij4gPGVsbGlwc2Ugb3BhY2l0eT0iLjQ1IiBjeD0iOS4xODUzNDcxOCIgY3k9IjguODg4ODg4ODkiIHJ4PSI4LjQ3NDU3NjI3IiByeT0iOC41NTYxNDk3MyIvPiA8cGF0aCBkPSJNOS4xODUzNDcxOCAxNy40NDUwMzg2YzQuNjgwMzc5MjIgMCA4LjQ3NDU3NjMyLTMuODMwNzE4NyA4LjQ3NDU3NjMyLTguNTU2MTQ5NzEgMC00LjcyNTQzMTAyLTMuNzk0MTk3MS04LjU1NjE0OTczLTguNDc0NTc2MzItOC41NTYxNDk3M1YxNy40NDUwMzg2WiIvPiA8L2c+IDxwYXRoIGQ9Ik0zNC42NTk3Mzg1IDI0LjgwOTY5NCA1LjcxNjY2MDg0IDQuNzY4Nzg5NDUiIHN0cm9rZT0iI0NGREFFNiIgc3Ryb2tlLXdpZHRoPSIuOTQxMTc2NDciLz4gPGVsbGlwc2Ugc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIgY3g9IjMuMjYyNzExODYiIGN5PSIzLjI5NDExNzY1IiByeD0iMy4yNjI3MTE4NiIgcnk9IjMuMjk0MTE3NjUiLz4gPGVsbGlwc2UgZmlsbD0iI0Y3RTFBRCIgY3g9IjIuNzk2NjEwMTciIGN5PSI2MS4xNzY0NzA2IiByeD0iMi43OTY2MTAxNyIgcnk9IjIuODIzNTI5NDEiLz4gPHBhdGggZD0iTTM0LjYzMTI0NDMgMzkuMjkyMjcxMiA1LjA2MzY2NjYzIDU5Ljc4NTA4MiIgc3Ryb2tlPSIjQ0ZEQUU2IiBzdHJva2Utd2lkdGg9Ii45NDExNzY0NyIvPiA8L2c+IDxnIG9wYWNpdHk9Ii4zMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTEwIDI1MzAuNTIwODIzNyAtNjIzOS45NDg1OTk3KSI+IDxnIHRyYW5zZm9ybT0icm90YXRlKC04NSAxMjcuMTQxMjgzODYgLTEyLjMyMDAyNDMpIiBmaWxsPSIjQkFDQUQ5Ij4gPGNpcmNsZSBvcGFjaXR5PSIuNDUiIGN4PSIxMS42NjY2NjY3IiBjeT0iMTEuNjY2NjY2NyIgcj0iMTEuNjY2NjY2NyIvPiA8cGF0aCBkPSJNN2UtNyAxMS42NjY2NjY3YzAgNi40NDMzMjIgNS4yMjMzNDQ2IDExLjY2NjY2NjYgMTEuNjY2NjY2NiAxMS42NjY2NjY2IDYuNDQzMzIyMTEgMCAxMS42NjY2NjY3LTUuMjIzMzQ0NiAxMS42NjY2NjY3LTExLjY2NjY2NjZIN2UtN1oiLz4gPC9nPiA8Y2lyY2xlIGZpbGw9IiNDRkRBRTYiIGN4PSIyMDEuODMzMzMzIiBjeT0iODcuNSIgcj0iNS44MzMzMzMzMyIvPiA8cGF0aCBkPSJtMTQzLjUgODguODEyNjY4NSAxMS41NzA1MDEtNzEuMjA4ODE0MU0xNy41IDM3LjMzMzMzMzNsMTA5Ljk2NjI1MiA2MC4zMTE2NDAyIiBzdHJva2U9IiNCQUNBRDkiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8cGF0aCBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIgZD0ibTE0My45MDI1OTcgMTIwLjMwMjI4MSAzMS4wMzI4NTggMTExLjI2OTA2MUwzOC41IDE0Ny41MTA4NDdsODcuODY2OTQxLTM2LjY3NzUxNCIvPiA8cGF0aCBkPSJNMTU5LjgzMzMzMyA5OS43NDUzODQyIDE5NS40MTY2NjcgODkuMjUiIHN0cm9rZT0iI0UwQjRCNyIgc3Ryb2tlLXdpZHRoPSIxLjE2NjY2NjY3IiBvcGFjaXR5PSIuNiIvPiA8cGF0aCBkPSJtMjA1LjMzMzMzMyA4Mi4xMzcyMTA1IDMzLjM4NjA3My00NS45NzA1NDM4IiBzdHJva2U9IiNCQUNBRDkiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8cGF0aCBkPSJtMjY2LjcyMzQyNCAxMzIuMjMxOTg4LTU5LjY0MDA5MS00MS44MTUzMjEzIiBzdHJva2U9IiNDRkRBRTYiIHN0cm9rZS13aWR0aD0iMS4xNjY2NjY2NyIvPiA8Y2lyY2xlIGZpbGw9IiNDMUQxRTAiIGN4PSIxNTYuOTE2NjY3IiBjeT0iOC43NSIgcj0iOC43NSIvPiA8Y2lyY2xlIGZpbGw9IiNDMUQxRTAiIGN4PSIzOS4wODMzMzMzIiBjeT0iMTQ4Ljc1IiByPSI1LjI1Ii8+IDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuNiIgZmlsbD0iI0QxREVFRCIgY3g9IjguNzUiIGN5PSIzMy4yNSIgcj0iOC43NSIvPiA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjYiIGZpbGw9IiNEMURFRUQiIGN4PSIyNDMuODMzMzMzIiBjeT0iMzAuMzMzMzMzMyIgcj0iNS44MzMzMzMzMyIvPiA8Y2lyY2xlIGZpbGw9IiNFMEI0QjciIGN4PSIxNzUuNTgzMzMzIiBjeT0iMjMyLjc1IiByPSI1LjI1Ii8+IDwvZz4gPC9nPiA8L3N2Zz4=';

const css = {
  '--login-bg': '#edeff3' ,
  '--login-color': '#3b4148',
  '--login-input': '#525D68',
  '--login-input-bg': '#d7dee5',
  '--login-input-hover': '#b6c3d1',
  '--login-input-placeholder': '#8e98a2',
  '--login-btn': '#fff',
  '--login-btn-bg': '#e82f94',
  '--login-btn-focus': '#f0008359',
  '--login-btn-hover': '#ff37a5',
  '--login-btn-active': '#d51c80',
  backgroundImage: `url(${BackGroup})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 110px',
  backgroundSize: '100%',
}

const Demo = () => <Login style={{ height: 380, ...css }} />;

export default Demo;
```

Use css variables to override default color values

```css
.login-page-base {
  --login-bg: #edeff3;
  --login-color: #3b4148;
  --login-input: #525D68;
  --login-input-bg: #d7dee5;
  --login-input-hover: #b6c3d1;
  --login-input-placeholder: #8e98a2;
  --login-btn: #fff;
  --login-btn-bg: #e82f94;
  --login-btn-focus: #f0008359;
  --login-btn-hover: #ff37a5;
  --login-btn-active: #d51c80;
}
```

Custom CSS style overrides

```css
.login-page-base section button:focus {
  box-shadow: 0 0 0 2px rgba(0,142,240,.26);
}
.login-page-base section button:hover {
  background-color: #0070bd;
}
.login-page-base section button:active {
  background-color: #00528a;
}
```

## Light & Dark Theme

```css
[data-color-mode*='dark'] .login-page-base {
  --login-bg: #2c3338;
  --login-color: #fff;
  --login-input: #fff;
  --login-input-bg: #3c4656;
  --login-input-hover: #434a52;
  --login-input-placeholder: #838383;
  --login-btn: var(--login-color);
  --login-btn-bg: #008ef0;
  --login-btn-focus: rgba(0,142,240,.26);
  --login-btn-hover: #0070bd;
  --login-btn-active: #00528a;
}
[data-color-mode*='light'] .login-page-base {
  --login-bg: #edeff3;
  --login-color: #3b4148;
  --login-input: #525D68;
  --login-input-bg: #d7dee5;
  --login-input-hover: #b6c3d1;
  --login-input-placeholder: #8e98a2;
  --login-btn: #fff;
  --login-btn-bg: #008ef0;
  --login-btn-focus: rgba(0,142,240,.26);
  --login-btn-hover: #0070bd;
  --login-btn-active: #00528a;
}
```

## API

Components be provided to modify control properties and perform other related functions.

```jsx
import LoginPage from '@react-login-page/base';
// buttons
import { Reset, Submit } from '@react-login-page/base';
// blocks
import { Logo, Title, Footer } from '@react-login-page/base';
// fields
import { Username, Password } from '@react-login-page/base';
// Basic Components
import { Button, Input } from '@react-login-page/base';
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

// Add footer content
<Footer>
  Not a member? <a href="#">Sign up now</a> 
</Footer>

// Modify logo image
<Logo>⚛️</Logo>
```

Use [dot notation](https://legacy.reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type) components.

```jsx
import Login from '@react-login-page/base';

<Login>
  <Login.Password index={2} />
</Login>

// Define the order of `Password` controls
<Login.Password index={2} />

// Hiding the `Password` control
<Login.Password visible={false} />

// Add footer content
<Login.Footer>
  Not a member? <a href="#">Sign up now</a> 
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