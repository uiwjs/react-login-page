import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Reset: FC<ButtonProps> = (props) => {
  const { ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = <div>Reset</div>;
  } else {
    elmProps.children = <div>{elmProps.children}</div>;
  }
  return <Button type="reset" {...elmProps} name="reset" />;
};

Reset.displayName = 'Login.Reset';
