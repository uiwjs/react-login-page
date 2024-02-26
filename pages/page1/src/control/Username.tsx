import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { keyname = 'username', name, rename, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  return <Input type="text" index={1} placeholder="Username" {...elmProps} name={nameBase} keyname={key} />;
};

Username.displayName = 'Login.Username';
