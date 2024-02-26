import { FC, memo, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { EmailIcon } from '../icons/email';

export interface EmailProps extends InputProps {
  label?: React.ReactNode;
}
export const Email: FC<EmailProps> = memo((props) => {
  const { keyname = 'email', name, rename, label = 'Email:', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children) {
    elmProps.children = EmailIcon;
  }

  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;

  useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input type="email" placeholder="Email" index={1} spellCheck={false} {...elmProps} name={nameBase} keyname={key} />
  );
});

Email.displayName = 'Login.Email';
