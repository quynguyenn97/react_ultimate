const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">Manage User</div>
            <div classNameName="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table user
                    <Example />
                </div>
            </div>
        </div>
    );
};
export default ManageUser;