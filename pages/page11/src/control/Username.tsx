import { FC, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface UsernameProps extends InputProps {
  label?: React.ReactNode;
}

export const Username: FC<UsernameProps> = (props) => {
  const { keyname = 'username', name, rename, label, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  const { dispatch } = useStore();
  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input
      placeholder="Username"
      autoComplete="on"
      spellCheck={false}
      index={1}
      {...elmProps}
      name={nameBase}
      keyname={key}
    />
  );
};

Username.displayName = 'Login.Username';
