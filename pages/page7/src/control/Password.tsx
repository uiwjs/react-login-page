import { FC, useEffect, memo } from 'react';
import { Input, type InputProps, useStore } from 'react-login-page';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { keyname = 'password', name, rename, label = '', ...elmProps } = props;
  const { dispatch } = useStore();

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

Password.displayName = 'Login.Password';
