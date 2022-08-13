import { useState } from "react";
import ReactMarkDown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        />
        <article className="result">
          <ReactMarkDown>{markdown}</ReactMarkDown>
        </article>
      </section>
    </main>
  );
};

export default App;
