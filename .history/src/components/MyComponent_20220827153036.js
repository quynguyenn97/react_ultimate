import React from "react";

class MyComponent extends React.Component {

    state = {
        name : "Quy",
        address: "Go vap"
        age: 25
    };


    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;