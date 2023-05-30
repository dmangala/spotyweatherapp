import Styles from "../Card/Card.module.css";

const Player = ({idAlbum}) => {
  const url='https://open.spotify.com/embed/album/'+idAlbum;
  console.log();
  return (
    <>
      <iframe className={Styles.iframe}  title=" Sound" src={url} loading="lazy" width="100%" height={500}/>
    </>
  )
}

export default Player;