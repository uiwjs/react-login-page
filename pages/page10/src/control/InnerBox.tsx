import { Block, BlockProps, BlockTagType } from 'react-login-page';

export interface InnerBoxProps<Tag extends BlockTagType> extends BlockProps<Tag> {
  panel?: 'login' | 'signup';
}

export const InnerBox = <Tag extends BlockTagType = 'article'>(props: InnerBoxProps<Tag | 'article'>) => {
  const { keyname = 'article', panel = 'login', ...elmProps } = props;
  return <Block {...elmProps} keyname={`$$${panel}${keyname}`} tagName="article" />;
};

InnerBox.displayName = 'Login.InnerBox';
