import { FC, Fragment, PropsWithChildren } from 'react';
import { Root, Element, RootContent } from 'hast';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import CodeLayout from 'react-code-preview-layout';
import styled from 'styled-components';
import { useMdData } from './useMdData';
import { DocsNav } from './DocsNav';

const MarkdownCode = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

const Wrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
  overflow: hidden;
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
}

export const Preview: FC<PropsWithChildren<PreviewProps>> = (props) => {
  const { mdData } = useMdData(props.path);
  return (
    <Fragment>
      <DocsNav />
      <Wrapper>
        {mdData && (
          <Markdown
            source={mdData.source}
            rehypeRewrite={(node: Root | RootContent, index: number, parent: Root | Element) => {
              if (node.type === 'element' && parent && parent.type === 'root') {
                const menu = parent.children[1] as Element | undefined;
                let childLength = [...parent.children].filter((item) => item.type !== 'raw').length;
                const lastChild = parent.children[parent.children.length - 1];
                if (lastChild?.type === 'raw') {
                  childLength = parent.children.length - 2;
                }
                if (
                  (index + 1 === childLength || index - 1 === childLength || index === childLength) &&
                  menu?.properties?.class !== 'menu-toc'
                ) {
                  const child = [...parent.children].map((item) => {
                    if (item.type === 'element' && item.tagName === 'pre') {
                      const meta = item.children[0]?.data?.meta as string;
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
                  parent.children = [
                    {
                      type: 'element',
                      tagName: 'div',
                      children: child as Element[],
                    },
                  ];
                }
              }
            }}
            components={{
              div: ({ node, ...props }) => {
                const { 'data-meta': meta, 'data-md': metaData, ...rest } = props as any;
                const line = node.position?.start.line;
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
