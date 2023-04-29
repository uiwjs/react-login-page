import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { keyname = 'username', name, rename, ...elmProps } = props;
  return (
    <Input placeholder="Username" spellCheck={false} {...elmProps} name={name || rename || keyname} keyname={keyname} />
  );
};
