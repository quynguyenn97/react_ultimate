import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: "30" },
            { id: 2, name: "Eric", age: "15" },
            { id: 3, name: "Hary", age: "69" },
        ],
    };

    handleAddNewUser = (userObj) => {
        console.log("Check data", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        });
    };

    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;
