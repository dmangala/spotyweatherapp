import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import Carousel from "./carousel/Carousel3d";
import Player from "./Player";



function Card({ data,token }) {
  
  const [show, setShown] = useState(false);
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  const [idAlbum, setIdAlbum] = useState('');
  //Au click sur le btn écouter
  const handleListen = (e) => {
    let idBtn = e.target.id;
    setIdAlbum(idBtn);
  }

  //
  let cards = [];

  //Map les donnees spotify

  data.map((item,index) => 
  {
    const imgUrl = item.album.images[0].url;
    //const nameAlbum = item.name;
    const artists= item.artists[0].name;
    const previewPlayer= item.preview_url;
    //const releaseDate= item.album.release_date;
    const albumId = item.album.id;

    //Contenu du carousel
    const contentCarousel = {
      key: uuidv4(),
      content: (
        <animated.div
          className={Styles.card}
          style={props3}
          onMouseEnter={() => setShown(true)}
          onMouseLeave={() => setShown(false)}
        >
          <img src={imgUrl} alt="" />
          <h2 className="text-lg  font-bold ">{artists} </h2>
          <p>
          <audio controls>
            <source src={previewPlayer} type="audio/ogg" />
            <source src={previewPlayer} type="audio/mpeg" />
          </audio>
          <button className={Styles.button} onClick={handleListen} id={albumId}>Ecouter l'album</button>
          </p>
        </animated.div>
      )
    }
    //ajout du contenu
  
    return ( 
       cards.push(contentCarousel)
     )
  }
);


  return (
    <> 
    <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      { 
       (idAlbum !== "") ? <Player idAlbum={idAlbum} /> : ""
      }
    </>
  );
}



export default Card;