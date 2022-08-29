import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span
                        onClick={() => {
                            this.handleShowHide();
                        }}
                    >
                        {this.state.isShowListUser === true
                            ? "Hide list user"
                            : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser && (
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
