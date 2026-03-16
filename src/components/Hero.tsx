import { useModal } from '../contexts/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] mb-6 font-heading">
                        The Best <br />
                        <span className="text-gradient">Digital Marketing Agency</span> <br />
                        Leading Globally.
                    </h1>

                    <div className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-sans">
                        As a leading digital marketing agency and consultant, we specialize in 360-degree online efforts.
                        <strong> 15+ years </strong> of experience, serving clients across <strong>30+ countries.</strong>
                    </div>

                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Get Started
                    </button>
                </div>

                {/* Right Content / Floating Cards */}
                <div className="w-full md:w-1/2 relative min-h-[400px]">
                    {/* Placeholders for Floating Clutch/Google Review cards */}
                    {/* Google (Top Right) */}
                    <div className="absolute top-10 right-10 bg-white p-6 rounded-xl shadow-2xl z-20 w-64 transform rotate-2 animate-float">
                        <div className="flex justify-between items-center mb-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                            <span className="font-bold text-lg">5.0</span>
                        </div>
                        <div className="flex gap-1 text-yellow-400 text-sm mb-2">★★★★★</div>
                        <p className="text-xs text-gray-500">Based on 120+ reviews</p>
                    </div>

                    {/* Clutch (Bottom Left) */}
                    <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-2xl z-30 w-64 transform -rotate-3 animate-float-delayed">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-xl">Clutch</span>
                            <span className="font-bold text-lg">4.9</span>
                        </div>
                        <div className="flex gap-1 text-yellow-400 text-sm mb-2">★★★★★</div>
                        <p className="text-xs text-gray-500">Top Rated Agency</p>
                    </div>

                    {/* Trustpilot (Top Left) */}
                    <div className="absolute top-0 left-4 bg-white p-5 rounded-xl shadow-2xl z-10 w-56 transform -rotate-1 animate-float-delayed">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg flex items-center gap-1 text-green-600">
                                ★ Trustpilot
                            </span>
                            <span className="font-bold text-lg">4.8</span>
                        </div>
                        <div className="flex gap-1 text-green-500 text-sm mb-2">★★★★★</div>
                        <p className="text-xs text-gray-500">Excellent Reviews</p>
                    </div>

                    {/* Facebook (Bottom Right) */}
                    <div className="absolute bottom-0 right-4 bg-white p-5 rounded-xl shadow-2xl z-10 w-56 transform rotate-3 animate-float">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg text-blue-600">Facebook</span>
                            <span className="font-bold text-lg">4.9</span>
                        </div>
                        <div className="flex gap-1 text-yellow-400 text-sm mb-2">★★★★★</div>
                        <p className="text-xs text-gray-500">Highly Recommended</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
