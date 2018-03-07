import React from "react";
import ReactDOM from "react-dom";

export const App=()=>{
    return (<p style={{fontSize:75}}>this is a paragraph</p>)
} 

//argument that is function is passed to meteor 
Meteor.startup(()=>{
    ReactDOM.render(<App/>,document.querySelector(".render-target"));
});