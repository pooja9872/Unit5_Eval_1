import React from "react";
import soor from "../Images/soo.jpg";
import styles from "../components/moviedetails.module.css";

function MovieDeails() {
  return (
    <div className={styles.backDetails}>
      <h1 className={styles.para}>Movie Details</h1>
      <img className={styles.picc} src={soor} alt="shmgf" />
      <p className={styles.para}>Action,Comedy ,Drama</p>
      <h3 className={styles.para}>Sooryavanshi</h3>
      <p className={styles.para}>
        About the movie Starting off from where Akshay Kumar`s character was
        introduced in Simmba, Sooryavanshi traces the acts and serious antics of
        DCP Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India.
      </p>
      <button className={styles.bookbtn}>Book Movie</button>
    </div>
  );
}

export default MovieDeails;
