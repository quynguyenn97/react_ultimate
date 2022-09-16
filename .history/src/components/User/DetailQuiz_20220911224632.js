import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";

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
            console.log(data);
        }
    };

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">{location?.state?.quizTitle}</div>
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">questinon content</div>
            </div>
            <div className="right-content">count down</div>
        </div>
    );
};
export default DetailQuiz;