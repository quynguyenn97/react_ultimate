import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { postCreateNewQuiz } from "../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";

const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("EASY");
    const [image, setImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmitQuiz = async () => {
        if (!name || !description) {
            toast.error("Name/Description is required");
            return;
        }
        let res = await postCreateNewQuiz(
            description,
            name,
            type?.value,
            image
        );
        // console.log(">>>check res", res);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setName("");
            setDescription("");
            setImage(null);

            // handleClose();
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    };
    return (
        <div className="quiz-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Manage Quizzes</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new"></div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="title">Manage Quizzes</div>
            <hr />
            <div className="add-new"></div>
            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="you quiz name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label>Name</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="description.."
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <label>Description</label>
                </div>
                <div className="my-3">
                    <Select
                        value={type}
                        // onChange={this.handleChange}
                        defaultValue={type}
                        onChange={setType}
                        options={options}
                        placeholder="Quiz type"
                    />
                </div>
                <div className="more-actions form-group">
                    <label className="mb-2">Upload Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(event) => handleChangeFile(event)}
                    />
                </div>
                <div className="mt-3">
                    <button
                        onClick={() => handleSubmitQuiz()}
                        className="btn btn-warning">
                        Save
                    </button>
                </div>
            </fieldset>

            <div className="list-detail">
                <TableQuiz />
            </div>
        </div>
    );
};

export default ManageQuiz;
