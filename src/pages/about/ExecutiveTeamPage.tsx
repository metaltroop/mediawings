import { Linkedin, Twitter, MessageSquare } from 'lucide-react';

const ExecutiveTeamPage = () => {
    const team = [
        {
            name: "Anil Verma",
            role: "Managing Director",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
            desc: "Visionary leader with 20+ years in digital transformation and strategic consulting."
        },
        {
            name: "Sarah Hughes",
            role: "Chief Marketing Officer",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
            desc: "Expert in performance marketing and global brand positioning."
        },
        {
            name: "Marcus Chen",
            role: "Chief Technology Officer",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
            desc: "Architecting high-scale enterprise solutions and proprietary AI frameworks."
        },
        {
            name: "Elena Rodriguez",
            role: "Head of Design",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
            desc: "Passionate about user-centric design and building aesthetic brand identities."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-50 uppercase relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <span className="text-brand-cyan font-black tracking-widest text-xs mb-6 block">OUR LEADERSHIP</span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic leading-none uppercase">
                        The Minds Behind <br /><span className="text-brand-cyan underline decoration-black/10 underline-offset-8">Mediawings.</span>
                    </h1>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {team.map((member, idx) => (
                        <div key={idx} className="group">
                            <div className="aspect-3/4 rounded-[3rem] overflow-hidden bg-gray-100 mb-8 relative">
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all cursor-pointer">
                                         <Linkedin size={20} />
                                     </div>
                                     <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all cursor-pointer">
                                         <Twitter size={20} />
                                     </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-brand-cyan transition-colors italic">{member.name}</h3>
                            <p className="text-brand-cyan font-black uppercase text-[10px] tracking-widest mb-4">{member.role}</p>
                            <p className="text-gray-500 font-medium text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Culture Strip */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-[800px] mx-auto px-4">
                    <MessageSquare className="w-12 h-12 text-brand-cyan mx-auto mb-8 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-10">We Lead by <span className="text-brand-cyan">Example.</span></h2>
                    <p className="text-gray-400 font-medium italic">"Leadership is not a title, it's the ability to translate vision into reality for our clients every single day."</p>
                </div>
            </section>
        </div>
    );
};

export default ExecutiveTeamPage;
