import Styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={Styles.header}>         
        <h1 className='text-white text-lg'> <span>Spoty</span>Weather App</h1>
        <button className=''>Se connecter</button>
      </div>
    </>
  )
}

export default Header;