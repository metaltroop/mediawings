import { Target, Eye, Users, Zap } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const AboutPage = () => {
    const { openModal } = useModal();

    const stats = [
        { label: "Years of Excellence", value: "15+" },
        { label: "Global Clients", value: "500+" },
        { label: "Project Success", value: "98%" },
        { label: "Global Team", value: "150+" }
    ];

    const values = [
        {
            title: "Performance First",
            desc: "We don't just deliver work; we deliver results that impact the bottom line.",
            icon: <Zap className="text-brand-cyan" />
        },
        {
            title: "Client-Centric",
            desc: "Your growth is our growth. We build long-term partnerships based on trust.",
            icon: <Users className="text-pink-500" />
        },
        {
            title: "Innovation Always",
            desc: "Staying ahead of trends to ensure your brand remains relevant in a changing world.",
            icon: <Target className="text-indigo-600" />
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-50 uppercase relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-brand-cyan font-black tracking-widest text-xs mb-6 block">OUR STORY</span>
                        <h1 className="text-5xl md:text-8xl font-black text-black mb-8 tracking-tighter italic leading-none">
                            Defining The Future Of <span className="text-brand-cyan">Digital Growth.</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed lowercase mb-12">
                            MediaWings is a performance-first digital agency dedicated to transforming ambitious brands through precision marketing and world-class technology.
                        </p>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 -skew-x-12 translate-x-1/4" />
            </section>

            {/* Mission & Vision */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="group p-12 bg-[#fcfcfc] rounded-[3rem] border border-gray-100 hover:border-brand-cyan/30 transition-all duration-500">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <Target className="text-brand-cyan w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Mission</h2>
                        <p className="text-gray-500 font-medium leading-[1.8] text-lg">
                            To empower businesses globally by providing innovative, data-driven digital solutions that generate measurable revenue growth and sustainable market leadership.
                        </p>
                    </div>
                    <div className="group p-12 bg-[#fcfcfc] rounded-[3rem] border border-gray-100 hover:border-pink-500/30 transition-all duration-500">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                            <Eye className="text-pink-500 w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Vision</h2>
                        <p className="text-gray-500 font-medium leading-[1.8] text-lg">
                            To be the world's most trusted partner for digital transformation, recognized for our commitment to excellence, transparency, and pioneering marketing strategies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-900 text-white">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-5xl md:text-7xl font-black text-brand-cyan mb-2 tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            {/* Core Values */}
            <section className="py-32">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">What We <span className="text-brand-cyan italic">Stand For</span></h2>
                        <div className="w-20 h-2 bg-brand-cyan mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <div key={i} className="text-center p-10">
                                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{v.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence Banner */}
            <section className="py-24 bg-brand-cyan relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-10 leading-none">Global Footprint. <br />Local <span className="text-gray-900">Expertise.</span></h2>
                    <p className="text-white font-black text-xl mb-12 max-w-2xl mx-auto opacity-90">Serving industry leaders across the USA, India, Middle East, and beyond.</p>
                    <button onClick={openModal} className="bg-gray-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-2xl">Partner With Us</button>
                </div>
                {/* Visual texture */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="dots-about" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#dots-about)" />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
