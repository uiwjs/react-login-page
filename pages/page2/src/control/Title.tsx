import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname, name = 'title', tagName = 'h1', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Member Login';
  }
  return <Block tagName={tagName} {...elmProps} keyname={keyname || name} />;
};
