import React from "react";

class UserInfo extends React.Component {
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
        
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });        
    }

    render() {
        return(
            <div>
                my name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input 
                        type="text" 
                        onChange={(event)=> this.handleOnChangeInput(event)}
                        value={this.state.name}>
                    </input>
                    <button>Submit</button>                 

                    <label>Your age</label>
                    <input 
                        type="text" 
                        onChange={(event)=> this.handleOnChangeAge(event)}
                        value={this.state.age}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;