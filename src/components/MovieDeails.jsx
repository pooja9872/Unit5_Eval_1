import React from "react";
import soor from "../Images/soo.jpg";
import styles from "../components/moviedetails.module.css";
import SelectOption from "./SelectOption";
import { Link } from "react-router-dom";

function MovieDeails() {
  function save() {
    var data = [
      {
        image:
          "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-cfgddhrhsg-portrait.jpg",
        name: "Antim",
      },
    ];

    // alert("Your Movie is succesfully Booked");
    localStorage.setItem("data", JSON.stringify(data));
  }

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
      <SelectOption />
      <Link to="/dashboard">
        <button onClick={save} className={styles.bookbtn}>
          Book Movie
        </button>
      </Link>
    </div>
  );
}

export default MovieDeails;
