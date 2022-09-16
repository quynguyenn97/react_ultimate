import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";

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
            <div className="mt-3 row">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="name@example.com"
                    />
                    <label>Description</label>
                </div>
            </div>
        </div>
    );
};
export default Questions;
