import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import "katex/dist/katex.min.css";

interface RenderContainerProps {
  markdown: string;
}

const RenderContainer = ({ markdown }: RenderContainerProps) => {
  return (
    <div>
      <ReactMarkdown
        className="markdown-body"
        children={markdown}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
};

export default RenderContainer;
