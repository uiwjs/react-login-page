import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const ButtonAfter = <Tag extends BlockTagType>(props: PropsWithChildren<BlockProps<Tag | 'aside'>>) => {
  const { name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Button After';
  }
  return <Block {...elmProps} name="buttonAfter" tagName="aside" />;
};
