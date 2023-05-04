import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const TitleSignup = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title-signup', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Signup';
  }
  const nameBase = name || keyname;
  return <Block {...elmProps} keyname={nameBase} />;
};

TitleSignup.displayName = 'Login.TitleSignup';
