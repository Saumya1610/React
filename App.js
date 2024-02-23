// const heading = document.createElement("h1")
// heading.innerHTML = "hello world from JavaScript"
// document.getElementById("root").appendChild(heading)


const heading1 = React.createElement(
    "h1", {
    id: "title",
    style: {
        background:"red",
      },
    className: 'heading1',
}, 
"Heading 1")
const heading2 = React.createElement(
    "h2", {
    id: "title",
    className: 'heading2',
}, 
"Heading 2")
const container = React.createElement(
    "div", {
    id: "container",
}, 
[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)