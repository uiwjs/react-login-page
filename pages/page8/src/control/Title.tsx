import { PropsWithChildren } from 'react';
import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  const nameBase = name || keyname;
  return <Block {...elmProps} keyname={nameBase} />;
};

Title.displayName = 'Login.Title';
