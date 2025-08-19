import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { keyname, name = 'footer', ...elmProps } = props;
  return <Block {...elmProps} name="footer" tagName="footer" />;
};

Footer.displayName = 'Login.Footer';
