import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Username: FC<InputProps> = (props) => {
  const { name, ...elmProps } = props;
  return <Input placeholder="Username" spellCheck {...elmProps} name="username" rename={name} />;
};
