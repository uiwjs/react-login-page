import { PropsWithChildren } from 'react';
import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'logo', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = '⚛️';
  }
  return <Block {...elmProps} keyname={name || keyname} />;
};

Logo.displayName = 'BaseLogin.Logo';
