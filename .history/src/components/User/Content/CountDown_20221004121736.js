import { useState, useEffect } from "react";

const CountDown = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) return;
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
