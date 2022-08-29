import React from "react";

class DisplayInfor extends React.Component {
    const {listUsers} = this.props;
    render() {
        const { age, name } = this.props;
        return (
            <div>
                {listUsers.map((user)=>{
                    return (
                        <div>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                        <div/>
                    )
                })}
                
            </div>
            );
    };
};

export default DisplayInfor;
