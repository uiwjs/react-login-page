import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface SignupPasswordProps extends InputProps {
  label?: React.ReactNode;
}
export const SignupPassword: FC<SignupPasswordProps> = memo((props) => {
  const { keyname = 'password', name, rename, label = '', ...elmProps } = props;
  const { dispatch } = useStore();
  const panelName = 'signup';
  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$$${panelName}${key}`]: label }), [label]);
  const nameBase = name || rename || keyname;

  return (
    <Input type="password" placeholder="Password" {...elmProps} name={nameBase} keyname={`$$${panelName}${key}`} />
  );
});

SignupPassword.displayName = 'Login.SignupPassword';
