import React from "react";
import ReactDOM from "react-dom";
import Header from "../../ui/Header";

export const App=()=>{
    // return (<p className="pClass">this is a paragraph</p>)
    return (<div><Header brandName="my Brand"/><p className="pClass">this is a paragraph</p></div>)
    
}

//argument that is function is passed to meteor 
Meteor.startup(()=>{
    ReactDOM.render(<App/>,document.querySelector(".render-target"));
});