import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { keyname = 'password', name, rename, ...elmProps } = props;
  const key = (keyname || name) as string;
  return (
    <Input
      type="password"
      placeholder="Password"
      autoComplete="on"
      index={2}
      {...elmProps}
      name={name || rename || keyname}
      keyname={key}
    />
  );
};

Password.displayName = 'BaseLogin.Password';
