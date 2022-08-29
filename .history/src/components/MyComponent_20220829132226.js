import React from "react";
class MyComponent extends React.Component {
    state = {
        name : "Quy",
        address: "Go vap",
        age: 25
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <UserInfo/>;
            </div>
        );
    }
}

export default MyComponent;