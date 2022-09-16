import _ from "lodash";
import "./DetailQuiz.scss";

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return <></>;
    }

    const handleHandleCheckbox = (event, id) => {
        console.log("check", event.target.checked);
        console.log(data, id);
        // props.handleCheckbox
    };
    return (
        <>
            <div className="q-content">
                {data.image ? (
                    <div className="q-image">
                        <img src={`data:image/jpeg;base64,${data.image}`} />
                    </div>
                ) : (
                    <div className="q-image"></div>
                )}
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
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            onChange={(event) =>
                                                handleHandleCheckbox(
                                                    event,
                                                    `a${a.id}-q${data.questionId}`
                                                )
                                            }
                                        />
                                        <label className="form-check-label">
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
