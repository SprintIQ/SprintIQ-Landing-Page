import WhyNowWhoWeAreFor from "./WhyNowWhoWeAreFor"
import { RiArrowRightUpLine, RiCloseCircleLine, RiGlobalLine, RiLinkedinBoxFill } from "@remixicon/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterXFill } from "@remixicon/react"


const About = () => {
  return (
    <>
    <div className="px-10 lg:px-20 py-10 lg:py-5 gradient">
        <div className="mt-20">
            <h2 className="text-center text-8xl lg:text-[250px] font-bold text-[#1DAA4554]">
                About
            </h2>
            <div className="w-full flex justify-center">
                <h3 className="text-gradient lg:text-left flex justify-center text-xl text-center lg:text-6xl font-bold lg:max-w-[850px] max-w-[300px]">
                    Incentivised Quiz Dapp for Community, Events, e.t.c
                </h3>
            </div>
            <div className="lg:max-w-[850px] text-center lg:text-left text-lg mx-auto mt-10 flex flex-col gap-5">
                <p>A web3 educational gaming platform with features that solidify knowledge in the blockchain through quiz test accompanied by rewards.</p>
                <p>Rewards are earned in crypto and its value will be decided by the game creator.</p>
            </div>
        </div>
        
        <div className="mt-20">
            <WhyNowWhoWeAreFor/>
        </div>

        <div className="mt-32 max-w-[800px]">
            <h2 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-gradient">Transforming Community Engagement & Participation in the Web3 Through Cutting Edge Solutions</h2>
        </div>

        <div className="mt-20 hidden lg:block max-w-[850px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-5 items-end">
                <div className="max-w-[250px]">
                    Automated incentivized feature
                </div>
                <div className="max-w-[300px]">
                Intuitive design, tailored to ensure game creators and players navigate easily on the platform.
                </div>
                <div className="max-w-[300px]">
                Quiz templates dedicated for Web3 personal assesment
                </div>
            </div>
            <div className="h-[3px] w-full bg-gradient-to-r from-[#03350B] via-[#28FF15] to-[#025E1D] flex justify-between items-center mt-5">
                <div className="w-full flex justify-center">
                    <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                        1
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                        2
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                        3
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20 lg:hidden flex flex-col gap-y-10">
            <div>
                <div className="text-center">
                    Automated incentivized feature
                </div>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#03350B] via-[#28FF15] to-[#025E1D] flex justify-between items-center mt-5">
                    <div className="w-full flex justify-center">
                        <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                            1
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center">
                Quiz templates dedicated for Web3 personal assesment
                </div>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#03350B] via-[#28FF15] to-[#025E1D] flex justify-between items-center mt-5">
                    <div className="w-full flex justify-center">
                        <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                            2
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center">
                    Intuitive design, tailored to ensure game creators and players navigate easily on the platform.
                </div>
                <div className="h-[3px] w-full bg-gradient-to-r from-[#03350B] via-[#28FF15] to-[#025E1D] flex justify-between items-center mt-5">
                    <div className="w-full flex justify-center">
                        <div className="radial-gradient-2 w-[35px] h-[35px] rounded-full flex justify-center items-center text-lg">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* TEAM */}

   <div className="mt-24">
        <div>
        <h2 className="text-center text-8xl lg:text-[250px] font-bold text-[#1DAA4554] " >
            Team
        </h2>
        <p className="max-w-[650px] text-center mx-auto lg:text-lg">
            Thriving young professionals with ample experience in both mainstream tech and web3, possessing a minimum of 5 years experience with communities, events, and digital education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[850px] mx-auto mt-10 gap-y-10 gap-x-2 items-start">
        <TeamMemberCard image="./uddy.png" memberName="Udoka A.M" position="Team Lead" description="Blockchain Developer and DevRel Engineer" xLink="https://x.com/Udoka_AM" linkedInLink="https://www.linkedin.com/in/udokaam/" websiteLink="https://x.com/SprintIQ"/>
        <TeamMemberCard image="./kelechi.png" memberName="Kelechi Endurance" position="Product Designer" description={`Seasoned design professional`} xLink="https://x.com/endurance_kel" linkedInLink="https://www.linkedin.com/in/kelechi-endurance-5921b820b/" websiteLink="https://kelechi917.vzy.io/"/>
        <TeamMemberCard image="./udoka.png" memberName="Onyele Udoka" position="Full-stack Developer" description="Product Centric Full Stack Engineer" xLink="https://x.com/FUMUDUKUS" linkedInLink="https://www.linkedin.com/in/udochukwukaonyela/" websiteLink="https://www.udoka.dev/"/>
        <TeamMemberCard image="./francis.png" memberName="Francis Codex" position="Frontend Engineer" description="Blockchain Developer and Software Engineer" xLink="https://x.com/francis_codex" linkedInLink="https://www.linkedin.com/in/franciscodex/" websiteLink="https://franciscodex.vercel.app/" />
        <TeamMemberCard image="./tim.png" memberName="Tim Adigwe" position="Smart Contract Developer" description="Rust, Reactjs, React-native experienced developer" xLink="https://x.com/AdigweTim" linkedInLink="https://www.linkedin.com/in/timadigwe/" websiteLink="https://x.com/AdigweTim"/>
      </div>
      </div>

      {/* GET IN TAOUCH */}

      <div className="mt-32">
      <div className="max-w-[850px] mx-auto border rounded-lg lg:py-10 divide-y divide-[#1FC04D]">
        <h2 className="text-center text-gradient text-4xl lg:text-7xl font-bold p-5">
            Get In Touch
        </h2>
        <div className="p-5 lg:px-20 text-center">
            <p>
                We are open to collaboration, partnership, e.t.c. We are also eager to here your thoughts, questions and suggestions regarding our platform.
                We look forward to feedbacks from you.
            </p>
            <div className="flex justify-center gap-3 mt-3">
                <Link to={'https://github.com/SprintIQ'}>
                <RiGithubFill/>
                </Link>
                <Link to={'https://x.com/sprintIQ'} >
                <RiTwitterXFill />
                </Link>
                <Link to={'https://www.linkedin.com/company/sprintiq/'}>
                <RiLinkedinFill/>
                </Link>
                {/* <RiMediumFill/> */}
                <RiMailFill/>
            </div>
        </div>
      </div>
      </div>

    </div>
   </>
    
  )
}

export default About

interface TeamMemberCardProp {
    image: string;
    memberName: string;
    position: string;
    description: string;
    xLink?: string;
    linkedInLink?: string;
    websiteLink?: string;
}

const TeamMemberCard = ({image, memberName, position, description, xLink, linkedInLink, websiteLink}: TeamMemberCardProp) => {

    const [detailIsOpen, setDetailIsOpen] = useState(false)

    return (
        <div className="flex flex-col justify-center w-fit mx-auto relative">
            <img src={image} alt="" className="w-full"/>
            <motion.h2 
              className={`text-sm md:text-lg font-semibold ${detailIsOpen ? "hidden" : ""}`}
            >
              {memberName}
            </motion.h2>
            <h4 className={`text-xs md:text-base ${detailIsOpen ? "hidden" : ""}`}>{position}</h4>

            <div className="absolute top-3 right-3">
              {
                detailIsOpen ? 
                (
                  <RiCloseCircleLine className="cursor-pointer " onClick={() => setDetailIsOpen(!detailIsOpen)}/>
                ) 
                : 
                (
                  <RiArrowRightUpLine className="cursor-pointer" onClick={() => setDetailIsOpen(!detailIsOpen)}/>
                )
              }
              
            </div>

            {/* User details toast */}
            
            <motion.div 
              className="bg-[#175611E5] text-white border border-[#1FC04D] py-3 rounded-lg px-3 absolute left-[50%] -translate-x-[50%] w-[90%] bottom-[5px]"
              initial = {{
                bottom: "-25px", 
                opacity: 0
              }}
              animate = {{
                bottom: detailIsOpen ? "5px" : "-25px",
                opacity: detailIsOpen ? 1 : 0
              }}
              transition={{
                type: "spring"
              }}
            >
              <h2 className="text-sm md:text-lg font-semibold">{memberName}</h2>
              <h4 className="text-sm md:text-base">{position}</h4>
              <div className="flex justify-between items-end mt-1 text-sm gap-x-3">
                <div>
                  {description}
                </div>
                <div className="flex items-center">
                  <span className="hover:opacity-80">
                    <Link target='_blank' to={xLink ? xLink : ''}>
                      <RiTwitterXFill className="w-5"/>
                    </Link>
                  </span>
                  <span className="hover:opacity-80">
                    <Link target='_blank' to={linkedInLink ? linkedInLink : ''}>
                      <RiLinkedinBoxFill className="w-5"/>
                    </Link>
                  </span>
                  <span className="hover:opacity-80">
                    <Link target='_blank' to={websiteLink ? websiteLink : ''}>
                      <RiGlobalLine className="w-5"/>
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
        </div>
    )
}
