import { Check, Zap, Star, Target, Search, ShieldCheck } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const PpcPricingPage = () => {
    const { openModal } = useModal();

    const plans = [
        {
            name: "PPC Essential",
            price: "15%",
            minSpend: "2,000",
            fee: "750",
            desc: "Ideal for local businesses starting with Google Search Ads.",
            icon: <Search className="text-brand-cyan w-6 h-6" />,
            features: [
                "Search Network Ads",
                "Up to 2 Campaigns",
                "Keyword Research & Bidding",
                "Conversion Tracking Setup",
                "Basic Ad Copywriting",
                "Mobile Call Ad Extensions",
                "Monthly Performance Call",
                "Negative Keyword Filtering"
            ],
            cta: "Get Quick Leads",
            popular: false,
            color: "border-gray-200"
        },
        {
            name: "PPC Growth",
            price: "12%",
            minSpend: "7,500",
            fee: "1,500",
            desc: "For brands scaling reach across Search & Display networks.",
            icon: <Zap className="text-blue-600 w-6 h-6" />,
            features: [
                "Search + Display + Video",
                "Up to 6 Campaigns",
                "A/B Split Testing",
                "Remarketing Setup",
                "Dynamic Search Ads",
                "Landing Page Consultation",
                "Bi-Weekly Reporting",
                "Competitor Monitoring",
                "Merchant Center Integration"
            ],
            cta: "Maximize ROAS",
            popular: true,
            color: "border-brand-cyan ring-2 ring-brand-cyan ring-opacity-10 shadow-xl"
        },
        {
            name: "PPC Dominance",
            price: "10%",
            minSpend: "25,000",
            fee: "3,500",
            desc: "Global campaigns with full-funnel specialized management.",
            icon: <Star className="text-orange-500 w-6 h-6" />,
            features: [
                "Omni-channel Strategy",
                "Unlimited Campaigns",
                "Performance Max Optimization",
                "YouTube Advertising",
                "International Targeting",
                "Custom Script Automation",
                "Daily Budget Monitoring",
                "dedicated PPC Strategist",
                "Full Landing Page Builds"
            ],
            cta: "Dominate Market",
            popular: false,
            color: "border-gray-200"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-blue-50/50 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6 uppercase tracking-tighter">
                        Google Ads <span className="text-brand-cyan">PPC Packages</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        Stop wasting your ad spend. We optimize every dollar of your budget to ensure you get the lowest CPC and highest conversion rates possible.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                            <ShieldCheck className="text-brand-cyan w-5 h-5" /> Google Partner Certified
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                            <Target className="text-brand-cyan w-5 h-5" /> ROI-Focused Management
                        </div>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* Plans Grid */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Simple, Performance-Based Management</h2>
                    <p className="text-gray-500 font-medium">Monthly management fee is the <span className="text-gray-900 font-bold">higher</span> of the minimum flat fee OR the percentage of monthly ad spend.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx}
                            className={`p-10 rounded-3xl border transition-all duration-300 relative bg-white flex flex-col ${plan.color}`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-10 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-widest border border-white/10">
                                    Best Performance
                                </span>
                            )}
                            
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-10">
                                {plan.icon}
                            </div>
                            
                            <h3 className="text-3xl font-black text-gray-900 mb-2 tracking-tight uppercase">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                                <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">of Ad Spend</span>
                            </div>
                            
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Minimum Fee</span>
                                    <span className="text-lg font-black text-gray-900">${plan.fee}/mo</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Min. Monthly Spend</span>
                                    <span className="text-sm font-bold text-gray-600">${plan.minSpend}</span>
                                </div>
                            </div>
                            
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

            {/* Results Section */}
            <section className="py-24 bg-[#1a132b] text-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-heading mb-6 uppercase tracking-tight leading-none">
                            Our Method for <span className="text-brand-cyan">Maximum ROAS</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-medium">We follow a rigorous, data-led process to ensure every dollar of your budget works harder than your competitors.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Target Identification", desc: "Finding exactly who is searching for your services right now." },
                            { step: "02", title: "Funnel Engineering", desc: "Optimizing the path from click to conversion on your site." },
                            { step: "03", title: "Bidding Excellence", desc: "algorithmic bid management to win the best spots for less." },
                            { step: "04", title: "Constant Iteration", desc: "Refining creative and keyword targeting daily for growth." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-4xl border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 group">
                                <div className="text-4xl font-black text-brand-cyan/20 mb-6 group-hover:text-brand-cyan transition-colors">{item.step}</div>
                                <h5 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h5>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PpcPricingPage;
