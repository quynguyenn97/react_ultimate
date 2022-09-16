import "./ManageQuiz.scss";
import Select from "react-select";

const ManageQuiz = (props) => {
    const options = [
        { value: "EASY", label: "EASY" },
        { value: "MEDIUM", label: "MEDIUM" },
        { value: "HARD", label: "HARD" },
    ];
    return (
        <div className="quiz-container">
            <div className="title">Manage Quizzes</div>
            <hr />

            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="you quiz name"
                    />
                    <label>Name</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="description.."
                    />
                    <label>Description</label>
                </div>
                <div className="my-3">
                    <Select
                        // value={selectedOption}
                        // onChange={this.handleChange}
                        options={options}
                        placeholder="Quiz type"
                    />
                </div>
                <div className="more-actions form-group">
                    <label className="">Upload Image</label>
                    <input type="file" className="form-control" />
                </div>
            </fieldset>

            <div className="list-detail">table</div>
        </div>
    );
};

export default ManageQuiz;
