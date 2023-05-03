import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Welcome = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'welcome', tagName = 'section', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Welcome back! Log in to your account.';
  }
  return <Block tagName={tagName} {...elmProps} keyname={keyname} />;
};
