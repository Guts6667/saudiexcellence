import React from "react";

const BoxInvestor = ({datas}) => {  
    console.log(datas);
return(
    datas &&(
            <img src={datas.picture} alt={datas.alt} />
        
    )
    
)
}

export default BoxInvestor;