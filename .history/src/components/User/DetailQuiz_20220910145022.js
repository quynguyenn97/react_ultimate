import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../services/apiServices";

const DetailQuiz = (props) => {
    const params = useParams();
    console.log(params);
    const quizId = params.id;
    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log(res);
    };

    return <div className="detail-quiz-container">detail quiz</div>;
};
export default DetailQuiz;