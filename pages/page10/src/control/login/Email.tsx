import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';
import { IconEmail } from '../../icons/email';

export interface EmailProps extends InputProps {
  label?: React.ReactNode;
  panel?: 'login' | 'signup';
}
export const Email: FC<EmailProps> = memo((props) => {
  const { keyname = 'email', name, visible = true, rename, label, panel = 'login', ...elmProps } = props;
  const { dispatch } = useStore();
  if (!elmProps.children && visible) {
    elmProps.children = IconEmail;
  }

  const key = (keyname || name) as string;
  const nameBase = name || rename || keyname;

  useEffect(() => dispatch({ [`$$${panel}${key}`]: label }), [label]);

  return (
    <Input
      placeholder="Your Email"
      spellCheck={false}
      visible={visible}
      index={1}
      {...elmProps}
      name={nameBase}
      keyname={`$$${panel}${key}`}
    />
  );
});

Email.displayName = 'Login.Email';
