import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';
import { LockIcon } from '../icons/lock';

export interface PasswordProps extends InputProps {}
export const Password: FC<PasswordProps> = (props) => {
  const { keyname = 'password', name, rename, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = LockIcon;
  }
  return (
    <Input type="password" placeholder="Password" {...elmProps} name={name || rename || keyname} keyname={keyname} />
  );
};
