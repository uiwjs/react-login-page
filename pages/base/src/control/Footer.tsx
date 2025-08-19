import { Block, type BlockProps, type BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { keyname = 'footer', name = 'footer', ...elmProps } = props;
  return <Block {...elmProps} name={keyname || name} tagName="footer" />;
};

Footer.displayName = 'BaseLogin.Footer';
