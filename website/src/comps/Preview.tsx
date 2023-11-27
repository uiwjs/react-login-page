import { FC, Fragment, PropsWithChildren } from 'react';
import { Root, Element, RootContent } from 'hast';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ScrollRestoration } from 'react-router-dom';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import CodeLayout from 'react-code-preview-layout';
import styled, { keyframes } from 'styled-components';
import { useMdData } from './useMdData';
import { DocsNav } from './DocsNav';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { NavMenu } from './NavMenu';
import { mediaStyle } from './DocsLayout';

const MarkdownCode = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const Wrapper = styled.div<{ $isShowExample?: boolean }>`
  flex: 1;
  padding-right: 0.51rem;
  padding-left: 0.51rem;
  overflow: hidden;
  z-index: 1;
  padding-top: ${({ $isShowExample }) => ($isShowExample ? '0' : '0')};
  margin: 0 auto;
  width: 100%;
  ${mediaStyle}
`;

const Markdown = styled(MarkdownPreview)`
  background-color: transparent;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 0;
  }
`;

interface PreviewProps {
  path?: any;
  disableNav?: boolean;
}

const Example = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  height: 100vh;
  overflow: auto;
`;

const startY = keyframes`
  0%,30% {
    opacity: 0;
    transform: translateY(20px)
  }
  60% {
    opacity: 1;
    transform: translateY(0)
  }
  to {
    opacity: 0;
    transform: translateY(-8px)
  }
`;

const PageArrow = styled.div`
  font-weight: 700;
  animation: ${startY} 1.5s ease-in-out infinite;
  width: 26px;
  display: flex;
  height: 28px;
  background-color: rgb(255 255 255 / 57%);
  margin: 0px auto;
  position: absolute;
  top: -3rem;
  border-radius: 0.51rem;
`;

export const Preview: FC<PropsWithChildren<PreviewProps>> = (props) => {
  const { mdData, loading } = useMdData(props.path);
  return (
    <Fragment>
      <ScrollRestoration />
      {!props.disableNav && <DocsNav />}
      {props.disableNav && <Example>{props.children}</Example>}
      {props.disableNav && (
        <NavMenu>
          <PageArrow>
            <Arrow />
          </PageArrow>
        </NavMenu>
      )}
      <Wrapper $isShowExample={props.disableNav}>
        {loading && <div>Loading...</div>}
        {mdData && !loading && (
          <Markdown
            source={mdData.source}
            rehypeRewrite={(node: Root | RootContent, index: number, parent: Root | Element) => {
              if (node.type === 'element' && parent && parent.type === 'root') {
                [...parent.children].map((item) => {
                  if (item.type === 'element' && item.tagName === 'pre') {
                    const meta = (item.children[0]?.data as any)?.meta as string;
                    if (isMeta(meta)) {
                      item.tagName = 'div';
                      item.properties = {
                        ...item.properties,
                        'data-md': meta,
                        'data-meta': 'preview',
                      };
                      return { ...item };
                    }
                  }
                  return item;
                });
              }
            }}
            components={{
              div: ({ node, ...props }) => {
                const { 'data-meta': meta, 'data-md': metaData, ...rest } = props as any;
                const line = node?.position?.start.line;
                const metaId = getMetaId(metaData) || String(line);
                const Child = mdData.components[metaId];
                if (meta !== 'preview' || !metaId || typeof Child !== 'function') return <div {...props} />;
                const code = mdData.data[metaId].value || '';
                const param = getURLParameters(meta);
                return (
                  <CodeLayout disableCheckered style={{ marginBottom: 18 }}>
                    <MarkdownCode>
                      <Child />
                    </MarkdownCode>
                    <Toolbar text={code}>{param.title || 'Example'}</Toolbar>
                    <Code style={{ padding: 0 }}>
                      <pre {...rest} />
                    </Code>
                  </CodeLayout>
                );
              },
            }}
          />
        )}
      </Wrapper>
    </Fragment>
  );
};
