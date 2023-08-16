import weatherimg from '../../public/img/weather.png'
import sneakers from '../../public/img/sneakers.png'
import github from '../../public/img/github.png'
import youtube from '../../public/img/youtube.png'
import sunside from '../../public/img/sunside.png'
import portf from '../../public/img/portf.png'
import job from '../../public/img/job.png'
import fylo from '../../public/img/fylo.png'
const MyProjects = () => {
    return (
        <div id={'works'} className={" container mx-auto"}>
            <h1
                className="text-3xl font-bold mb-2 text-center mt-10"
            >
                My Projects
            </h1>
            <div className=" px-4 flex  items-center justify-between py-10 flex-wrap">
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={weatherimg} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Weather app</div>
                        <p className="text-gray-700 text-base">
                            Weather app with React and OpenWeatherMap API
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://weatherappotabek.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={sneakers} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">React Sneakers</div>
                        <p className="text-gray-700 text-base">
                            Mini shop with React
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://sage-dieffenbachia-933382.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={github} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Github profile searcher</div>
                        <p className="text-gray-700 text-base">
                            Github profile searcher with github api
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://github-profile-searche.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={youtube} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">You tube</div>
                        <p className="text-gray-700 text-base">
                            You tube clone with React and You tube API
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="#"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={sunside} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Sunside agency</div>
                        <p className="text-gray-700 text-base">
                            Info page for agency with HTML, CSS, JS
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://sunnysideagency98.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={portf} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Portfolio</div>
                        <p className="text-gray-700 text-base">
                            Portfolio page with HTML, CSS, JS
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://otabek98.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={job} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Job listing</div>
                        <p className="text-gray-700 text-base">
                            Dynamic job listing page with React
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://precious-twilight-054062.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>
                <div className="max-w-md min-w-300 my-2 mx-auto shadow-lg p-8 hover:bg-blue-50">
                    <img src={fylo} alt="Project Image"
                         className="w-full h-64 object-cover hover:scale-105 transition overflow-hidden"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Fylo</div>
                        <p className="text-gray-700 text-base">
                            Responsive page with HTML, CSS, JS email validation
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <a
                            href="https://eloquent-dieffenbachia-a1be5a.netlify.app/"
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition"
                        >
                            Go to Project
                        </a>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default MyProjects;