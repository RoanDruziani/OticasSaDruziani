import React from 'react';
import styles from './Card.module.css'
import {BsArrowRight} from 'react-icons/bs'



function Card(){


    const data = [
        {id: '1', image: 'https://raw.githubusercontent.com/RoanDruziani/OticasSaDruziani/main/oticas_sadruziani/src/Imagens/Teste_Imagen-removebg-preview.png'},
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

                <button className={styles.button}>
                    <BsArrowRight/>
                </button>
            </div>
        </section>
    )

}

export default Card