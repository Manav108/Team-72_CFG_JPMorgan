import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DataStatistics = () => {
  const chartContainerRef = useRef(null);
  const isChartRenderedRef = useRef(false);

  useEffect(() => {
    if (!isChartRenderedRef.current) {
      const barChartData = [
        { year: '2019', amount: 50000 },
        { year: '2020', amount: 75000 },
        { year: '2021', amount: 100000 },
        { year: '2022', amount: 90000 },
        { year: '2023(31rd June)', amount: 45000 }
      ];

      const pieChartData = [
        { category: 'Individuals', amount: 60000 },
        { category: 'Corporations', amount: 40000 },
        { category: 'Government', amount: 20000 },
        { category: 'Foundations', amount: 30000 }
      ];

      const renderCharts = () => {
        const barChartOptions = {
          chart: {
            type: 'bar',
            id: 'barChart'
          },
          series: [{
            name: 'Donations',
            data: barChartData.map(item => item.amount)
          }],
          xaxis: {
            categories: barChartData.map(item => item.year)
          }
        };

        const barChart = new ApexCharts(chartContainerRef.current.querySelector('#barChart'), barChartOptions);
        barChart.render();

        const pieChartOptions = {
          chart: {
            type: 'pie',
            id: 'pieChart'
          },
          series: pieChartData.map(item => item.amount),
          labels: pieChartData.map(item => item.category),
          colors: ['#6acaca', '#ffb822', '#e91e63', '#9c27b0']
        };

        const pieChart = new ApexCharts(chartContainerRef.current.querySelector('#pieChart'), pieChartOptions);
        pieChart.render();
      };

      renderCharts();
      isChartRenderedRef.current = true;
    }
  }, []);

  return (
    <div ref={chartContainerRef} className='container'>
      <div id="barChart" className='chart-container' />
      <div id="pieChart" className='chart-container'/>
    </div>
  );
};

export default DataStatistics;