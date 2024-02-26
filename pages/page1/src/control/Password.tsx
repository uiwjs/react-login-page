import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { keyname = 'password', name, rename, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  return (
    <Input
      type="password"
      index={2}
      placeholder="Password"
      autoComplete="on"
      {...elmProps}
      name={nameBase}
      keyname={key}
    />
  );
};

Password.displayName = 'Login.Password';
