import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { keyname = 'footer', name, ...elmProps } = props;
  return <Block {...elmProps} keyname={name || keyname} tagName="footer" />;
};

Footer.displayName = 'Login.Footer';
