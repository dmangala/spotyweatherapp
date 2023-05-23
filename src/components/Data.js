import { useEffect, useState } from 'react';
import  axios   from 'axios';
import Card from './Card';
import Styles from '../index.css';


const Data = ({token}) => {

  const [dataFlux,setDataFlux] = useState([]);
  const [valueTemperature,setTemperature] = useState('');
  const [loading,setLoading] = useState(false);
  const [city,setCity] = useState('');
  const [imgCity,setImgCity] = useState('');
  const [pictoDeg,setPictoDeg] = useState('');

  /////////////////////////////
  useEffect( ()=> {
    const dataSpotify = async () => {
      /*************************************/
      //Récupération des tracks sur spotify
      setLoading(false);  
      await axios.get(`https://api.spotify.com/v1/search?q=${ valueTemperature }'&type=track`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
          }
        }
      ).then((res) => {
        //console.log(res);
        setDataFlux(res.data.tracks.items);
      })
    }
    /*************************************/
    //Récupération de la méteo
    const dataWeather = async () => {
      await axios.get(`http://api.weatherapi.com/v1/current.json?key=b9b7832c16ca4d9c915172725231005&q=${city}&aqi=no`,
      ).then((res) => {
        //console.log(res);
        setTemperature(res.data.current.temp_c);
        setPictoDeg(res.data.current.condition.icon);
      }).then(()=> {
        /*************************************/
        //Récupération de l'image de la ville
         axios.get(`https://api.unsplash.com/search/photos?client_id=cxGsUccenue9U9xAFPts8FHhGThgD2oMl_OpyNMKPKs&query=${city}`,
        ).then((res) => {
           setImgCity(res.data.results[0].links.download);
        })
      })
    }
    /*************************************/
    //user info
    const getUserLocation = async () => {
      //get Ip
      await axios.get("https://api.ipify.org/?format=json"
      ).then((res) =>{
          //get Info
          axios.get(`https://ipinfo.io/${res.data.ip}?token=7fc56b008c92f1`
          ).then((res)=> {
              setCity(res.data.ip);
          })
      })
    }

   /********************/
   getUserLocation();
   dataWeather();
   dataSpotify().then(() => {
    setLoading(true);
   });
  },[token,valueTemperature]);

  return (
    <>
      <div className="hero" style={{backgroundImage:`url(${imgCity})`}} > 
        <h2 className="flex justify-center"><span>{city}</span><span>| {valueTemperature}°</span><span><img src={pictoDeg} /></span></h2>
      </div>
      
      { loading ? ( 
       <div className='slick'> <Card data={dataFlux} token={token}/> </div>
      ) : ( 
        <div className='bg-red-50 h-100vh'>&nbsp;</div> 
      )}
    </>
  );

};

export default Data; 