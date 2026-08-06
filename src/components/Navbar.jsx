import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Employers", path: "/employers" },
    { name: "Candidates", path: "/candidates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#081C15]/90 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
           Global Hire Partners
          </h1>

          <p className="text-xs tracking-[3px] text-gray-300">
              Executive Recruitment • Global Talent
          </p>
        </div>

        <div className="hidden lg:flex gap-8">

          {links.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-400 transition"
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>

        <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition">
          Book Consultation
        </button>

      </div>

    </nav>
  );
}

export default Navbar;