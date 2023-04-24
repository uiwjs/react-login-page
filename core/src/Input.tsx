import React, { FC, PropsWithChildren, useRef, useEffect, memo } from 'react';
import { useStore } from './store';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  /** Used to define the name of form controls */
  rename?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
}

export const Input: FC<PropsWithChildren<InputProps>> = memo((props) => {
  const ref = useRef<InputProps>();
  const { fields = {}, extra = {}, $$index = {}, dispatch } = useStore();
  const { name, rename, visible = true, children, ...elmProps } = props;
  useEffect(() => {
    if (ref.current !== props && name) {
      ref.current = { ...props };
      dispatch({
        $$index: { ...$$index, [name]: elmProps.index || 0 },
        extra: {
          ...extra,
          [name]: children || null,
        },
        fields: {
          ...fields,
          [name]: visible ? <input {...elmProps} name={rename || name} /> : null,
        },
      });
    }
  }, [props, name, ref]);

  return null;
});

Input.displayName = 'Login.Input';
