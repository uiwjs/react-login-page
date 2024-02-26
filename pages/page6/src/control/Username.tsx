import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface UsernameProps extends InputProps {
  label?: React.ReactNode;
}
export const Username: FC<UsernameProps> = memo((props) => {
  const { keyname = 'username', name, rename, label = 'Username:', ...elmProps } = props;
  const { dispatch } = useStore();

  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input
      placeholder="Username"
      spellCheck={false}
      index={1}
      {...elmProps}
      name={name || rename || keyname}
      keyname={key}
    />
  );
});

Username.displayName = 'BaseLogin.Username';
