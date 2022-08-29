import React from "react";

class UserInfo extends React.Component {
    render() {
        return(
            <div>
                                my name is {this.state.name} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                    onChange={(event)=> this.handleOnChangeInput(event)}
                    value={this.state.name}>
                    </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;