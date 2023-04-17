import { FC } from 'react';
import { Block, BlockProps } from 'react-login-page';

export const Logo: FC<BlockProps> = (props) => {
  const { name, ...elmProps } = props;
  return <Block {...elmProps} name="logo" />;
};
