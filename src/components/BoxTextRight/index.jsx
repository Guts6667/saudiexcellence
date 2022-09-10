import React from "react";
import './BoxTextRight.scss'

const BoxTextRight = (datas) =>{
const {text} = datas.datas;
    return(
        <p className="box-text box-text-right">
            {text}
        </p>
    )
}
export default BoxTextRight;