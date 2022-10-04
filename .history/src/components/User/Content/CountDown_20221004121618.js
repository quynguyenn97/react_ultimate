import { useState, useEffect } from "react";

const CountDown = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        clearInterval(timer);
    }, []);
    return <div className="countdown-container">{count}</div>;
};
export default CountDown;
