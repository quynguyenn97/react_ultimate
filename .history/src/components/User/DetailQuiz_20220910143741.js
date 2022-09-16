import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    useEffect(() => {}, [quizId]);
    const fetchQuestion = () => {};

    console.log(params);
    return <div className="detail-quiz-container">detail quiz</div>;
};
export default DetailQuiz;
