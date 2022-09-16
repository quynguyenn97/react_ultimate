import "./ManageQuiz.scss";
const ManageQuiz = (props) => {
    return (
        <div className="quiz-container">
            <div className="title">Manage Quizzes</div>
            <div className="add-new">
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                </div>
            </div>
            <div className="list-detail">Manage Quizzes</div>
            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Personalia:</legend>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
                <br></br>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
                <br></br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br></br>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" />
                <br></br>
                <input type="submit" value="Submit" />
            </fieldset>
        </div>
    );
};

export default ManageQuiz;
