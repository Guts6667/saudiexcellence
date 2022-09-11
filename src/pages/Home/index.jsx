import React from "react";
import SectionHome from "../../components/SectionHome";
import SectionAbout from "../../components/SectionAbout";
import SectionVision from "../../components/SectionVision";
import SectionMission from "../../components/SectionMission";
import SectionTeam from "../../components/SectionTeam";
import SectionCoreTeam from "../../components/SectionCoreTeam";
import SectionAdvisor from "../../components/SectionAdvisor";
import SectionInvestors from "../../components/SectionInvestors";
const Home = () => {

    return(
        <div  >
            <SectionHome />    
            <SectionAbout />
            <SectionVision />
            <SectionMission />
            <SectionTeam />
            <SectionCoreTeam />
            <SectionAdvisor />
            <SectionInvestors />
        </div>
    )
}

export default Home;