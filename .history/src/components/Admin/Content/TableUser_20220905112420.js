import { useState } from "react";

const TableUser = (props) => {
    const [listUsers, setListUser] = useState([
        {
            id: 18,
            username: "",
            email: "adasd@gmail.com",
            role: "USER",
        },
        {
            id: 18,
            username: "",
            email: "adasd@gmail.com",
            role: "USER",
        },
    ]);

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
                </tbody>
            </table>
        </>
    );
};
export default TableUser;