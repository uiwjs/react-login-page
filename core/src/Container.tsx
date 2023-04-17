import React, { useImperativeHandle, useRef } from 'react';
import { LoginProps } from '.';

export interface ContainerRef {
  container?: HTMLDivElement | null;
}

export interface ContainerProps extends LoginProps {}
export const Container = React.forwardRef<ContainerRef, ContainerProps>((props, ref) => {
  const { className = '', children, ...elmProps } = props;
  const container = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({ container: container.current }), [container]);
  const defaultClassNames = `login-page ${className}`;
  return (
    <div ref={container} className={defaultClassNames} {...elmProps}>
      {children}
    </div>
  );
});

Container.displayName = 'Login.Container';
