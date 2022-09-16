import "./ManageQuiz.scss";

const ManageQuiz = (props) => {
    return (
        <div className="quiz-container">
            <div className="title">Manage Quizzes</div>
            <hr />

            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>
                <div className="add-new">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="you quiz name"
                        />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="you quiz name"
                        />
                        <label for="floatingPassword">Description</label>
                    </div>
                </div>
            </fieldset>

            <div className="list-detail">Manage Quizzes</div>
        </div>
    );
};

export default ManageQuiz;
