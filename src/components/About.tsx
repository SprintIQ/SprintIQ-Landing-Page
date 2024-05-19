import WhyNowWhoWeAreFor from "./WhyNowWhoWeAreFor"

const About = () => {
  return (
    <div className="px-10 lg:px-20 py-10 lg:py-5">
        <div>
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
                    Quiz templates dedicated for Web3 personal assesment
                </div>
                <div className="max-w-[300px]">
                    Intuitive design, tailored to ensure game creators and players navigate easily on the platform.
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
    </div>
  )
}

export default About
