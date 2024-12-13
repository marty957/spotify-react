import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import AlbumCard from "./AlbumCard";

const MainSection = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <SideBar />
        <main className="col-12 col-md-10 offset-md-2 mainPage">
          <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                  <AlbumCard artist="queen" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                  <AlbumCard artist="katyperry" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                  <AlbumCard artist="eminem" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Row>
    </Container>
  );
};

export default MainSection;
