import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const ButtonAfter = <Tag extends BlockTagType>(props: PropsWithChildren<BlockProps<Tag | 'aside'>>) => {
  const { keyname = 'buttonAfter', name = 'buttonAfter', ...elmProps } = props;
  return <Block {...elmProps} name={keyname || name} tagName="aside" />;
};
