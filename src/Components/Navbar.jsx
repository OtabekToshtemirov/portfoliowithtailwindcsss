import {useState} from 'react';
import logo from '../../public/img/otlogo.jpg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="container   mx-auto px-2">
                <div className="flex justify-between items-center h-16">
                    <div className="flex mx-auto justify-between w-full  items-center">
                        <div className=" flex items-center ">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src={logo}
                                alt="Logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                        <div className="hidden grow sm:-my-px sm:ml-6 sm:flex justify-end  right-0">
                            <a
                                href="#about"
                                className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                            >
                                About
                            </a>
                            <a
                                href="#works"
                                className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center justify-between sm:hidden">
                        <button
                            type="button"
                            onClick={handleMenuToggle}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="#about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
                        >
                            About
                        </a>
                        <a
                            href="#works"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;