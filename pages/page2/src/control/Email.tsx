import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Email: FC<InputProps> = (props) => {
  const { name, ...elmProps } = props;
  return <Input placeholder="Email" spellCheck={false} {...elmProps} type="email" name="email" rename={name} />;
};
