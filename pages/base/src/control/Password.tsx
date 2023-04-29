import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { keyname = 'password', name, rename, ...elmProps } = props;
  return (
    <Input type="password" placeholder="Password" {...elmProps} name={name || rename || keyname} keyname={keyname} />
  );
};

Password.displayName = 'BaseLogin.Password';
