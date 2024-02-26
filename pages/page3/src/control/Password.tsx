import { FC, memo, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { LockIcon } from '../icons/lock';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { keyname = 'password', name, rename, label = 'Password:', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children) {
    elmProps.children = LockIcon;
  }

  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

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
});
