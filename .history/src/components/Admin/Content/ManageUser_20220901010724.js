import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">Manage User</div>
            <div classNameName="users-content">
                <div className="btn-add-new">
                    <button>Add new users</button>
                </div>
                <div className="table-users">table user</div>
                <ModalCreateUser />
            </div>
        </div>
    );
};
export default ManageUser;