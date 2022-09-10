import React from "react";
import './BoxTextLeft.scss'

const BoxTextLeft = (datas) =>{
const {text} = datas.datas;
    return(
        <p className="box-text box-text-left">
            {text}
        </p>
    )
}
export default BoxTextLeft;