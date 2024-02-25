// const heading = document.createElement("h1")
// heading.innerHTML = "hello world from JavaScript"
// document.getElementById("root").appendChild(heading)

import React from "react";
import { ReactDOM } from "react-dom";
import { createRoot } from 'react-dom/client';


const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child1"},[
        React.createElement("h1", {}, "I'm H1 tag"),
        React.createElement("h2", {}, "I'm H2 tag")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {}, "I'm H1 tag"),
        React.createElement("h2", {}, "I'm H2 tag")
    ]),
])
// const root = ReactDOM.createRoot(document.getElementById("root"))
const root = createRoot(document.getElementById('root'));
root.render(parent)