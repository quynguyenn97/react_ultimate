import "./DashBoard.scss";
import {
    BarChart,
    Line,
    CartesianGrid,
    YAxis,
    XAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from "recharts";
const Dashboard = (props) => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 3900,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 3900,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 3900,
        },
    ];
    return (
        <div className="dashboard-container">
            <div className="title">Analytics Dashboard</div>
            <div className="content">
                <div className="c-left">
                    <div className="child">
                        <span className="text-1">Total users</span>
                        <span className="text-2">100</span>
                    </div>
                    <div className="child">
                        <span className="text-1">Total Quizzes</span>
                        <span className="text-2">69</span>
                    </div>
                    <div className="child">
                        <span className="text-1">Total Questions</span>
                        <span className="text-2">96</span>
                    </div>
                    <div className="child">
                        <span className="text-1">Total Answers</span>
                        <span className="text-2">100</span>
                    </div>
                </div>
                <div className="c-right">
                    <ResponsiveContainer width="95%" height={"95%"}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
