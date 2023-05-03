import React, { FC, PropsWithChildren, useEffect, memo } from 'react';
import { useStore } from './store';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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

export const Input: FC<PropsWithChildren<InputProps>> = memo((props) => {
  const { fields = {}, extra = {}, $$index = {}, dispatch } = useStore();
  const { rename, keyname, visible = true, children, ...elmProps } = props;
  useEffect(() => {
    if (keyname || elmProps.name) {
      const key = (keyname || elmProps.name) as string;
      delete $$index[key];
      delete fields[key];
      delete extra[key];
      dispatch({
        $$index: { ...$$index, [key]: elmProps.index || 0 },
        extra: {
          ...extra,
          [key]: children || null,
        },
        fields: {
          ...fields,
          [key]: visible ? <input {...elmProps} name={rename || elmProps.name} /> : null,
        },
      });
    }
  }, [props]);

  return null;
});

Input.displayName = 'Login.Input';
