import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Reset: FC<ButtonProps> = (props) => {
  const { ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Reset';
  }
  return <Button {...elmProps} name="reset" />;
};
