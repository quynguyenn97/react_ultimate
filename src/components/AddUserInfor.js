import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: "Go vap",
        age: "",
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age,
        });
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    render() {
        return (
            <div>
                my name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                        value={this.state.name}
                    ></input>
                    <button>Submit</button>

                    <label>Your age</label>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                        value={this.state.age}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
