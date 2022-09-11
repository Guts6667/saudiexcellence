import React from "react";

const BoxInvestor = ({datas}) => {  
return(
    datas &&(
            <img src={datas.picture} alt={datas.alt} />
        
    )
    
)
}

export default BoxInvestor;