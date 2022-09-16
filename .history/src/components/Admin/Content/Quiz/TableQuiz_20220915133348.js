import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { getAllQuizForAdmin } from "../../../services/apiServices";

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    useEffect(() => {
        fetchQuiz();
    }, []);
    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
        console.log(">>>check res", res);
    };
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {listQuiz &&
                    listQuiz.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};
export default TableQuiz;