const Team = () => {
  return (
    <section className="px-10 lg:px-20 py-10 lg:py-5">
      <div>
        <h2 className="text-center text-8xl lg:text-[250px] font-bold text-[#1DAA4554]">
            Team
        </h2>
        <p className="max-w-[650px] text-center mx-auto lg:text-lg">
            Thriving young professionals with ample experience in both mainstream tech and web3, possessing a minimum of 5 years experience with communities, events, and digital education.
        </p>
      </div>

      <div className="grid grid-cols-3 max-w-[850px] mx-auto mt-10 gap-y-10">
        <TeamMemberCard image="./uddy.png" memberName="Udoka A.M" position="Team Lead"/>
        <TeamMemberCard image="./kelechi.png" memberName="Kelechi Endurance" position="Product Designer"/>
        <TeamMemberCard image="./udoka.png" memberName="Onyele Udoka" position="Full-stack Developer"/>
        <TeamMemberCard image="./francis.png" memberName="Francis Codex" position="Frontend Developer"/>
        <TeamMemberCard image="./tim.png" memberName="Tim Adigwe" position="Smart Contract Developer"/>
      </div>
    </section>
  )
}

export default Team

interface TeamMemberCardProp {
    image: string;
    memberName: string;
    position: string;
}

const TeamMemberCard = ({image, memberName, position}: TeamMemberCardProp) => {
    return (
        <div>
            <img src={image} alt="" />
            <h2 className="text-sm lg:text-lg font-semibold">{memberName}</h2>
            <h4 className="text-xs">{position}</h4>
        </div>
    )
}