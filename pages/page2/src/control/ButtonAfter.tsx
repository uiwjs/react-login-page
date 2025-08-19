import { PropsWithChildren } from 'react';
import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const ButtonAfter = <Tag extends BlockTagType>(props: PropsWithChildren<BlockProps<Tag | 'aside'>>) => {
  const { keyname = 'buttonAfter', name, ...elmProps } = props;
  const key = (keyname || name) as string;
  return <Block {...elmProps} name={key} tagName="aside" />;
};

ButtonAfter.displayName = 'Login.ButtonAfter';
