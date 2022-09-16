import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { TbHeartPlus } from "react-icons/tb";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const Questions = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [questions, setQuestions] = useState([
        {
            id: uuidv4(),
            description: "question 1",
            image: "",
            imageName: "",
            answers: [
                {
                    id: uuidv4(),
                    description: "answer 1",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 2",
                    isCorrect: false,
                },
            ],
        },
        {
            id: uuidv4(),
            description: "question 2",
            image: "",
            imageName: "",
            answers: [
                {
                    id: uuidv4(),
                    description: "answer 1",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 2",
                    isCorrect: false,
                },
            ],
        },
    ]);
    console.log(">>>check questions", questions);
    return (
        <div className="questions-container">
            <div className="title">Manage Questions</div>
            <hr />
            <div className="add-new-question">
                <div className="col-6 form-group">
                    <label className="mb-2">Select Quiz</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
            </div>
            <div className="mt-3 mb-2">Add questions</div>
            {questions &&
                questions.length > 0 &&
                questions.map((question, index) => {
                    return (
                        <div key={question.id} className="q-main mb-4">
                            <div className="questions-content">
                                <div className="form-floating description">
                                    <input
                                        type="type"
                                        className="form-control"
                                        placeholder="name@example.com"
                                        value={question.description}
                                    />
                                    <label>
                                        Question {index + 1} 's Description
                                    </label>
                                </div>
                                <div className="group-upload">
                                    <label>
                                        <RiImageAddFill className="label-upload" />
                                    </label>
                                    <input type={"file"} hidden />
                                    <span>0 file is upload</span>
                                </div>
                                <div className="btn-add">
                                    <span>
                                        <BsFillPatchPlusFill className="icon-add" />
                                    </span>
                                    <span>
                                        <BsFillPatchMinusFill className="icon-remove" />
                                    </span>
                                </div>
                            </div>
                            {question.answers &&
                                question.answers.length > 0 &&
                                question.answers.map((answer, index) => {
                                    return (
                                        <div
                                            key={answer.id}
                                            className="answers-content">
                                            <input
                                                className="form-check-input iscorrect"
                                                type="checkbox"
                                            />
                                            <div className="form-floating answer-name">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="name@example.com"
                                                />
                                                <label>Answers 1</label>
                                            </div>
                                            <div className="btn-group">
                                                <span>
                                                    <AiFillPlusSquare className="icon-add" />
                                                </span>
                                                <span>
                                                    <AiOutlineMinusCircle className="icon-remove" />
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
        </div>
    );
};
export default Questions;
