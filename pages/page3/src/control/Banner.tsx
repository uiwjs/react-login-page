import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Banner = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'banner', name, className, ...elmProps } = props;
  const key = (keyname || name) as string;
  return <Block {...elmProps} name={key} className={`login-page3-banner ${className || ''}`} />;
};

Banner.displayName = 'Login.Banner';
