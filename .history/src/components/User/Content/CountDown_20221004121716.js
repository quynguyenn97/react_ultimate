import { useState, useEffect } from "react";

const CountDown = () => {
    if (count === 0) return;
    const [count, setCount] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <div className="countdown-container">{count}</div>;
};
export default CountDown;
