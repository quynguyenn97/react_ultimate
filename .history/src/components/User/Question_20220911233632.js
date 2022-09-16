import _ from "lodash";

const Question = (props) => {
    const { data } = props;
    if (_.isEmpty(data)) {
        return <></>;
    }
    return (
        <>
            <div className="q-content">
                <div className="question">Question 1: how are you doing</div>
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
