import React from "react";
import ReactDOM from "react-dom";
import Header from "../../ui/Header";
import faker from "faker";

let brand={
    name:""
};

export const App=()=>{
    // let brand="VOCIQ";
    const getBrands=()=>{
        brand.name=faker.company.companyName();
        console.log(brand.name);
    }    
    return (<div className="container"><Header brandName={brand.name}/><p className="pClass">this is a paragraph</p><button className="btn btn-primary btn-lg" onClick={getBrands}>Get Brand</button></div>)
    
}

//argument that is function is passed to meteor 
Meteor.startup(()=>{
    ReactDOM.render(<App/>,document.querySelector(".render-target"));
});