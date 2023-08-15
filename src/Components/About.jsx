import myimage from '../../public/img/myimage.png';

const About = () => {
    return (
        <div id={'about'} className=" items-center justify-center h-auto ">
            <div className="container mx-auto">
                <div className="flex flex-col bg-white p-10  shadow-lg justify-center items-center">
                    <img
                        src={myimage}
                        alt="Profile Picture"
                        className="w-32 h-40 rounded-2xl mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-2">Otabek Toshtemirov</h1>
                    <p className="text-gray-800 text-lg mb-4">Frontend Developer</p>
                    <h2 className="text-xl font-bold mb-2">Education</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">Bachelor`s Degree in Computer Science
                            <span
                                className="text-red-800 text-base font-normal ml-2"
                            >
                            (2022 - currently)
                        </span>
                        </li>
                        <li className="mb-2">Web Development Bootcamp</li>
                        <li>Online Courses in UI/UX Design</li>
                    </ul>
                </div>
                <div className="flex  bg-white  shadow-lg pl-40 lg:justify-center lg:pr-40  items-center ">
                    <a
                        href="https://drive.google.com/file/d/1gIb8jUemwMkD0J5Hmz7oJaS7gYvjd2vg/view?usp=sharing"
                        className="mx-20 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>

        </div>
    );
};

export default About;