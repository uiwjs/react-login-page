import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Reset: FC<ButtonProps> = (props) => {
  const { keyname = 'reset', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = <div>Reset</div>;
  } else {
    elmProps.children = <div>{elmProps.children}</div>;
  }
  return <Button type="reset" {...elmProps} keyname={keyname} />;
};

Reset.displayName = 'Login.Reset';
