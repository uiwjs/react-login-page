import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Reset: FC<ButtonProps> = (props) => {
  const { keyname, name = 'reset', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Reset';
  }
  return <Button type="reset" {...elmProps} name={name} keyname={keyname} />;
};
