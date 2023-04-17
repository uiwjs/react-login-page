import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';

export interface StoreContextValue extends InitialState {
  dispatch: React.Dispatch<InitialState>;
}

export interface RenderStateProps {
  fields?: Record<string, React.ReactElement<HTMLInputElement> | null>;
  buttons?: Record<string, React.ReactElement<HTMLButtonElement> | null>;
  blocks?: Record<string, React.ReactElement<HTMLDivElement> | null>;
}

export interface InitialState extends RenderStateProps {}

export const initialState: InitialState = {
  fields: {},
  buttons: {},
  blocks: {},
};

export const Context = createContext<StoreContextValue>(initialState as StoreContextValue);
Context.displayName = 'Login.Context';

export function reducer(state: InitialState, action: InitialState): InitialState {
  return {
    ...state,
    ...action,
    fields: { ...state.fields, ...action.fields },
    buttons: { ...state.buttons, ...action.buttons },
    blocks: { ...state.blocks, ...action.blocks },
  };
}

export const useStore = () => {
  return useContext(Context);
};

export const Provider: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

Provider.displayName = 'Login.Provider';
