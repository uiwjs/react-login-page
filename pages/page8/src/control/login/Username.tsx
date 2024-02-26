import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface UsernameProps extends InputProps {
  label?: React.ReactNode;
  panel?: 'login' | 'signup';
}
export const Username: FC<UsernameProps> = memo((props) => {
  const { keyname = 'username', name, rename, panel = 'login', label = 'Username', ...elmProps } = props;
  const { dispatch } = useStore();
  const panelName = panel;

  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$$${panelName}${key}`]: label }), [label]);

  const nameBase = name || rename || keyname;

  return (
    <Input
      placeholder="Username"
      spellCheck={false}
      index={1}
      {...elmProps}
      name={nameBase}
      keyname={`$$${panelName}${key}`}
    />
  );
});

Username.displayName = 'Login.Username';
