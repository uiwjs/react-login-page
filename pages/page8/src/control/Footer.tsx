import { Block, BlockProps, BlockTagType } from 'react-login-page';

export interface FooterProps<Tag extends BlockTagType> extends BlockProps<Tag> {
  panel?: 'login' | 'signup';
}

export const Footer = <Tag extends BlockTagType = 'footer'>(props: FooterProps<Tag | 'footer'>) => {
  const { keyname = 'footer', name, panel = 'login', ...elmProps } = props;
  return <Block {...elmProps} keyname={name || keyname} tagName="footer" />;
};

Footer.displayName = 'Login.Footer';
