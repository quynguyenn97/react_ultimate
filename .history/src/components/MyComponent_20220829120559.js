import React from "react";

class MyComponent extends React.Component {

    state = {
        name : "Quy",
        address: "Go vap",
        age: 25
    };

    handleClick() {
        console.log(">>> Click me");
        console.log(">>> My name is", this.state.name);
    }
    handleMouseOver(e) {
        console.log(e.pageX);
    }


    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;