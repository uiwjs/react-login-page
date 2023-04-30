import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'title', name, tagName = 'h1', ...elmProps } = props;
  const key = (keyname || name) as string;
  if (!elmProps.children) {
    elmProps.children = 'Member Login';
  }
  return <Block tagName={tagName} {...elmProps} keyname={key} />;
};

Title.displayName = 'Login.Title';
