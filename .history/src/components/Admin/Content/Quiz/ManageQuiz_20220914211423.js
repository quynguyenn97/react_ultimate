import "./ManageQuiz.scss";

const ManageQuiz = (props) => {
    return (
        <div classNameName="quiz-container">
            <div classNameName="title">Manage Quizzes</div>
            <hr />

            <fieldset classNameName="border rounded-3 p-3">
                <legend classNameName="float-none w-auto px-3">
                    Add new Quiz
                </legend>
                <div classNameName="add-new">
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
