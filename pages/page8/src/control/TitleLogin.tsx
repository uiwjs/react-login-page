import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const TitleLogin = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title-login', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  const nameBase = name || keyname;
  return <Block {...elmProps} keyname={nameBase} />;
};

TitleLogin.displayName = 'Login.TitleLogin';
