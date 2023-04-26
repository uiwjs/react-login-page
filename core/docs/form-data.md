# Working With FormData

A common trick is to turn the entire formData into an object with [`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries):

```jsx
const form = document.querySelector('form');
const formData = new FormData(form);
const data = Object.fromEntries(formData);
```

## Usage

```jsx mdx:preview
import React from 'react';
import Login from '@react-login-page/base';

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
      <Login style={{ minHeight: 380 }} />
      <h3>Result:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
};

export default Demo;
```

## Used in React Router

```jsx
import React from 'react';
import Login from '@react-login-page/base';
import { Form } from 'react-router-dom';

const Demo = () => {
  return (
    <Form method="post" action="/events">
      <Login style={{ minHeight: 380 }} />
    </Form>
  );
};

export default Demo;
```

`useFetcher`

```jsx
import React, { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import Login, { Password, Username, Submit, Reset } from '@react-login-page/base';

function Demo() {
  const fetcher = useFetcher();
  const handle = (even) => {
    even.preventDefault();
    fetcher.submit(even.currentTarget);
  };

  useEffect(() => {
    if (fetcher.data?.code !== 1 && fetcher.data?.message) {
      // ....
    }
  }, [fetcher.data]);

  return (
    <fetcher.Form method="post" onSubmit={handle}>
      <Login>
        <Username name="userUserName" />
        <Password placeholder="请输入密码" name="userPassword" />
        <Submit>提交</Submit>
        <Reset disabled={true}>重置</Reset>
      </Login>
    </fetcher.Form>
  );
}

export default Demo;
```
