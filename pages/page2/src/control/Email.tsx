import { FC } from 'react';
import { Input, InputProps } from 'react-login-page';
import { EmailIcon } from '../icons/email';

export interface EmailProps extends InputProps {}
export const Email: FC<EmailProps> = (props) => {
  const { name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = EmailIcon;
  }
  return <Input placeholder="Email" spellCheck={false} {...elmProps} type="email" name="email" rename={name} />;
};
