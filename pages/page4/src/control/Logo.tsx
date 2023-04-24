import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = '⚛️';
  }
  return <Block {...elmProps} name="logo" className={`login-page4-logo ${elmProps.className || ''}`} />;
};
