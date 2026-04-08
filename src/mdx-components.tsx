import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="article-h1"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="article-h2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="article-h3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="article-p"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="article-link"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="article-blockquote"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="article-ul"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="article-ol"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="article-li"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="article-code"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="article-pre"
      {...props}
    />
  ),
  hr: () => <hr className="article-hr" />,
  strong: (props) => (
    <strong className="article-strong" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="article-img" alt={props.alt ?? ""} {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
