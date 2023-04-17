import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  visible?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const ref = useRef<ButtonProps>();
  const { buttons = {}, dispatch } = useStore();
  useEffect(() => {
    const { name, visible = true, ...elmProps } = props;
    if (ref.current !== elmProps && name) {
      ref.current = { ...elmProps };
      dispatch({
        buttons: { ...buttons, [name]: visible ? <button type="submit" {...elmProps} /> : null },
      });
    }
  }, [props, ref]);

  return null;
};

Button.displayName = 'Login.Button';
