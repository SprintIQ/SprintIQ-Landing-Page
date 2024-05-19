const WhyNowWhoWeAreFor = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1000px] mx-auto gap-y-20 lg:gap-10 lg:justify-center items-center">
      <div>
        <div className="w-full max-w-[320px] flex items-center flex-grow-0 flex-shrink-0">
          <div>          
            <h2 className="text-gradient text-4xl lg:text-5xl font-extrabold">Why Now?</h2>
            <p className="mt-5 text-lg">Attention is fast shifting to community-first experience both within and outside of the web3 ecosystem.</p>
          </div>
          <div>
            <img src="./subtract-left.png" alt="" className="scale-150"/>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full max-w-[320px] flex items-center flex-grow-0 flex-shrink-0 lg:pt-32 gap-x-[-10px]">
          <div className="">
            <img src="./subtract-right.png" alt="" className="scale-150 max-h-[275px] lg:max-h-[275px]"/>
          </div>
          <div>          
            <h2 className="text-gradient text-5xl font-extrabold text-right">Who we are for?</h2>
            <div className="mt-5">
              <div className="flex flex-row-reverse lg:flex-row items-center gap-x-3 text-lg">
                  <div className="w-[15px] h-[15px] bg-gradient-to-tl from-[#52FF00] to-[#BDF790] rotate-45"></div><p>Event organizers</p>
              </div>
              <div className="flex flex-row-reverse lg:flex-row items-center gap-x-3 text-lg">
                  <div className="w-[15px] h-[15px] bg-gradient-to-tl from-[#52FF00] to-[#BDF790] rotate-45"></div><p>Web3 enthusiast</p>
              </div>
              <div className="flex flex-row-reverse lg:flex-row items-center gap-x-3 text-lg">
                  <div className="w-[15px] h-[15px] bg-gradient-to-tl from-[#52FF00] to-[#BDF790] rotate-45"></div><p>Community managers</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyNowWhoWeAreFor
