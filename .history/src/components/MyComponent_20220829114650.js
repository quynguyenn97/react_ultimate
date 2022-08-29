import React from "react";

class MyComponent extends React.Component {

    state = {
        name : "Quy",
        address: "Go vap",
        age: 25
    };

    handleClick(e) {
        console.log(>>> Click me);
    }


    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;