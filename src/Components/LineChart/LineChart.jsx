import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

function LineChartData({ chartData }) {
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <h1>Daywise</h1>
                <LineChart data={chartData.day_wise} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="average_time" name="Day Wise" stroke="#8884d8" />
                </LineChart>

                <h1>Weekwise</h1>
                <LineChart data={chartData.week_wise} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="average_time" name="Week Wise" stroke="#82ca9d" />
                </LineChart>

            </ResponsiveContainer>
        </div>
    );
}

export default LineChartData;
