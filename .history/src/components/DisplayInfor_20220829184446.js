import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        return(
            <div>
                {listUsers.map((user)=>{
                    return(


                    )
                })}
            </div>
        )
    }
}

    


export default DisplayInfor;
