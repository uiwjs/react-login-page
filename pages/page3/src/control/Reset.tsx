import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Reset: FC<Omit<ButtonProps, 'name'>> = (props) => {
  const { ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Reset';
  }
  return <Button type="reset" {...elmProps} name="reset" />;
};
