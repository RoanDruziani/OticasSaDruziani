import { useState, React} from 'react';
import styles from '../Carrossel/Carrosel.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'


function Carrossel(){

    const [slidePreview, setSlidePreview] = useState(1)

    const data = [
        {id: '1', image: 'https://raw.githubusercontent.com/RoanDruziani/OticasSaDruziani/main/oticas_sadruziani/src/Imagens/Oculos%20do%20Inicio.png'},
        {id: '2', image: 'https://raw.githubusercontent.com/RoanDruziani/OticasSaDruziani/main/oticas_sadruziani/src/Imagens/Oculos%20do%20Inicio.png'},
        {id: '3', image: 'https://raw.githubusercontent.com/RoanDruziani/OticasSaDruziani/main/oticas_sadruziani/src/Imagens/Oculos%20do%20Inicio.png'}
    ]

    return (
        <div className={styles.Carrossel}>
            <Swiper
                className={styles.CarrosselSlider}
                containerModifierClass={styles.CarrosselSlider}
                id='CarrosselSlider'
                slidesPerView={slidePreview}
                pagination={{clickable: true}}
                navigation
            >
                {data.map( (item)=> (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className={styles.slide_item}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default Carrossel