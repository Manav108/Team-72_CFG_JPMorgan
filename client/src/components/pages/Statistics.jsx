import React from 'react';
import DataStatistics from './DataStatistics';
import "../styles/StatisticsStyles.css"
import Layout from "../Layout/Layout"

const Statistics = () => {
  return (
    <Layout>
      <h1 className='container'>Donation Statistics</h1>
      <DataStatistics />
    </Layout>
  );
};

export default Statistics;