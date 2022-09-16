import { useParams } from "react-router-dom";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    console.log(params);
    return <div className="detail-quiz-container">detail quiz</div>;
};
export default DetailQuiz;
