import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

type Div = BlockProps<'div'>

export const ButtonAfter = <Tag extends BlockTagType = 'div'>(props: PropsWithChildren<BlockProps<Tag | 'footer'>>) => {
  const { name, ...elmProps } = props;
  
  return <Block {...elmProps} name="buttonAfter" />;
};
