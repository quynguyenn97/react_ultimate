import CountDown from "./CountDown";
const RightContent = (props) => {
    const { dataQuiz } = props;
    console.log(">>check dataQuiz", dataQuiz);
    return (
        <>
            <div className="main-timer">10:10</div>
            <div className="main-question">
                {dataQuiz &&
                    dataQuiz.length > 0 &&
                    dataQuiz.map((item, index) => {
                        return <div className="question">{index + 1}</div>;
                    })}
            </div>
            <CountDown />
        </>
    );
};
export default RightContent;
