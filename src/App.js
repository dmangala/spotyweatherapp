
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
    <div className="container mx-auto text-white">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="callback" element={<Callback />} />
      </Routes>
     </div>
     </>
  );
}

export default App;
