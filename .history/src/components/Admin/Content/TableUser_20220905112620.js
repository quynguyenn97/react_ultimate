import { useState } from "react";

const TableUser = (props) => {
    const [listUsers, setListUser] = useState([]);

    return (
        <>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                </tr>
                            );
                        })}
                    {listUsers && listUsers.length === 0
                        return (
                            <tr>
                                <td>Not found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
};
export default TableUser;
