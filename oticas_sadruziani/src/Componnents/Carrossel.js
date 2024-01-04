import '../App.css';
import { useState, React} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'


function Carrossel(){

    const [slidePreview, setSlidePreview] = useState(1)

    const data = [
        {id: '1', image: 'https://github.com/RoanDruziani/OticasSaDruziani/blob/main/oticas_sadruziani/src/Componnents/Oculos%20do%20Inicio.png?raw=true'},
        {id: '2', image: 'https://github.com/RoanDruziani/OticasSaDruziani/blob/main/oticas_sadruziani/src/Componnents/Oculos%20do%20Inicio.png?raw=true'},
        {id: '3', image: 'https://github.com/RoanDruziani/OticasSaDruziani/blob/main/oticas_sadruziani/src/Componnents/Oculos%20do%20Inicio.png?raw=true'}
    ]

    return (
        <div className="Carrossel">
            <Swiper
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
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default Carrossel