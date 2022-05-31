import React, { useEffect, useState } from "react";
import "./App.css";
import { marked } from "marked";
import { FaExpandArrowsAlt } from "react-icons/fa";

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const App = () => {
  const [value, setValue] = useState(defaultText);
  const [expend, setExpend] = useState(false);
  const [previewExpend, setPreviewExpend] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="app">
      <h1 className="text-center wholetitle"> Markdown previewer</h1>
      <div
        className={
          expend ? "mainParent expend previewExpend" : "d-flex mainParent mt-5"
        }
        // className=""
        // style={{ width: "100vw", height: "100vh" }}
      >
        <div className={previewExpend ? "editorParent d-none" : "editorParent"}>
          <div className="d-flex py-1 editorheader">
            <h5 className="text-center">Editor</h5>
            <button onClick={() => setExpend(!expend)}>
              <FaExpandArrowsAlt id="editoricon" className="h5" />
            </button>
          </div>
          <textarea
            className="editor"
            id="editor"
            value={value}
            onChange={handleChange}
          ></textarea>
        </div>
        <div
          className={
            previewExpend ? "previewParent w-90 extend" : "previewParent"
          }
          // className="previewParent"
        >
          <div className="d-flex previewheader py-1">
            <h5 className="text-center">Preview section</h5>
            <button onClick={() => setPreviewExpend(!previewExpend)}>
              <FaExpandArrowsAlt id="previewicon" className="h5" />
            </button>
          </div>

          <div
            className="border preview"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked.parse(value),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
