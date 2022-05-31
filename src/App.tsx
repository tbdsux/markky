import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import RenderContainer from "./modules/render/container";

const sampleMarkdown = `# hello world

this is a sample hello world text for you
`;

function App() {
  const [text, setText] = useState("");

  return (
    <div className="flex items-start justify-between ">
      <CodeMirror
        value={sampleMarkdown}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        className="w-1/2"
        height="100vh"
        theme={oneDark}
        onChange={(value) => {
          setText(value);
        }}
      />

      <div className="w-1/2 p-6">
        <RenderContainer markdown={text} />
      </div>
    </div>
  );
}

export default App;
