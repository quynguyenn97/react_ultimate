import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from 

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <UserInfo />
                <DisplayInfor></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;