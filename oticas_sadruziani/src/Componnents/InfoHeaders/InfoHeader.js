import React from 'react';
import styles from '../InfoHeaders/InfoHeader.module.css'

function InfoHeader(props){
    return (
        <div className={styles.SubTitle_Hearder}>
            <text className='InfoText'>
                {props.text}
            </text>
        </div>
    )

}

export default InfoHeader