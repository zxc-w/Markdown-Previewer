import { useState } from "react";
import "./App.css";
import DOMPurify from "dompurify";
import { marked } from "marked";

marked.use({
  breaks: true,
  gfm: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to the Editor

## Quick Example

This is **bolded text** to show emphasis.  
Here's an inline code sample: \`npm install example-package\`.

A link for reference: [Example Site](https://example.com)

> This is a blockquote that calls out an important note.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. Last one.

Here is a code block:

\`\`\`javascript
// Example code block
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("world");
\`\`\`

And an image example:

![Markdown Image](https://zxc-w.github.io/markdown-previewer/md.jpeg)
`);

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked.parse(markdown)),
        }}
      />
    </div>
  );
}

export default App;
