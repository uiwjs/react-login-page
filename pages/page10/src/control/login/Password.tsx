import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { IconLock } from '../../icons/lock';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
  panel?: 'login' | 'signup';
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { keyname = 'password', name, visible = true, rename, label, panel = 'login', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children && visible) {
    elmProps.children = IconLock;
  }

  const key = (keyname || name) as string;
  const nameBase = name || rename || keyname;
  useEffect(() => dispatch({ [`$$${panel}${key}`]: label }), [label]);

  return (
    <Input
      type="password"
      placeholder="Your Password"
      autoComplete="on"
      index={1}
      {...elmProps}
      name={nameBase}
      visible={visible}
      keyname={`$$${panel}${key}`}
    />
  );
});

Password.displayName = 'Login.Password';
