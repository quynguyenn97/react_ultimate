import { useEffect } from "react";
import { useState } from "react";
import { getQuizByUser } from "../services/apiServices";

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);

    useEffect(() => {
        getQuizData();
    }, []);

    const getQuizData = async () => {
        const res = await getQuizByUser();
        console.log(res);
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    };
    return (
        <div className="list-quiz-container">
            {arrQuiz &&
                arrQuiz.lenght > 0 &&
                arrQuiz.map((quiz, index) => {
                    return (
                        <div
                            key={`${index}-quiz`}
                            className="card"
                            style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src="..."
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button href="#" className="btn btn-primary">
                                    Start Now
                                </butt>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
export default ListQuiz;
