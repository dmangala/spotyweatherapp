import React from 'react';
import Dashstyle from './Dashboard.scss';

/*https://codepen.io/alowenthal/full/rxboRv/*/

const Dashboard = () => {
  return (
    <>
      <section className={Dashstyle.header}>

        <div className='page-flows'>

          <span className={Dashstyle.flow}>
            <i className="ion-chevron-left"></i>
          </span>
          
          <span className="flow">
            <i className="ion-chevron-right disabled"></i>
          </span>
          
        </div>


        <div className="user">

          <div className="user__notifications">
          
            <i className="ion-android-notifications"></i>
            
          </div>
          
          <div className="user__inbox">
          
            <i className="ion-archive"></i>
            
          </div>
          
          <div className="user__info">
          
            <span className="user__info__img">
            
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg" alt="Profile Picture" class="img-responsive" />
              
            </span>
            
            <span className="user__info__name">
            
              <span className="first">Adam</span>
              
              <span className="last">Lowenthal</span>
              
            </span>
            
          </div>
          
          <div className="user__actions">
          
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i className="ion-chevron-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
        
                <li><a href="#">Log Out</a></li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Dashboard;