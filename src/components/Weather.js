import {useEffect, React, useState } from 'react';
import axios from 'axios';

const Temperature = () => {
  const [valueTemperature,setTemperature] = useState('');
  //
  useEffect( ()=> {
    const dataWeather = async () => {
       await axios.get('http://api.weatherapi.com/v1/current.json?key=b9b7832c16ca4d9c915172725231005&q=douala&aqi=no',
       ).then((res) => {
         // console.log(res);
         setTemperature(res.data.current.temp_c);
       })
    }
    //
    dataWeather();
},[valueTemperature]);

  return (
    <>
      {valueTemperature}
    </>
  )
}

export  {Temperature };