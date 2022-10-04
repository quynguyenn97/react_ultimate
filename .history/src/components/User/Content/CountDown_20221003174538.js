import { useState, useEffect } from "react";

const CountDown = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        setCount(count - 1);
    }, []);
    return <div className="countdown-container">{count}</div>;
};
export default CountDown;
