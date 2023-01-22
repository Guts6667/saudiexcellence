import React from "react";
import './BoxTextLeft.scss'
/**
 * BoxTextLeft
 * @param {Array} datas 
 * @returns {JSX} React Component
 */
const BoxTextLeft = (datas) =>{
const {text} = datas.datas;
    return(
        <p className="box-text box-text-left">
            {text}
        </p>
    )
}
export default BoxTextLeft;