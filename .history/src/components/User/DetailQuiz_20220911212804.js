import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../services/apiServices";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId);
        console.log("check res, ", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("color")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => ({ color: key, users: value }))
                .value();
            console.log(data);
        }
    };

    return <div className="detail-quiz-container">detail quiz</div>;
};
export default DetailQuiz;
