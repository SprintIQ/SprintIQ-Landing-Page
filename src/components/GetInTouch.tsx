import { RiGithubFill, RiLinkedinFill, RiMailFill, RiMediumFill, RiTwitterXFill } from "@remixicon/react"

const GetInTouch = () => {
  return (
    <section className="px-10 lg:px-20 py-10 lg:py-10">
      <div className="max-w-[850px] mx-auto border border-[#1FC04D] bg-[rgba(23,86,17,0.33)] rounded-lg lg:py-10 divide-y divide-[#1FC04D]">
        <h2 className="text-center text-gradient text-4xl lg:text-7xl font-bold p-5">
            Get In Touch
        </h2>
        <div className="p-5 lg:px-20 text-center">
            <p>
                We are open to collaboration, partnership, e.t.c. We are also eager to here your thoughts, questions and suggestions regarding our platform.
                We look forward to feedbacks from you.
            </p>
            <div className="flex justify-center gap-3 mt-3">
                <RiGithubFill/>
                <RiTwitterXFill/>
                <RiLinkedinFill/>
                <RiMediumFill/>
                <RiMailFill/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
