import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Banner = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T | 'aside'>>>) => {
  const { keyname = 'banner', ...elmProps } = props;
  return <Block {...elmProps} keyname={keyname} tagName="aside" />;
};

Banner.displayName = 'Login.Banner';
