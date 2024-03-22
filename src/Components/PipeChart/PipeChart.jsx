import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function PipeChartData({ chartData }) {
    const data = chartData.ratings.map(({ rating, count }) => ({ name: `Rating ${rating}`, value: count }));

    return (
        <div>
            
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PipeChartData;
