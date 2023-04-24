import { FC, memo, useEffect } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { EmailIcon } from '../icons/email';

export interface EmailProps extends InputProps {
  label?: React.ReactNode;
};
export const Email: FC<EmailProps> = memo((props) => {
  const { name, rename, label = 'Email:', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children) {
    elmProps.children = EmailIcon
  }

  const nameProps = { name: 'email', rename: name };
  if (rename) {
    nameProps.name = rename;
  }

  useEffect(() => dispatch({ [`$${nameProps.name}`]: label }), [label]);

  return <Input type="email" placeholder="Email" spellCheck={false} {...elmProps} {...nameProps} />;
});
