import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';

export const Password: FC<InputProps> = (props) => {
  const { name, ...elmProps } = props;
  return <Input type="password" {...elmProps} name="password" rename={name} />;
};
