import React from "react";

class DisplayInfor extends React.Component {
    const {listUsers} = this.props;
    render() {
        const { age, name } = this.props;
        return (

            <div>
                {listUsers.map((user)=>{
                    <div>My name's {name}</div>
                <div>My age's {age}</div>
                })}
                
            </div>
        );
    }
}

export default DisplayInfor;
