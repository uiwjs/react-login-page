import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import { useStore } from './store';

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  keyname?: string;
  /**
   * Used to define the name of form controls
   * @deprecated use `name`
   */
  rename?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
}

export const Textarea: FC<PropsWithChildren<TextareaProps>> = memo((props) => {
  const { fields = {}, extra = {}, $$index = {}, dispatch } = useStore();
  useEffect(() => {
    const { rename, keyname, visible = true, children, ...elmProps } = props;
    if (keyname || elmProps.name) {
      const key = (keyname || elmProps.name) as string;
      delete fields[key];
      delete extra[key];
      delete $$index[key];
      dispatch({
        $$index: { ...$$index, [key]: elmProps.index || 0 },
        extra: {
          ...extra,
          [key]: children || null,
        },
        fields: { ...fields, [key]: visible ? <textarea {...elmProps} name={rename || elmProps.name} /> : null },
      });
    }
  }, [props]);

  return null;
});

Textarea.displayName = 'Login.Textarea';
