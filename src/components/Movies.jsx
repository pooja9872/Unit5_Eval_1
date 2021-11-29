import React from "react";
import movie1 from "../Images/movie.jpg";
import movie2 from "../Images/movie1.jpg";
import movie3 from "../Images/movie2.jpg";
import movie4 from "../Images/movie3.jpg";
import styles from "../components/movie.module.css";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <div className={styles.movieContainer}>
      <Link to="moviedetails">
        <div>
          <img className={styles.movie_image} src={movie1} alt="moviepic" />
          <h3>The Sooryanshi</h3>
        </div>
        <div>
          <img className={styles.movie_image} src={movie2} alt="moviepic1" />
          <h3>Antim:The Final Truth</h3>
        </div>
        <div>
          <img className={styles.movie_image} src={movie3} alt="moviepic2" />
          <h3>Satya May Jayethe</h3>
        </div>
        <div>
          <img className={styles.movie_image} src={movie4} alt="moviepic3" />
          <h3>Enchanto</h3>
        </div>
      </Link>
    </div>
  );
}

export default Movies;
