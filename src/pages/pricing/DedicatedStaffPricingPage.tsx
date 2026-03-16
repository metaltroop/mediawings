import { Check, UserPlus, Briefcase, GraduationCap, Clock, Award, ShieldCheck, Zap } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const DedicatedStaffPricingPage = () => {
    const { openModal } = useModal();

    const roles = [
        {
            title: "Developers",
            desc: "Expert PHP, Laravel, React, and WordPress engineers.",
            price: "2,500",
            icon: <Briefcase className="text-brand-cyan" />
        },
        {
            title: "UI/UX Designers",
            desc: "Creatives specializing in user-centric digital products.",
            price: "2,200",
            icon: <Award className="text-pink-500" />
        },
        {
            title: "Marketing Specialists",
            desc: "PPC, SEO, and Content growth strategists.",
            price: "1,800",
            icon: <Zap className="text-orange-500" />
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-gray-900 text-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading mb-6 uppercase tracking-tighter">
                        Hire Your <span className="text-brand-cyan italic">A-Team</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Scale your workforce instantly with pre-vetted, top-tier talent. Our dedicated resources integrate seamlessly with your internal teams.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cyan"><Clock className="w-4 h-4"/> 48h Onboarding</div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cyan"><ShieldCheck className="w-4 h-4"/> IP Protection</div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cyan"><GraduationCap className="w-4 h-4"/> Top 3% Talent</div>
                    </div>
                </div>
            </section>

            {/* Resource Cards */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {roles.map((role, idx) => (
                        <div key={idx} className="relative p-10 rounded-[3rem] border border-gray-100 bg-white shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8">
                                {role.icon}
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-2">{role.title}</h3>
                            <p className="text-gray-500 text-sm mb-10 font-medium leading-relaxed">{role.desc}</p>
                            
                            <div className="space-y-4 mb-12">
                                {[
                                    "160 Hours / Month",
                                    "Daily Standups",
                                    "Direct Slack/Email Access",
                                    "Weekly Output Reports",
                                    "Account Management Incl."
                                ].map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3 text-xs font-black text-gray-700 uppercase tracking-tight">
                                        <Check className="text-brand-cyan w-4 h-4 shrink-0" strokeWidth={4} /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-8 mt-auto flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Starts At</span>
                                    <span className="text-3xl font-black text-gray-900">${role.price}</span>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">/mo</span>
                                </div>
                                <button onClick={openModal} className="w-12 h-12 bg-brand-cyan text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <UserPlus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scale-up Banner */}
            <section className="py-24 bg-brand-cyan overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Don't Hire. <span className="underline decoration-white/30 decoration-8 underline-offset-8">Scale.</span></h2>
                    <p className="font-black text-xl mb-12 max-w-2xl text-gray-900">Slash your overhead costs by up to 60% compared to local hiring while maintaining world-class output quality.</p>
                    <button onClick={openModal} className="bg-gray-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-2xl">Request Availability</button>
                </div>
                
                {/* Visual noise background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                     <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                     </svg>
                </div>
            </section>
        </div>
    );
};

export default DedicatedStaffPricingPage;
