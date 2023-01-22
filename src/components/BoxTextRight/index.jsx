import React from "react";
import './BoxTextRight.scss'

/**
 * BoxTextRight
 * @param {Array} datas 
 * @returns {JSX} React Component
 */
const BoxTextRight = (datas) =>{
const {text} = datas.datas;
    return(
        <p className="box-text box-text-right">
            {text}
        </p>
    )
}
export default BoxTextRight;