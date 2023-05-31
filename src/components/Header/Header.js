import { useState } from 'react';
import Styles from './Header.module.scss';
import Cookies from 'js-cookie';


const Header = () => {
  
  const clientId = "658d1a18ef2f4c0295694b0a5c4af98d";
  const redirect_uri = 'http://localhost:3000/callback';
  const auth= "https://accounts.spotify.com/authorize";
  const scope = 'user-read-private,user-read-email';
  const responseType = 'token';

  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

  return (
    <>
        {
          token ? (
            <>ss</>
          ): (
            <div className={Styles.header}>         
            <h1 className='text-white text-lg'> <span>Spoty</span>Weather App</h1>
            <a href={`${auth}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=${responseType}&show_dialog=false`}> <button className=''>Se connecter</button></a>
            </div>
          )
        }
      </>
  )
}

export default Header;