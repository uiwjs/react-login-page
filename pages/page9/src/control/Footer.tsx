import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { keyname = 'footer', ...elmProps } = props;
  return <Block {...elmProps} name={keyname} tagName="footer" />;
};

Footer.displayName = 'BaseLogin.Footer';
