import { useEffect, useState } from "react";
import { Col, Image, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFav, addToThePlayer } from "../redux/action";
import { FaRegHeart } from "react-icons/fa";

const AlbumCard = (props) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fillMusic = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((dataObj) => {
        console.log(dataObj.data);
        setSongs(dataObj.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fillMusic();
  }, [props.artist]);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <>
      {songs.length > 0 &&
        songs.slice(0, 4).map((song) => (
          <Col key={song.album.id}>
            <Image src={song.album.cover_medium} className="img-fluid" onClick={() => dispatch(addToThePlayer(song))} />
            <p className="text-center">
              <FaRegHeart style={{ fontSize: "2rem" }} className="my-1" onClick={() => dispatch(addToFav(song))} /> <br />
              Track: {song.title}
              <br />
              Artist:{song.artist.name}
            </p>
          </Col>
        ))}
    </>
  );
};

export default AlbumCard;
