import { Fragment, PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';

export const Title = <T extends BlockTagType>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { name, tagName = 'h1', ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children = (
      <Fragment>
        We are <b>Login</b>
      </Fragment>
    );
  }
  return <Block tagName={tagName} {...elmProps} name="title" />;
};

Title.displayName = 'Login.Title';
