import React from "react";

/**
 * Box Investor
 * @param {Array} datas 
 * @returns {JSX} React Component
 */
const BoxInvestor = ({datas}) => {  
return(
    datas &&(
        <div className="box-investor">
            <img src={datas.picture} alt={datas.alt} />
            <span>{datas.alt}</span>
        </div>
            
            
    )
    
)
}

export default BoxInvestor;