import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "Go vap",
//     age: "",
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name</label>
//           <input
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//             value={this.state.name}
//           ></input>

//           <label>Your age</label>
//           <input
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//             value={this.state.age}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Go Vap");
  const [age, setAge] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name</label>
        <input
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
          value={name}
        ></input>

        <label>Your age</label>
        <input
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
          value={age}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
