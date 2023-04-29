import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export interface Submit extends ButtonProps {
  panel?: 'login' | 'signup';
}

export const Submit: FC<Submit> = (props) => {
  const { keyname = 'submit', panel = 'login', ...elmProps } = props;
  const panelName = panel;
  if (!elmProps.children) {
    elmProps.children = 'Submit';
  }
  return <Button type="submit" {...elmProps} keyname={`$$${panelName}${keyname}`} />;
};

Submit.displayName = 'Login.Submit';
