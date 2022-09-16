import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import { useState } from "react";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();
    // console.log(location);
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        // console.log("check res, ", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answer = [];
                    let questionDescription,
                        image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answer.push(item.answers);
                    });
                    return {
                        questionId: key,
                        answer,
                        questionDescription,
                        image,
                    };
                })
                .value();
            // console.log("check data", data);
            setDataQuiz(data);
        }
    };
    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    };
    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
    };

    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(
            (item) => +item.questionId === +questionId
        );
        if (question && question.answer) {
            // console.log("q: ", question);
            let b = question.answer.map((item) => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            question.answer = b;
            // console.log(b);
        }
        let index = dataQuizClone.findIndex(
            (item) => +item.questionId === +questionId
        );
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    };
    const handleFinishQuiz = async () => {
        // {
        //     "quizId": 1,
        //     "answers": [
        //         {
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         {
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        console.log(">>> check data before submit", dataQuiz);
        let payload = {
            quizId: +quizId,
            answers: [],
        };
        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach((question) => {
                let questionId = question.questionId;
                let userAnswerId = [];

                question.answer.forEach((a) => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id);
                    }
                });
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId,
                });
            });
            payload.answers = answers;
            // console.log(">>> final payload", payload);
            // submit api
            let res = await postSubmitQuiz(payload);
            console.log(">>>check res", res);
            if (res && res.EC === 0) {
            } else {
                alert("something wrong");
            }
        }
    };
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <Question
                    index={index}
                    handleCheckbox={handleCheckbox}
                    data={
                        dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []
                    }
                />
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePrev()}>
                        Previous
                    </button>
                    <button
                        className="btn btn-primary "
                        onClick={() => handleNext()}>
                        Next
                    </button>
                    <button
                        className="btn btn-warning "
                        onClick={() => handleFinishQuiz()}>
                        Finish
                    </button>
                </div>
            </div>
            <div className="right-content">count down</div>
        </div>
    );
};
export default DetailQuiz;
