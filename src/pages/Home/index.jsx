import React from "react";
import SectionHome from "../../components/SectionHome";
import SectionAbout from "../../components/SectionAbout";
import SectionVision from "../../components/SectionVision";
import SectionMission from "../../components/SectionMission";
import SectionTeam from "../../components/SectionTeam";
import SectionCoreTeam from "../../components/SectionCoreTeam";
import SectionAdvisor from "../../components/SectionAdvisor";
import SectionInvestors from "../../components/SectionInvestors";
import SectionRookies from "../../components/SectionRookies";
import SectionContact from "../../components/SectionContact";

/**
 * Home
 * @returns {JSX} React Component
 */
const Home = () => {

    return(
        <div  >
            <SectionHome />    
            <SectionAbout />
            <SectionVision />
            <SectionTeam />
            <SectionCoreTeam />
            <SectionAdvisor />
            <SectionInvestors />
            <SectionMission />
            <SectionRookies />
            <SectionContact />
        </div>
    )
}

export default Home;