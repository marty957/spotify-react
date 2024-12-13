import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const songplays = useSelector((state) => state.currentSong);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <Image src={songplays.cover_small} width={30} />
                <a href="#">
                  <Image src="../src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <Image src="../src/assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <Image src="../src/assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <Image src="../src/assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <Image src="../src/assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar">
                  <p>{songplays.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
