import _ from "lodash";
import "./DetailQuiz.scss";

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return <></>;
    }
    return (
        <>
            <div className="q-image">
                <img src={`data:image/jpeg;base64,${data.image}`} />
            </div>
            <div className="q-content">
                <div className="question">
                    Question {index + 1}: {data.questionDescription}
                </div>
                <div className="answer">
                    {data.answer &&
                        data.answer.length &&
                        data.answer.map((a, index) => {
                            return (
                                <div
                                    key={`answer-${index}`}
                                    className="a-child">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                        />
                                        <label class="form-check-label">
                                            {a.description}
                                        </label>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
export default Question;