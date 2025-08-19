import { type PropsWithChildren } from 'react';
import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T | 'div'>>>) => {
  const { keyname = 'logo', name = 'logo', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = '⚛️';
  }
  return <Block {...elmProps} keyname={keyname || name} />;
};

Logo.displayName = 'BaseLogin.Logo';
