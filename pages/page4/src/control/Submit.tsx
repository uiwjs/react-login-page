import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Submit: FC<Omit<ButtonProps, 'name'>> = (props) => {
  const { ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = <div>Log in</div>;
  } else {
    elmProps.children = <div>{elmProps.children}</div>;
  }
  return <Button type="submit" {...elmProps} name="submit" />;
};
