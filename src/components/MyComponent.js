import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi Dan It", age: "30" },
//       { id: 2, name: "Eric", age: "15" },
//       { id: 3, name: "Hary", age: "69" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log("Check data", userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi Dan It", age: "30" },
    { id: 2, name: "Eric", age: "15" },
    { id: 3, name: "Hary", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </>
  );
};

export default MyComponent;
