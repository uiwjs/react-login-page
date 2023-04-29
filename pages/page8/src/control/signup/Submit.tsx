import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const SignupSubmit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit', ...elmProps } = props;
  const panelName = 'signup';
  if (!elmProps.children) {
    elmProps.children = 'Signup';
  }
  return <Button type="submit" {...elmProps} keyname={`$$${panelName}${keyname}`} />;
};

SignupSubmit.displayName = 'Login.SignupSubmit';
