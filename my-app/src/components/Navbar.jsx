export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="/circle.png"
          alt="Circle Logo"
          className="w-7 h-7"
        />
        <h1 className="text-[30px] font-bold text-cyan-600">
          circle
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        {["Features", "Pricing", "Testimonials", "Resources", "Company", "Contact"].map(
          (item, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-cyan-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          )
        )}
      </ul>

      {/* Button */}
      <button className="border border-cyan-500 text-cyan-600 px-5 py-2 rounded-md font-medium
        hover:bg-cyan-600 hover:text-white transition duration-300">
        Login
      </button>
    </nav>
  );
}
