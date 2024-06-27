import React, { useState } from "react";
import styles from "./Justlikethat.module.css";
import image1 from "../../assets/jlt1.png";
import image2 from "../../assets/jlt2.png";
import image3 from "../../assets/jlt3.png";
import image4 from "../../assets/jlt4.png";
 


const Justlikethat = () => {
  const [zoomOut, setZoomOut] = useState(null);

  const handleZoomOut = (index) => {
    setZoomOut(index);
    setTimeout(() => {
      setZoomOut(null);
    }, 500); // Duration of the zoom-out effect
  };

  return (
    <div className={`container ${styles.container}`} id="justlikethat">
      <h2 className={`text-center ${styles.heading}`}>
        Some fun facts about me
      </h2>
      <p className="text-center">
        <strong>
          When I'm not battling bugs and slinging code, you'll find me:
        </strong>
      </p>
      <ul className={`list-unstyled text-center ${styles.funFacts}`}>
        <li>
          🎨 Unleashing my inner Picasso with a splash of colour (and maybe some
          accidental spills)
        </li>
        <li>
          🍳 Creating culinary chaos in the kitchen, because why not try a
          5-layer cake on a whim?
        </li>
        <li>
          ✍️ Scribbling down my thoughts on the mystical realms of spirituality
          because sometimes my mind just wanders off into the cosmos
        </li>
        <li>
          🎨 Playing mad explorer with Midjourney and Photoshop, creating
          masterpieces or monstrosities, depending on the day. I also got an
          opportunity to illustrate my daughter's first published book :D
        </li>
        <li>
          🎥 Directing, shooting, and editing videos for my little ones' YouTube
          channel, and yes, I'm her biggest fan and toughest critic.
        </li>
      </ul>

      <figure
        className={`${styles.snip1577} ${zoomOut === 0 ? styles.zoomOut : ""}`}
        onClick={() => handleZoomOut(0)}
      >
        <img src={image1} alt="sample1" />
        <figcaption>
          <h3>Transcendence...</h3>
          <h4></h4>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure
        className={`${styles.snip1577} ${zoomOut === 1 ? styles.zoomOut : ""}`}
        onClick={() => handleZoomOut(1)}
      >
        <img src={image2} alt="sample2" />
        <figcaption>
          <h3>The Peek...</h3>
          <h4></h4>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure
        className={`${styles.snip1577} ${zoomOut === 2 ? styles.zoomOut : ""}`}
        onClick={() => handleZoomOut(2)}
      >
        <img src={image3} alt="sample3" />
        <figcaption>
          <h3>Waiting to Bloom....</h3>
          <h4></h4>
        </figcaption>
        <a href="#"></a>
      </figure>
      <figure
        className={`${styles.snip1577} ${zoomOut === 3 ? styles.zoomOut : ""}`}
        onClick={() => handleZoomOut(3)}
      >
        <img src={image4} alt="sample4" />
        <figcaption>
          <h3>Character Illustration</h3>
          <h4></h4>
        </figcaption>
        <a href="#"></a>
      </figure>

      <div className={`text-center ${styles.italicBold}`}>
        <p>
          So, if you're into artistic chaos, cosmic scribbles, or just want a
          good laugh, check out my Instagram page! You might even see some of my
          culinary disasters – I mean, masterpieces.(link below)
        </p>
        
      </div>
    </div>
  );
};

export default Justlikethat;
