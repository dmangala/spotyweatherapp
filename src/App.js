
import Auth from './components/Auth';
import Header from './components/Header/Header';





function App() {
  /* <!-- 
  https://elfsight.com/spotify-widget/--> 
  https://www.pexels.com/api/
  */
  return (
    <div className=" bg-slate-900 h-full">
      <Header />
      <div className="container mx-auto text-white">
        <Auth />
      </div>
    </div>
  );
}

export default App;
