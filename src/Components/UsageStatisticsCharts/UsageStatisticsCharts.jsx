import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const UsageStatisticsCharts = ({ chartData }) => {

    console.log("CharDat :" , chartData);
    const platformData = Object.entries(chartData.by_platform).map(([platform, count]) => ({
        platform,
        count,
    }));

    const countryData = Object.entries(chartData.by_country).map(([country, count]) => ({
        country,
        count,
    }));

    // Colors for the pie chart slices
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF7373'];

    return (
        <div >
            <div>
                <h2>Distribution by Platform</h2>
                <BarChart width={500} height={300} data={platformData}>
                    <Bar dataKey="count" fill="#8884d8" />
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
            <div>
                <h2>Distribution by Country</h2>
                <PieChart width={400} height={300}>
                    <Pie
                        data={countryData}
                        dataKey="count"
                        nameKey="country"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={(entry) => `${entry.country} (${entry.count})`}
                    >
                        {countryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default UsageStatisticsCharts;
