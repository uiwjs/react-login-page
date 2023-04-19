import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';

export interface StoreContextValue<Tag extends BlockTagType> extends InitialState<Tag> {
  dispatch: React.Dispatch<Partial<InitialState<Tag>>>;
}

export type BlockTagType = keyof JSX.IntrinsicElements;

type Fields = React.ReactElement<HTMLInputElement & { index?: number; }>;
type Buttons = React.ReactElement<HTMLButtonElement & { index?: number; }>;
type Blocks<Tag extends BlockTagType = 'div'> =  React.ReactElement<Tag & { index?: number; }>;

export interface RenderStateProps<Tag extends BlockTagType = 'div'> {
  fields?: Record<string, Fields | null>;
  buttons?: Record<string, Buttons | null>;
  blocks?: Record<string, Blocks<Tag> | null>;
}

interface Control<T> {
  name: string;
  index: number;
  children?: T | null;
}

export interface InitialState<Tag extends BlockTagType = 'div'> extends RenderStateProps<Tag> {
  data: {
    fields: Control<Fields>[];
    buttons: Control<Buttons>[];
    blocks: Control<Blocks<Tag>>[];
  }
}

export const initialState: InitialState = {
  fields: {},
  buttons: {},
  blocks: {},
  data: {
    fields: [],
    buttons: [],
    blocks: [],
  },
};

export const Context = createContext<StoreContextValue<'div'>>(initialState as StoreContextValue<'div'>);
Context.displayName = 'Login.Context';

export function reducer(state: InitialState, action: Partial<RenderStateProps>): InitialState {
  const result = {
    ...state,
    ...action,
    fields: { ...state.fields, ...action.fields },
    buttons: { ...state.buttons, ...action.buttons },
    blocks: { ...state.blocks, ...action.blocks },
  }
  const fieldsArray = Object.keys(result.fields).map((key, index) => ({
    name: key,
    index: result.fields[key]?.props?.index || 0,
    children: result.fields[key],
  }));
  const buttonsArray = Object.keys(result.buttons).map((key, index) => ({
    name: key,
    index: result.buttons[key]?.props?.index || 0,
    children: result.buttons[key],
  }));
  const blocksArray = Object.keys(result.blocks).map((key, index) => ({
    name: key,
    index: result.blocks[key]?.props?.index || 0,
    children: result.blocks[key],
  }));
  return { ...result, data: { ...result.data, fields: fieldsArray, buttons: buttonsArray, blocks: blocksArray }};
}

export const useStore = () => {
  return useContext(Context);
};

interface ProviderProps {
  render?: any;
}

export const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({ children, render }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

Provider.displayName = 'Login.Provider';
