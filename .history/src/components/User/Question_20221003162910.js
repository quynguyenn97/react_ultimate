import _ from "lodash";
import "./DetailQuiz.scss";
import Lightbox from "react-awesome-lightbox";

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return <></>;
    }

    const handleHandleCheckbox = (event, aId, qId) => {
        // console.log("check", event.target.checked);
        // console.log(">>> data props", aId, qId);
        props.handleCheckbox(aId, qId);
    };
    return (
        <>
            <div className="q-content">
                {data.image ? (
                    <div className="q-image">
                        <img src={`data:image/jpeg;base64,${data.image}`} />
                        {isPreviewImage === true && (
                            <Lightbox
                                image={dataImagePreview.url}
                                title={dataImagePreview.title}
                                onClose={() =>
                                    setIsPreviewImage(false)
                                }></Lightbox>
                        )}
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
                                            checked={a.isSelected}
                                            onChange={(event) =>
                                                handleHandleCheckbox(
                                                    event,
                                                    a.id,
                                                    data.questionId
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
