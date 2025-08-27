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

- List item example

Here is a code block:

\`\`\`javascript
// Example code block
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("world");
\`\`\`

And an image example:

![Placeholder Image](/md.jpeg)
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
