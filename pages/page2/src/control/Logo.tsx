import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T | 'div'>>>) => {
  const { keyname, name = 'logo', ...elmProps } = props;
  const key = (keyname || name) as string;
  if (!elmProps.children) {
    elmProps.children = '⚛️';
  }
  return <Block {...elmProps} keyname={key} />;
};

Logo.displayName = 'Login.Logo';
