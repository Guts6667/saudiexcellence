import React from "react";
import './SectionAdvisor.scss';

/**
 * SectionAdvisor
 * @returns {JSX} React Component
 */
const SectionAdvisor = () => {

    const datas = [
        {
            role : "Blockchain advisor",
            picture : "/assets/placeholder1.png"
        },
        {
            role : "Gaming advisor",
            picture : "/assets/placeholder2.png"
        },
        {
            role : "AI advisor",
            picture : "/assets/placeholder3.png"
        },
        {
            role : "Data Science Advisor",
            picture : "/assets/placeholder4.png"
        },
    ]
    return(
        <section className="container__advisor">
            <div className="container__advisor-title">
                <h3>Advisors.</h3>
            </div>
            <div className="container__advisor-box">
            {datas.map(data => 
                <div className="advisor-box" key={`${data.role}-${datas.indexOf(data)}`}>
                    <img src={data.picture} alt= {data.role} />
                        <span>{data.role}</span>
                    </div>
                    )}
            </div>
                
        </section>
    )
}
export default SectionAdvisor;