import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { name, rename, ...elmProps } = props;
  const nameProps = { name: 'username', rename: name };
  if (rename) {
    nameProps.name = rename;
  }
  return <Input placeholder="Username" spellCheck={false} {...elmProps} {...nameProps} />;
};
