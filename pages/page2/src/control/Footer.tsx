import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Footer = <Tag extends BlockTagType = 'footer'>(props: BlockProps<Tag | 'footer'>) => {
  const { keyname = 'footer', name, ...elmProps } = props;
  const key = (keyname || name) as string;
  return <Block {...elmProps} name={key} tagName="footer" />;
};

Footer.displayName = 'Login.Footer';
