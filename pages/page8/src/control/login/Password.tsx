import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
  panel?: 'login' | 'signup';
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { keyname = 'password', name, rename, panel = 'login', label = 'Password', ...elmProps } = props;
  const { dispatch } = useStore();
  const panelName = panel;

  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$$${panelName}${key}`]: label }), [label]);
  const nameBase = name || rename || keyname;

  return (
    <Input
      type="password"
      placeholder="Password"
      autoComplete="on"
      index={2}
      {...elmProps}
      name={nameBase}
      keyname={`$$${panelName}${key}`}
    />
  );
});

Password.displayName = 'Login.Password';
