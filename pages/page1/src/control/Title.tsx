import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  return <Block {...elmProps} name="title" />;
};
