import React from "react";
import BoxTextLeft from "../BoxTextLeft";
import BoxTextRight from "../BoxTextRight";
import './SectionMission.scss'

const SectionMission = () => {
    const texts = [
        {
            text : 'Bringing young talents from 0 to 1 is one of the hardest things a person can do Partnering with a AAA supported funds to launch your company is a force multiplier.',
        },
        {
            text : "Saudi Excellence and Saudi Data Ai Authority aware startups supported with a strong infrasture have a 30% higher success rate in quality and quantification of KPI. They also grow bigger faster: almost every backbones company launched receives seed funding and 72% of those will receive Series A funding.",
        },
        {
            text : "SDAIA and Saudi Excellence has lower barriers to entry, financial support, and higher levels of operational involvement to springboard great companies. We offer a streamlined company-building process, including operational excellence so founders can focus on product/market fit."
        },
        {
            text : "And it’s not just back office support, it’s connections and introductions to quickly grow their business. Founders can build their companies within the nurturing space of an AI ecosystem that spans industries. Furthermore, our tech team is available to advise and assist with your AI/ML needs so you can quickly develop your product and take it to market. "
        }
    ];
    

    return(
        <section className="container__mission" id="mission">
            <div className="container__mission-title">
                <span className="line"></span>
                <h2>Our Mission.</h2>
             </div>
            <BoxTextLeft datas = {texts[0]} /> 
            <BoxTextRight datas = {texts[1]}/>
            <BoxTextLeft datas = {texts[2]} />
            <BoxTextRight datas = {texts[3]} />
            <div className="container__mission-subtitle">
                <h3>
                We want to see you win.<br/>
                <strong>Let’s win together.</strong>
                </h3>
            </div>
        </section>
    )
}

export default SectionMission;