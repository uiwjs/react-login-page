import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const ButtonAfter = <Tag extends BlockTagType>(props: PropsWithChildren<BlockProps<Tag | 'aside'>>) => {
  const { keyname = 'buttonAfter', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Button After';
  }
  return <Block {...elmProps} name={keyname || name} tagName="aside" />;
};

ButtonAfter.displayName = 'Login.ButtonAfter';
