import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <UserInfo />
                <DisplayInfor/>
            </div>
        );
    }
}

export default MyComponent;