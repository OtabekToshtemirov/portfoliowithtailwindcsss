
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-4">
            <div className="container mx-auto px-10  flex items-center justify-between">
                <div className="flex  flex-wrap space-x-12   md:justify-center md:items-start">
                    <a
                        href="https://www.linkedin.com/in/otabek-toshtemirov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200  hover:text-gray-400 transition duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/otabektoshtemirov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 transition duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://twitter.com/toshtemirovota"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 transition duration-300"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://telegram.me/shoraqorgon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-gray-400 transition duration-300"
                    >
                        Telegram
                    </a>
                </div>
                <div className="flex items-center">
                    <p className={`text-gray-200 text-sm md:text-base`}>
                        © 2023 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;