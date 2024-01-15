import React from 'react';
import styles from './Card.module.css'
import {BsArrowRight} from 'react-icons/bs'
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";


function Card(){


    const data = [
        {id: '1', image: 'https://pt.pngtree.com/freepng/glasses-frames_211737.html'},
    ]



    return (
        <section className={styles.card}>
            <h3>Titulo do projeto</h3>
            {data.map( (item)=> (
                        <img
                            src={item.image}
                            alt="Teste"
                            className={styles.card_produto}
                        />
                ))}
            <p>Texto descritivo do projeto</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaInstagram color={styles.card_icones} />
                    <FaWhatsapp color={styles.card_icones} />
                </div>
                <button className={styles.button}>
                    <BsArrowRight/>
                </button>
            </div>
        </section>
    )

}

export default Card