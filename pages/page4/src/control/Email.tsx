import { FC, memo, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface EmailProps extends InputProps {
  label?: React.ReactNode;
}
export const Email: FC<EmailProps> = memo((props) => {
  const { keyname = 'email', name, rename, label = 'Email:', ...elmProps } = props;
  const { dispatch } = useStore();

  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input
      type="email"
      placeholder="Email"
      spellCheck={false}
      index={1}
      {...elmProps}
      name={name || rename || keyname}
      keyname={key}
    />
  );
});

Email.displayName = 'Login.Email';
