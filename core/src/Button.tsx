import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
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
