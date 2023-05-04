import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T | 'div'>>>) => {
  const { keyname = 'logo', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = '⚛️';
  }
  const nameBase = name || keyname;
  return <Block {...elmProps} keyname={nameBase} className={`login-page8-logo ${elmProps.className || ''}`} />;
};

Logo.displayName = 'Login.Logo';
