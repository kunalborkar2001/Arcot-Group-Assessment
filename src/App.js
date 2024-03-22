import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChartData, selectChartData, selectChartDataStatus, selectChartDataError } from './Store/slices/chartData/index.ts';
import BarChartData from './Components/BarChart/BarChart.jsx';
import LineChartData from './Components/LineChart/LineChart.jsx';
import PipeChartData from './Components/PipeChart/PipeChart.jsx'
import UsageStatisticsCharts from './Components/UsageStatisticsCharts/UsageStatisticsCharts.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
// import { RootState, AppDispatch } from './Store/store.ts';

function App() {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => selectChartData(state));
  const status = useSelector((state) => selectChartDataStatus(state));
  const error = useSelector((state) => selectChartDataError(state));

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-2'>
          <div className='w-full'>
            <h1 className='text-[3rem] text-center'>User Satisfaction</h1>
            <PipeChartData chartData={chartData.user_satisfaction} />
          </div>

          <div className='border'>
            <h1 className='text-[3rem] text-center'>Category Distribution</h1>
            <BarChartData chartData={chartData.category_distribution} />
          </div>

          <div className='border '>
            <h1 className='text-[3rem] text-center'>Response Times</h1>
            <LineChartData chartData={chartData.response_times} />
          </div>


          <div className='border mt-[500px] md:mt-0'>
            <h1 className='text-[3rem] text-center'>Usage Statistics</h1>
            <UsageStatisticsCharts chartData={chartData.usage_statistics} />
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
