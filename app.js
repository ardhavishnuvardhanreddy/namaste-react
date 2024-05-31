import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("h1",{},"this is namaste react ");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


function click(){
    alert("Click");
}