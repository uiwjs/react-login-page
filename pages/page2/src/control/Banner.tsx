import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Banner = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T | 'div'>>>) => {
  const { keyname = 'banner', name, ...elmProps } = props;
  const key = (keyname || name) as string;
  return <Block {...elmProps} name={key} />;
};

Banner.displayName = 'Login.Banner';
