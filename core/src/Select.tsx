import React, { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
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

export const Select: FC<PropsWithChildren<SelectProps>> = (props) => {
  const ref = useRef<SelectProps>();
  const { fields = {}, dispatch } = useStore();
  const { rename, keyname, visible = true, ...elmProps } = props;
  useEffect(() => {
    if (ref.current !== props && (keyname || props.name)) {
      const key = (keyname || props.name) as string;
      ref.current = { ...props };
      dispatch({
        fields: { ...fields, [key]: visible ? <select {...elmProps} name={rename || props.name} /> : null },
      });
    }
  }, [props, ref]);

  return null;
};

Select.displayName = 'Login.Select';
