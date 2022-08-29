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
        this.setState({
            name: "Thanh"
        });
    }
    handleMouseOver(e) {
        console.log(e.pageX);
    }

    handleOnSubmit(event) {
        
    }

    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        });
    }
    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event)=> this.handleOnChangeInput(event)}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;