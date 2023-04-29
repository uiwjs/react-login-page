import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Submit: FC<ButtonProps> = (props) => {
  const { keyname, name = 'submit', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Log in';
  }
  return <Button type="submit" {...elmProps} name={name} keyname={keyname} />;
};
