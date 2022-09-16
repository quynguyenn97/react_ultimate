import _ from "lodash";

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
                    <div className="a">A.asdas</div>
                    <div className="a">B.asdas</div>
                    <div className="a">C.adasds</div>
                </div>
            </div>
        </>
    );
};
export default Question;
