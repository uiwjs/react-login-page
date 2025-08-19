import { type FC } from 'react';
import { Button, type ButtonProps } from 'react-login-page';

export const Submit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Submit';
  }
  return <Button type="submit" {...elmProps} keyname={keyname} />;
};

Submit.displayName = 'Login.Submit';
