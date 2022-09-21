import Select from "react-select";
import { useState, useEffect } from "react";
import { getAllQuizForAdmin } from "../../../services/apiServices";
const AssignQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState({});

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            let newQuiz = res.DT.map((item) => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.description}`,
                };
            });
            setListQuiz(newQuiz);
        }
    };
    return (
        <div className="assign-quiz-container">
            <div className="col-6 form-group">
                <label className="mb-2">Select Quiz</label>
                <Select
                    defaultValue={selectedQuiz}
                    onChange={setSelectedQuiz}
                    options={listQuiz}
                />
            </div>
        </div>
    );
};
export default AssignQuiz;
