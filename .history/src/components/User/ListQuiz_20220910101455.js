import { useEffect } from "react";
import { useState } from "react";
import { getQuizByUser } from "../services/apiServices";
import "./ListQuiz.scss";

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);

    useEffect(() => {
        getQuizData();
    }, []);

    const getQuizData = async () => {
        const res = await getQuizByUser();
        console.log(res);
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    };
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
};
export default ListQuiz;
