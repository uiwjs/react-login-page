import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface UsernameProps extends InputProps {
  label?: React.ReactNode;
}
export const Username: FC<UsernameProps> = memo((props) => {
  const { name, rename, label = 'Username:', ...elmProps } = props;
  const { dispatch } = useStore();

  const nameProps = { name: 'username', rename: name };
  if (rename) {
    nameProps.name = rename;
  }

  useEffect(() => dispatch({ [`$${nameProps.name}`]: label }), [label]);

  return <Input placeholder="Username" spellCheck={false} {...elmProps} {...nameProps} />;
});

Username.displayName = 'BaseLogin.Username';
