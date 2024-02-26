import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { keyname = 'password', name, ...elmProps } = props;
  const nameBase = name || keyname;
  const key = (keyname || name) as string;
  return (
    <Input
      type="password"
      placeholder="Password"
      index={2}
      autoComplete="on"
      {...elmProps}
      name={nameBase}
      keyname={key}
    />
  );
};

Password.displayName = 'BaseLogin.Password';
