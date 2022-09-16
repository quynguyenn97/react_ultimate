import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { getAllQuizForAdmin } from "../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import { toast } from "react-toastify";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = (props) => {
    const [modalDeleteQuiz, setModalDeleteQuiz] = useState(false);
    const [modalUpdateQuiz, setModalUpdateQuiz] = useState(false);
    const [dataUpdateQuiz, setDataUpdateQuiz] = useState("");

    const [quizId, setQuizId] = useState("");
    const [listQuiz, setListQuiz] = useState([]);
    useEffect(() => {
        fetchQuiz();
    }, []);
    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        setListQuiz(res.DT);
    };

    const handleDeleteQuiz = (quizId) => {
        setModalDeleteQuiz(true);
        setQuizId(quizId);
    };

    const handleUpdateQuiz = (item) => {
        setModalUpdateQuiz(true);
        setDataUpdateQuiz(item);
    };

    return (
        <>
            <div>List Quizzes: </div>
            <table className="table table-hover table-bordered my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning mx-2"
                                            onClick={() =>
                                                handleUpdateQuiz(item)
                                            }>
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteQuiz(item)
                                            }>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ModalDeleteQuiz
                show={modalDeleteQuiz}
                setShow={setModalDeleteQuiz}
                quizId={quizId}
                fetchQuiz={fetchQuiz}
            />
            <ModalUpdateQuiz
                show={modalUpdateQuiz}
                setShow={setModalUpdateQuiz}
            />
        </>
    );
};
export default TableQuiz;
