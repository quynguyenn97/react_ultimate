import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        const myInfor = ["ab", "c", "c"];
        return (
            <div>
                <UserInfo />
                <br />
                <br />
                <DisplayInfor name="Hoi Dan IT" age="30" />
                <hr />
                <DisplayInfor name="Eric" age="26" />
            </div>
        );
    }
}

export default MyComponent;
