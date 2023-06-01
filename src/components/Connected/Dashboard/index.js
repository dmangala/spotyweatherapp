import './Dashboard.scss';
import Header from '../Header';
const Dashboard = () => {



  return (
    <>
      <Header />
      <div className='content'>
        <div className='content__left'>content__left</div>
        <div className='content__middle'>content__middle</div>
        <div className='content__right'>content__right</div>
      </div>
    </>
  )
}

export default Dashboard;