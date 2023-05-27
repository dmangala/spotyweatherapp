import { useEffect, useState } from 'react';
import  axios   from 'axios';
import Card from './Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Styles from './Header.module.scss';


const Data = ({token}) => {

  const [dataFlux,setDataFlux] = useState([]);
  const [valueTemperature,setTemperature] = useState('');
  const [loading,setLoading] = useState(false);
  const [city,setCity] = useState('');
  const [imgCity,setImgCity] = useState('');
  const [pictoDeg,setPictoDeg] = useState('');
  const [visible,setVisible] = useState(false);

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
      await axios.get(`https://api.weatherapi.com/v1/current.json?key=b9b7832c16ca4d9c915172725231005&q=${city}&aqi=no`,
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
              setCity(res.data.city);
          })
      }).then(() => {
          dataWeather();
      }).then(() =>{
          dataSpotify().then(() => {
             setLoading(true);
          });
       });
    }

   /********************/
   getUserLocation();


   const timer = setTimeout(() => setVisible(true), 5000);
   return () => clearTimeout(timer);
   
  
  },[token,valueTemperature,city]);


  return (
    <>
      <div className={Styles.hero} style={{backgroundImage:`url(${imgCity})`}} > 
        <h2 className="flex justify-center"><span>{city}</span><span>| {valueTemperature}°</span><span><img src={pictoDeg} /></span></h2>
        <h1 className='text-white text-lg'> <span>Spoty</span>Weather App</h1>
      </div>
      { loading ? ( 
          visible ? ( 
           <div className='slick' > <Card data={dataFlux} token={token}/> </div>
          ): (
        
            <div className='slick ' > 
              <div className={Styles.search} ><span>Recherche de musiques</span> <span>pour ce temps </span><span><img src={pictoDeg} /></span> </div>
              <Box sx={{ display: 'flex', justifyContent : "center" }}>
              <CircularProgress />
              </Box>
            </div>
          )
      ) : ( 
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );

};

export default Data; 