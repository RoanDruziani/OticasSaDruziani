import React from 'react';
import styles from './Card.module.css'
import {BsArrowRight} from 'react-icons/bs'


function Card(){


    const data = [
        {id: '1', image: 'https://github.com/RoanDruziani/OticasSaDruziani/blob/main/oticas_sadruziani/src/Componnents/Oculos%20do%20Inicio.png?raw=true'},
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
                    html
                </div>
                <button className={styles.button}>
                    <BsArrowRight/>
                </button>
            </div>
        </section>
    )

}

export default Card