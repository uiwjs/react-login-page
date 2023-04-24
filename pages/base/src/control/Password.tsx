import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { name, rename, ...elmProps } = props;
  const nameProps = { name: 'email', rename: name };
  if (rename) {
    nameProps.name = rename;
  }
  return <Input type="password" placeholder="Password" {...elmProps} {...nameProps} />;
};
