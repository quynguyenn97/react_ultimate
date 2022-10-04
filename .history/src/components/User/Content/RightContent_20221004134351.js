import CountDown from "./CountDown";
const RightContent = (props) => {
    const { dataQuiz } = props;
    const onTimeUp = () => {
        props.handleFinishQuiz();
    };
    const getClassQuestion = (index, question) => {
        console.log(index, question);
        if (question && question.answer.length > 0) {
            let isAnswered = question.answer.find((a) => a.isSelected === true);
            console.log(isAnswered);
            if (isAnswered) {
                return "question selected";
            }
        }
        return "question abc";
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
                                onClick={()=props.setIndex(index)}
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
