import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: "30" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Hary", age: "69" },
        ],
    };

    render() {
        const myInfor = ["ab", "c", "c"];
        return (
            <div>
                <UserInfo />
                <br />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    users={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;
