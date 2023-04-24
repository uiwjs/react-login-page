import { FC, memo, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { LockIcon } from '../icons/lock';

export interface PasswordProps extends InputProps {
  label?: React.ReactNode;
}
export const Password: FC<PasswordProps> = memo((props) => {
  const { name, rename, label = 'Password:', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children) {
    elmProps.children = LockIcon;
  }

  const nameProps = { name: 'password', rename: name };
  if (rename) {
    nameProps.name = rename;
  }

  useEffect(() => dispatch({ [`$${nameProps.name}`]: label }), [label]);

  return <Input type="password" placeholder="Password" {...elmProps} {...nameProps} />;
});
