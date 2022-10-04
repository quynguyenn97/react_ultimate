import { useState } from "react";

const CountDown = () => {
    const [count, setCount] = useState(10);
    return <div className="countdown-container">10:11</div>;
};
export default CountDown;
