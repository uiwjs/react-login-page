import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { keyname = 'email', name, rename, ...elmProps } = props;
  const key = (keyname || name) as string;
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
};

Username.displayName = 'BaseLogin.Username';
