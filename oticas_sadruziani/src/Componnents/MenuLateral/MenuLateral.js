import React from 'react';
import { FaBars } from "react-icons/fa6";
import styles from "../MenuLateral/MenuLateral.module.css"

function MenuLateral(){
    return (
        <div className={styles.MenuLateral}>
            <FaBars/>
        </div>
    )
}
export default MenuLateral