import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { name, ...elmProps } = props;
  return <Block {...elmProps} name="footer" tagName="footer" />;
};

Footer.displayName = 'BaseLogin.Footer';
