import React from 'react';
import styles from '../Logo/Logo.module.css'

function Logo(props){

    return (
        <div className={styles[props.Title]}>
            <text >
                ÓTICAS
            </text>
            <div className={styles[props.SubTitle]}>
                <text>
                    sadruziani
                </text>
            </div>
        </div>
    )

}

export default Logo