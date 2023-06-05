import './Dashboard.scss';
import Header from '../Header';
import { useEffect } from 'react';
import Navigation from '../Navigation';

const Dashboard = () => {

  return (
    <>
      <Header />
      <div className='content'>
        <div className='content__left'><Navigation /></div>
        <div className='content__middle'>content__middle</div>
        <div className='content__right'>content__right</div>
      </div>
    </>
  )
}

export default Dashboard;