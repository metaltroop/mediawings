import { Check, Zap, Star, Layout, Code2, Rocket, Monitor } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const WebDevPricingPage = () => {
    const { openModal } = useModal();

    const plans = [
        {
            name: "Business Lite",
            price: "1,500",
            desc: "Custom high-performance brochure website for small businesses.",
            icon: <Layout className="text-brand-cyan w-6 h-6" />,
            features: [
                "Up to 5 Pages",
                "Responsive Mobile Design",
                "WordPress CMS Setup",
                "Contact Form Integration",
                "Basic On-Page SEO",
                "Speed Optimization",
                "Social Media Links",
                "1 Month Free Support"
            ],
            cta: "Build My Site",
            popular: false,
            color: "border-gray-200"
        },
        {
            name: "Professional",
            price: "4,500",
            desc: "For growing brands needing advanced features and custom design.",
            icon: <Zap className="text-indigo-600 w-6 h-6" />,
            features: [
                "Up to 15 Pages",
                "Unique Custom UI/UX Design",
                "Advanced SEO Architecture",
                "Third-party API Integration",
                "Blog / Resource Section",
                "Interactive Elements",
                "Google Analytics Setup",
                "3 Months Maintenance",
                "CMS Training Session"
            ],
            cta: "Most Popular",
            popular: true,
            color: "border-brand-cyan ring-2 ring-brand-cyan ring-opacity-10 shadow-xl"
        },
        {
            name: "Enterprise",
            price: "12,000",
            desc: "Bespoke web applications and highly complex corporate platforms.",
            icon: <Star className="text-orange-500 w-6 h-6" />,
            features: [
                "Unlimited Pages",
                "Custom Framework (Laravel/Next.js)",
                "Full Platform Scalability",
                "Security Hardening",
                "Premium UI/UX System",
                "Multi-language Support",
                "Database Architecture",
                "Dedicated PM",
                "12 Months Support Upgrade"
            ],
            cta: "Custom Quote",
            popular: false,
            color: "border-gray-200"
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-32 pb-16 bg-gray-50/50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6 uppercase tracking-tighter">
                        Web Dev <span className="text-brand-cyan">Investment</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        We build high-converting, lightning-fast websites that serve as your brand's ultimate growth engine. Quality design meets precision code.
                    </p>
                </div>
            </section>

            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx}
                            className={`p-10 rounded-3xl border transition-all duration-300 relative bg-white flex flex-col ${plan.color}`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-10 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-widest">
                                    Strategic Choice
                                </span>
                            )}
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-10">
                                {plan.icon}
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-2 tracking-tight uppercase">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-1">Starts at</span>
                                <span className="text-5xl font-black text-gray-900 tracking-tighter">${plan.price}</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">{plan.desc}</p>
                            <div className="space-y-4 mb-12 grow">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="text-brand-cyan w-3 h-3 stroke-[4px]" />
                                        </div>
                                        <span className="text-gray-600 text-[13px] font-bold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button 
                                onClick={openModal}
                                className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 ${plan.popular ? 'bg-brand-cyan text-white shadow-xl hover:shadow-brand-cyan/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Development Standards */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="grow">
                            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase leading-none">
                                Our Build <span className="text-brand-cyan">Manifesto</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                {[
                                    { icon: <Monitor />, title: "Precision Design", desc: "Pixel-perfect layouts that look stunning on every screen size." },
                                    { icon: <Code2 />, title: "Clean Code", desc: "Lean, bug-free, and scalable architecture for longevity." },
                                    { icon: <Rocket />, title: "Blazing Speed", desc: "Optimized for core web vitals and instantaneous load times." },
                                    { icon: <ShieldCheck />, title: "Secure First", desc: "Hardened security protocols to keep your data safe." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="text-brand-cyan w-10 h-10 shrink-0">{item.icon}</div>
                                        <div>
                                            <h5 className="font-bold uppercase tracking-wide mb-2">{item.title}</h5>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-[400px] shrink-0">
                             <div className="bg-brand-cyan p-12 rounded-[3rem] text-white rotate-3">
                                <h4 className="text-4xl font-black mb-6 leading-tight">Need a custom feature?</h4>
                                <p className="font-bold opacity-80 mb-8">We specialize in building complex integrations and custom web solutions for high-scale apps.</p>
                                <button onClick={openModal} className="bg-white text-brand-cyan font-black px-8 py-3 rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-all">Talk to Devs</button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default WebDevPricingPage;
