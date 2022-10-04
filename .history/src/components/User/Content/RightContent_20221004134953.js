import CountDown from "./CountDown";
const RightContent = (props) => {
    const { dataQuiz } = props;
    const onTimeUp = () => {
        props.handleFinishQuiz();
    };
    const getClassQuestion = (index, question) => {
        if (question && question.answer.length > 0) {
            let isAnswered = question.answer.find((a) => a.isSelected === true);
            if (isAnswered) {
                return "question selected";
            }
        }
        return "question";
    };

    const handleClickQuestion = (index, item) => {
        props.setIndex(index);
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
                                onClick={() => handleClickQuestion(index, item)}
                                className={getClassQuestion(index, item)}>
                                {index + 1}
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
export default RightContent;
