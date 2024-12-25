import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-8 bg-gray-100 text-gray-800">
      <div className="flex flex-wrap  gap-8 justify-between">
        {/* Logo and About Section */}
        <div className="flex-1 ">
          <h1 className="text-xl font-bold">Logo</h1>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Your footer
            description goes here.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="https://facebook.com" className="hover:underline">
              Facebook
            </Link>
            <Link to="https://twitter.com" className="hover:underline">
              Twitter
            </Link>
            <Link to="https://instagram.com" className="hover:underline">
              Instagram
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Additional Sections */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="font-semibold mb-2">Resources</h2>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/support" className="hover:underline">
            Support
          </Link>
        </div>

        {/* Contact Section */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="font-semibold mb-2">Contact</h2>
          <p className="text-sm">1234 Street Name</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">email@example.com</p>
          <p className="text-sm">+123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
