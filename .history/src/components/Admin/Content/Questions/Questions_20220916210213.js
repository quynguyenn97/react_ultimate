import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { TbHeartPlus } from "react-icons/tb";

const Questions = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});
    return (
        <div className="questions-container">
            <div className="title">Manage Questions</div>
            <div className="add-new-question">
                <div className="col-6 form-group">
                    <label>Select Quiz</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
            </div>
            <div className="mt-3">Add questions</div>
            <div className="questions-content">
                <div class="form-floating description">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="name@example.com"
                    />
                    <label>Description</label>
                </div>
                <div className="group-upload">
                    <label>Upload Image</label>
                    <input type={"file"} />
                </div>
                <div className="btn-add">
                    <span>
                        <TbHeartPlus />
                    </span>
                </div>
                <div className="answers">
                    <input type={"text"} />
                </div>
            </div>
        </div>
    );
};
export default Questions;
