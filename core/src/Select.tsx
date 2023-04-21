import React, { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { useStore } from './store';

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name?: string;
  /** Used to define the name of form controls */
  rename?: string;
  /** Can be shown or hidden with controls */
  visible?: boolean;
  /** "index" refers to the use of indexes to control the order of controls, which can provide more flexible API encapsulation. */
  index?: number;
}

export const Select: FC<PropsWithChildren<SelectProps>> = (props) => {
  const ref = useRef<SelectProps>();
  const { fields = {}, dispatch } = useStore();
  const { name, rename, visible = true, ...elmProps } = props;
  useEffect(() => {
    if (ref.current !== props && name) {
      ref.current = { ...props };
      dispatch({
        fields: { ...fields, [name]: visible ? <select {...elmProps} name={rename || name} /> : null },
      });
    }
  }, [props, name, ref]);

  return null;
};

Select.displayName = 'Login.Select';
