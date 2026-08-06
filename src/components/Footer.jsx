import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#081C15] text-white py-16">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Global Hire Partners
          </h2>

          <p className="mt-4 text-gray-300">
            Connecting exceptional talent with global employers through premium recruitment solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Resources</h3>

          <ul className="space-y-2 text-gray-300">
            <li><Link to="/candidates">Candidates</Link></li>
            <li><Link to="/employers">Employers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Let's Talk
          </h3>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
            Book Consultation
          </button>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        © 2026 Global Hire Partners. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;