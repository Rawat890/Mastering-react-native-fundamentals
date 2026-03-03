JSX is a syntax extension for JavaScript used with React to describe what the UI should look like. Browsers do not understand JSX directly, so it needs to be transformed into regular JavaScript that browsers can execute. This transformation process is handled by a compiler, most commonly Babel.
How JSX is converted to React.createElement calls (Traditional Transform):
Parsing: The compiler (e.g., Babel) first parses the JSX code, creating an Abstract Syntax Tree (AST) representation of the code.
Transformation: A specific Babel plugin, @babel/plugin-transform-react-jsx, then traverses this AST. When it encounters JSX elements, it transforms them into React.createElement() function calls.

1. JSX Transformation → How JSX Becomes React.createElement

JSX is syntactic sugar for React.createElement.
Before React runs your code, your build tool (Babel, SWC, TypeScript, etc.) compiles JSX into pure JavaScript.

Example: Basic transformation

JSX

const element = <h1 className="title">Hello</h1>

Transpiled JavaScript

const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello"
);

Nested JSX

JSX

<div>
  <p>Text</p>
</div>


Compiled

React.createElement(
  "div",
  null,
  React.createElement("p", null, "Text")
);

Components

JSX distinguishes between:

Lowercase tags → HTML elements

Uppercase tags → React component functions/classes

JSX

<App title="React" />


Compiled

React.createElement(App, { title: "React" });

2. Rendering Pipeline → The Component Lifecycle (Functional Components)

React’s lifecycle can be grouped into three phases:

A. Mounting

Happens when a component is inserted into the DOM.

Order:

render() (initial JSX evaluation)

commit DOM updates

useEffect(() => {}, []) runs after painting

B. Updating

Triggered by:

state updates

prop changes

context changes

Order:

render()

commit DOM updates

useEffect cleanup (if any)

useEffect re-runs

C. Unmounting

When the component is removed.

all effects run cleanup functions

In class components

Lifecycle methods instead of hooks:

Mounting: constructor → render → componentDidMount

Updating: render → componentDidUpdate

Unmounting: componentWillUnmount

3. The Fiber Architecture → React’s Reconciliation Engine

React Fiber is the engine behind rendering.
Its goals: interruptible, prioritized, incremental updates.

Key Concepts
1. Work Loop

React splits work into units called fibers, each representing one component.
It performs rendering in chunks so the browser stays responsive.

2. Reconciliation

React compares the new virtual tree to the previous one:

Same type → update (preserve state)

Different type → replace (drop state)

Keys help React track list elements and avoid unnecessary re-renders.

3. Two Phases of Rendering
A. Render Phase (can be paused, restarted)

“Should I update?”

Build work-in-progress Fiber tree

B. Commit Phase (cannot be interrupted)

Make real DOM changes

Run effects

4. Practical Exercise

Below is an exercise designed to help you compare JSX vs pure JavaScript via React.createElement.

Exercise Part A: Write a JSX Component
function Greeting() {
  return (
    <div className="box">
      <h1>Hello!</h1>
      <p>This is JSX.</p>
    </div>
  );
}

Exercise Part B: Write the Same Component Using React.createElement
function Greeting() {
  return React.createElement(
    "div",
    { className: "box" },
    React.createElement("h1", null, "Hello!"),
    React.createElement("p", null, "This is JSX.")
  );
}

Exercise Part C: Make a Component With Props in Both Styles

JSX

function User({ name }) {
  return <h2>User: {name}</h2>;
}


Pure JS

function User(props) {
  return React.createElement("h2", null, `User: ${props.name}`);
}

Exercise Part D: Create Nested Lists
JSX
const list = (
  <ul>
    {["A", "B", "C"].map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

Pure JavaScript
const list = React.createElement(
  "ul",
  null,
  ["A", "B", "C"].map(item =>
    React.createElement("li", { key: item }, item)
  )
);
