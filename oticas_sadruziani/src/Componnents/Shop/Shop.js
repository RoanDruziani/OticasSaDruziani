import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import styles from "../Shop/Shop.module.css"



function Shop(){
    return (
        <div className={styles.Shop}>
            <FaShoppingCart />
        </div>
    )

}

export default Shop