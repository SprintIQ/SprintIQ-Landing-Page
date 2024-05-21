import { RiArrowRightUpLine, RiCloseCircleLine, RiGlobalLine, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Team = () => {
  return (
    <section className="px-10 lg:px-20 py-10 lg:py-5 team-hero">
      <div>
        <h2 className="text-center text-8xl lg:text-[250px] font-bold text-[#1DAA4554]">
            Team
        </h2>
        <p className="max-w-[650px] text-center mx-auto lg:text-lg">
            Thriving young professionals with ample experience in both mainstream tech and web3, possessing a minimum of 5 years experience with communities, events, and digital education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[850px] mx-auto mt-10 gap-y-10 gap-x-2 items-start">
        <TeamMemberCard image="./uddy.png" memberName="Udoka A.M" position="Team Lead" description="Blockchain Developer and DevRel Engineer"/>
        <TeamMemberCard image="./kelechi.png" memberName="Kelechi Endurance" position="Product Designer" description={`Seasoned design professional`}/>
        <TeamMemberCard image="./udoka.png" memberName="Onyele Udoka" position="Full-stack Developer" description="Product Centric Full Stack Engineer"/>
        <TeamMemberCard image="./francis.png" memberName="Francis Codex" position="Frontend Developer" description="Blockchain Developer and Software Engineer"/>
        <TeamMemberCard image="./tim.png" memberName="Tim Adigwe" position="Smart Contract Developer" description="Rust, Reactjs, React-native experienced developer"/>
      </div>
    </section>
  )
}

export default Team

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
                  <RiCloseCircleLine className="cursor-pointer" onClick={() => setDetailIsOpen(!detailIsOpen)}/>
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
                    <Link to={xLink ? xLink : ''}>
                      <RiTwitterXFill className="w-5"/>
                    </Link>
                  </span>
                  <span className="hover:opacity-80">
                    <Link to={linkedInLink ? linkedInLink : ''}>
                      <RiLinkedinBoxFill className="w-5"/>
                    </Link>
                  </span>
                  <span className="hover:opacity-80">
                    <Link to={websiteLink ? websiteLink : ''}>
                      <RiGlobalLine className="w-5"/>
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
        </div>
    )
}