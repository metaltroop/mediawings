import { Smile, Zap, Coffee, Heart, Briefcase, ChevronRight } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const LifePage = () => {
    const { openModal } = useModal();

    const perks = [
        { icon: <Zap className="text-brand-cyan" />, title: "Growth & Learning", desc: "Dedicated budgets for certifications and workshops." },
        { icon: <Coffee className="text-orange-500" />, title: "Vibrant Culture", desc: "A creative playground with regular team outings and game zones." },
        { icon: <Heart className="text-pink-500" />, title: "Health First", desc: "Comprehensive health insurance and wellness programs." }
    ];

    const positions = [
        { title: "Senior React Developer", dept: "Technology", location: "Remote / Hybrid", link: "#" },
        { title: "SEO Strategist", dept: "Marketing", location: "Remote", link: "#" },
        { title: "UI/UX Designer", dept: "Design", location: "Mumbai Hub", link: "#" },
        { title: "PPC Management Lead", dept: "Growth", location: "Hybrid", link: "#" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-brand-cyan font-black tracking-widest text-xs mb-8 block uppercase">Work With Us</span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none uppercase">
                            Life At <span className="text-brand-cyan underline decoration-white/20 underline-offset-8">Mediawings.</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
                            We are more than just a company; we are a collective of dreamers, builders, and high-performers redefining the digital frontier.
                        </p>
                    </div>
                </div>
                {/* Visual glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/10 blur-[120px] rounded-full translate-x-1/2" />
            </section>

            {/* Cultural Grid */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2 aspect-video rounded-[3rem] overflow-hidden group">
                        <img 
                            src="https://images.unsplash.com/photo-152207182399e-b89e7df91b62?auto=format&fit=crop&q=80&w=800" 
                            alt="Team Collaboration" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="aspect-square bg-brand-cyan/10 rounded-[3rem] p-10 flex flex-col justify-end group hover:bg-brand-cyan transition-colors duration-500">
                        <Smile className="text-brand-cyan w-12 h-12 mb-6 group-hover:text-white transition-colors" />
                        <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-white transition-colors">Positive Vibes Only.</h3>
                    </div>
                    <div className="aspect-square rounded-[3rem] overflow-hidden">
                         <img 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                            alt="Office Space" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Why Join <span className="text-brand-cyan">Mediawings?</span></h2>
                        <p className="text-gray-500 font-medium max-w-xl mx-auto">We invest in our people because we know they are our greatest competitive advantage.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {perks.map((perk, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    {perk.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{perk.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers List */}
            <section id="careers" className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-brand-cyan font-black tracking-widest text-[10px] uppercase mb-4 block italic">Join the Elite</span>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Open <span className="text-brand-cyan italic">Positions.</span></h2>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 font-bold uppercase text-xs tracking-widest pb-4">
                        <span className="text-gray-900 border-b-2 border-brand-cyan">All Roles</span>
                        <span>Design</span>
                        <span>Engineering</span>
                        <span>Growth</span>
                    </div>
                </div>

                <div className="space-y-6">
                    {positions.map((job, idx) => (
                        <div key={idx} className="group p-8 md:p-12 rounded-[3rem] border border-gray-100 hover:border-brand-cyan transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-[#fcfcfc]">
                            <div>
                                <h4 className="text-2xl md:text-4xl font-black text-black group-hover:text-brand-cyan transition-colors mb-2 tracking-tighter uppercase">{job.title}</h4>
                                <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-2 border-r border-gray-200 pr-6"><Briefcase className="w-3.5 h-3.5" /> {job.dept}</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <button onClick={openModal} className="shrink-0 w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all">
                                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 font-bold mb-8">Don't see a perfect fit? Send your resume anyway.</p>
                    <button onClick={openModal} className="bg-gray-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black transition-all">General Application</button>
                </div>
            </section>
        </div>
    );
};

export default LifePage;
