import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfo />
        <br></br>
        <DisplayInfor />
        <hr />
        <DisplayInfor />
      </div>
    );
  }
}

export default MyComponent;
