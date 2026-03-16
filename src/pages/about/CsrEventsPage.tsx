import { Calendar, Heart, Globe, Award, MapPin, ArrowRight } from 'lucide-react';

const CsrEventsPage = () => {
    const activities = [
        {
            title: "Digital Literacy Campaign",
            desc: "Empowering 5,000+ local students with essential programming and digital marketing skills annually.",
            icon: <Globe className="text-brand-cyan" />,
            impact: "5k+ Students"
        },
        {
            title: "Green Tech Initiative",
            desc: "Pledging to offset our carbon footprint through server optimization and supporting global reforestation projects.",
            icon: <Heart className="text-pink-600" />,
            impact: "Carbon Neutral"
        },
        {
            title: "Underprivileged Support",
            desc: "Dedicated monthly resource support for charities focusing on healthcare and basic necessities for children.",
            icon: <Award className="text-orange-500" />,
            impact: "Monthly Support"
        }
    ];

    const upcomingEvents = [
        {
            title: "Global Marketing Summit 2026",
            date: "May 15-17, 2026",
            location: "Singapore / Hybrid",
            tag: "Flagship Event"
        },
        {
            title: "MediaWings Hackathon v4.0",
            date: "June 02, 2026",
            location: "Mumbai Hub",
            tag: "Internal"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-lavender relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center uppercase">
                    <span className="text-brand-cyan font-black tracking-widest text-xs mb-6 block">Beyond Business</span>
                    <h1 className="text-5xl md:text-[10rem] font-black text-gray-900 mb-6 tracking-tighter leading-none italic">
                        CSR & <span className="text-brand-cyan">Events.</span>
                    </h1>
                </div>
            </section>

            {/* CSR Activities */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight italic">Our Impact <span className="text-brand-cyan">Beyond Code.</span></h2>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">We believe in using our digital prowess as a force for good. Our corporate social responsibility programs are designed to create lasting, tangible change in the communities we serve.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {activities.map((item, idx) => (
                        <div key={idx} className="group p-12 rounded-[4rem] bg-gray-50 border border-transparent hover:border-brand-cyan/20 transition-all duration-500 hover:shadow-2xl">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                            <div className="bg-white px-6 py-3 rounded-full inline-block border border-gray-100 italic">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">Impact: {item.impact}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Section */}
            <section className="py-32 bg-gray-900 text-white relative">
                 <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                         <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 italic">Stay <span className="text-brand-cyan">Connected.</span></h2>
                            <p className="text-gray-400 font-medium text-lg">Join us at our upcoming summits, webinars, and regional hub gatherings across the globe.</p>
                         </div>
                         <div className="pb-4">
                             <button className="flex items-center gap-3 text-brand-cyan font-black uppercase tracking-widest text-xs group">View All Events <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" /></button>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingEvents.map((event, i) => (
                            <div key={i} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white transition-all duration-500">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <span className="text-brand-cyan font-black uppercase tracking-widest text-[10px] mb-8 block px-3 py-1 bg-brand-cyan/10 rounded-full w-fit group-hover:bg-brand-cyan group-hover:text-white transition-colors">{event.tag}</span>
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-8 group-hover:text-black transition-colors">{event.title}</h3>
                                    </div>
                                    <div className="flex flex-col gap-4 text-gray-400 group-hover:text-gray-500 transition-colors">
                                        <div className="flex items-center gap-3 font-bold uppercase text-[10px] tracking-widest">
                                            <Calendar className="w-4 h-4 text-brand-cyan" /> {event.date}
                                        </div>
                                        <div className="flex items-center gap-3 font-bold uppercase text-[10px] tracking-widest">
                                            <MapPin className="w-4 h-4 text-brand-cyan" /> {event.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default CsrEventsPage;
