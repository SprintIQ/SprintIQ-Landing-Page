const Navbar = () => {
  
  return (
    <nav className="bg-green-1 py-2 px-5 lg:px-20 flex justify-between items-center fixed w-full top-0 z-[99]">
      <div>
        <img src="./sprintiq-logo.svg" alt="" className="max-w-[106px] lg:max-w-[150px]"/>
      </div>
      <div>
        <button className="border border-white text-white bg-green-700 hover:bg-green-900 py-1 px-3 rounded-full font-semibold">
          Launch
        </button>
      </div>
    </nav>
  )
}

export default Navbar

