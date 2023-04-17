import React, { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  /** Used to define the name of form controls */
  rename?: string;
  visible?: boolean;
}

export const Input: FC<PropsWithChildren<InputProps>> = (props) => {
  const ref = useRef<InputProps>();
  const { fields = {}, dispatch } = useStore();
  const { name, rename, visible = true, ...elmProps } = props;
  useEffect(() => {
    if (ref.current !== props && name) {
      ref.current = { ...props };
      dispatch({
        fields: { ...fields, [name]: visible ? <input {...elmProps} name={rename || name} /> : null },
      });
    }
  }, [props, name, ref]);

  return null;
};

Input.displayName = 'Login.Input';
