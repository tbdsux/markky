import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RenderContainerProps {
  markdown: string;
}

const RenderContainer = ({ markdown }: RenderContainerProps) => {
  return (
    <div>
      <ReactMarkdown
        className="markdown-body"
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};

export default RenderContainer;
