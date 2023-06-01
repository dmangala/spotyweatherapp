
import Auth from './components/Auth';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Callback from './components/Callback';



function App() {
  /* <!-- 
  https://elfsight.com/spotify-widget/--> 
  https://www.pexels.com/api/
  */

  
  return (
   <>
    <Header />
   
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="callback" element={<Callback />} />
      </Routes>

     </>
  );
}

export default App;
