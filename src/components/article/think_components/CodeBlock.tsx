interface CodeBlockProps {
  lang?: string;
  filename?: string;
  children: string;
}

export default function CodeBlock({ lang = "code", filename, children }: CodeBlockProps) {
  return (
    <div className="think-codeblock">
      <div className="think-codeblock-header">
        <span className="think-codeblock-lang">{lang}</span>
        {filename && <span>{filename}</span>}
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );
}
