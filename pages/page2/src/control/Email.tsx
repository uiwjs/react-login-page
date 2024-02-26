import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';
import { EmailIcon } from '../icons/email';

export interface EmailProps extends InputProps {}
export const Email: FC<EmailProps> = (props) => {
  const { keyname = 'email', name, rename, ...elmProps } = props;
  const nameBase = name || rename || keyname;
  const key = (keyname || name) as string;
  if (!elmProps.children) {
    elmProps.children = EmailIcon;
  }
  return (
    <Input placeholder="Email" spellCheck={false} index={1} {...elmProps} type="email" name={nameBase} keyname={key} />
  );
};

Email.displayName = 'Login.Email';
