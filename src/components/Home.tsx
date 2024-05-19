import About from "./About"
import GetInTouch from "./GetInTouch"
import Header from "./Header"
import Team from "./Team"

const Home = () => {
  return (
    <div className="relative pb-20">
      <Header/>
      <About/>
      <Team/>
      <GetInTouch/>
    </div>
  )
}

export default Home
