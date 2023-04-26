import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { name, rename, label = '', ...elmProps } = props;
  const { dispatch } = useStore();

  const nameProps = { name: 'password', rename: name };
  if (rename) {
    nameProps.name = rename;
  }

  useEffect(() => dispatch({ [`$${nameProps.name}`]: label }), [label]);

  return <Input type="password" placeholder="Password" {...elmProps} {...nameProps} />;
});

Password.displayName = 'BaseLogin.Password';
