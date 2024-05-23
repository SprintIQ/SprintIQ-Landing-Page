import { RiGithubFill, RiLinkedinFill, RiMailFill, RiMediumFill, RiTwitterXFill } from "@remixicon/react"
import { Link } from "react-router-dom"

const GetInTouch = () => {
  return (
    <section className="px-10 lg:px-20 py-10 lg:py-10 gradient">
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
                <RiGithubFill/>
                <Link to={'https://x.com/sprintIQ'} >
                <RiTwitterXFill />
                </Link>
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
