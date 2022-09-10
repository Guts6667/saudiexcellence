import React from "react";
import SectionHome from "../../components/SectionHome";
import SectionAbout from "../../components/SectionAbout";
import SectionVision from "../../components/SectionVision";
import SectionMission from "../../components/SectionMission";
const Home = () => {

    return(
        <div  >
            <SectionHome />    
            <SectionAbout />
            <SectionVision />
            <SectionMission />
        </div>
    )
}

export default Home;