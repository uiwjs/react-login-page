import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';
import { LockIcon } from '../icons/lock';

export interface PasswordProps extends InputProps {}
export const Password: FC<PasswordProps> = (props) => {
  const { keyname = 'password', name, rename, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  if (!elmProps.children) {
    elmProps.children = LockIcon;
  }
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

Password.displayName = 'Login.Password';
