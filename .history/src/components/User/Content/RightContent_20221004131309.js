import CountDown from "./CountDown";
const RightContent = (props) => {
    const { dataQuiz } = props;
    const onTimeUp = () => {
        props.handleFinishQuiz();
    };
    const getClassQuestion = (index, question) => {
        if (question && question.answers.length > 0) {
            let isAnswered = question.answers.find(
                (a) => a.isSelected === true
            );
            if (isAnswered) {
                return "question selected";
            }
        }
        return "question";
    };
    return (
        <>
            <div className="main-timer">
                <CountDown onTimeUp={onTimeUp} />
            </div>
            <div className="main-question">
                {dataQuiz &&
                    dataQuiz.length > 0 &&
                    dataQuiz.map((item, index) => {
                        return (
                            <div
                                key={`question-abc-${index}`}
                                className={getClassQuestion}>
                                {index + 1}
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
export default RightContent;
