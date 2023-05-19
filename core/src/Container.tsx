import React from 'react';
import { LoginProps } from '.';

export interface ContainerProps extends LoginProps {}
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { className = '', children, ...elmProps } = props;
  const defaultClassNames = `login-page ${className}`;
  return (
    <div ref={ref} className={defaultClassNames} {...elmProps}>
      {children}
    </div>
  );
});

Container.displayName = 'Login.Container';
