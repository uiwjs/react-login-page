import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { keyname = 'username', name, ...elmProps } = props;
  const nameBase = name || keyname;
  const key = (keyname || name) as string;
  return <Input placeholder="Username" spellCheck={false} index={1} {...elmProps} name={nameBase} keyname={key} />;
};

Username.displayName = 'BaseLogin.Username';
