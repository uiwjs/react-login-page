import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Submit: FC<Omit<ButtonProps, 'name'>> = (props) => {
  const { ...elmProps } = props;
  return <Button {...elmProps} name="submit" />;
};
