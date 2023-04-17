import { FC } from 'react';
import { Block, BlockProps } from 'react-login-page';

export const Footer: FC<BlockProps> = (props) => {
  const { name, ...elmProps } = props;
  return <Block {...elmProps} name="footer" />;
};
