import "./styles.css";
import React, { useState } from "react";
import Cycling from "./assets/image 1.jpg";
import Bird from "./assets/image 2.jpg";
import Camera from "./assets/image 3.jpg";
import Face from "./assets/image 4.jpg";
import Smallbird from "./assets/image 5.jpg";
import Coffeecup from "./assets/image 6.jpg";

const images = [Cycling, Bird, Camera, Face, Smallbird, Coffeecup];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">
        Loading all your favourite images...
      </label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>
          Click <br /> To Change <br /> Image
        </h1>
        <h2>
          A Photography project <br /> by Gnesys Academy
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            // style={{opacity: currentImage === index ? 1 : 0 }}
            className={currentImage == index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
