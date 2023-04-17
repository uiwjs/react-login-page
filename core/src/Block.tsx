import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  visible?: boolean;
}

export const Block: FC<PropsWithChildren<BlockProps>> = (props) => {
  const ref = useRef<BlockProps>();
  const { blocks = {}, dispatch } = useStore();
  useEffect(() => {
    const { name, visible = true, ...elmProps } = props;
    if (ref.current !== elmProps && name) {
      ref.current = { ...elmProps };
      dispatch({
        blocks: { ...blocks, [name]: visible ? <div {...elmProps} /> : null },
      });
    }
  }, [props, ref]);

  return null;
};

Block.displayName = 'Login.Block';
