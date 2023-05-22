import { useEffect, useState } from 'react';
import  axios   from 'axios';
import qs from 'qs';
import Data from './Data';


const Auth = () => {

  const [token,setToken] = useState('');
    useEffect( ()=> {
       const getToken =  async () => {
            const clientId = "0df22ed104cd49039349271803c92385";
            const clientSecret = "83e2b26c5d664a719afdd8ba63fca9a1";
            
            const headers = {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              auth: {
                username: clientId,
                password: clientSecret,
              },
            };
            const data = {
              grant_type: 'client_credentials',
            };
          
            try {
              const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                qs.stringify(data),
                headers
              );
             // console.log(response.data.access_token);
              setToken(response.data.access_token);
              return response.data.access_token;
             
            } catch (error) {
             // console.log(error);
            }
          };
          getToken();
    },[]);


    return (
        <>
          <Data token={token} />
        </>
    );
};



export default Auth;