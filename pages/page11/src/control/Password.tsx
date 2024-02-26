import { FC, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
}

export const Password: FC<PasswordProps> = (props) => {
  const { keyname = 'password', name, rename, label, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  const { dispatch } = useStore();
  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input
      type="password"
      placeholder="Password"
      autoComplete="on"
      index={2}
      {...elmProps}
      name={nameBase}
      keyname={key}
    />
  );
};

Password.displayName = 'Login.Password';
