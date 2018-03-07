import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../../ui/Header";
import faker from "faker";

let brand = {
    name: ""
};

class App extends Component {
    // let brand="VOCIQ";
    constructor(props){
        super(props);
        this.state={brand:""};
    }
    getBrands () {
        // brand = faker.company.companyName();
        
        this.setState({brand:faker.company.companyName()});
    }
    
    
    

    render() { 
        return(
    <div className="container"><Header brandName={this.state.brand} />
        <p className="pClass">this is a paragraph</p>
        <button className="btn btn-primary btn-lg" onClick={this.getBrands.bind(this)}>Get Brand</button>
        </div> );
    }

}

//argument that is function is passed to meteor 
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector(".render-target"));
});