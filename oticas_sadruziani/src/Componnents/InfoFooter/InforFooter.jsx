import React from "react";
import styles from "../InfoFooter/InforFooter.module.css"

function InfoFooter(props){

    return(
        <section className={styles.Footer}>
            <h3>{props.Title}</h3>
            <p>{props.Descript}</p>
        </section>
    )

}

export default InfoFooter