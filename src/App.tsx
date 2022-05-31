import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";


function App() {
  return (
    <div className="flex items-start justify-between ">
      <CodeMirror
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        className="w-1/2"
        height="100vh"
        theme={oneDark}
      />

      <div className="w-1/2 font-bold">hallo</div>
    </div>
  );
}

export default App;
