import React, { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  /** Used to define the name of form controls */
  rename?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
}

export const Textarea: FC<PropsWithChildren<TextareaProps>> = (props) => {
  const ref = useRef<TextareaProps>();
  const { fields = {}, dispatch } = useStore();
  const { name, rename, visible = true, ...elmProps } = props;
  useEffect(() => {
    if (ref.current !== props && name) {
      ref.current = { ...props };
      dispatch({
        fields: { ...fields, [name]: visible ? <textarea {...elmProps} name={rename || name} /> : null },
      });
    }
  }, [props, name, ref]);

  return null;
};

Textarea.displayName = 'Login.Textarea';
