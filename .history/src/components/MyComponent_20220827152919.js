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
                my first component
            </div>
        )
    }
}

export default MyComponent;