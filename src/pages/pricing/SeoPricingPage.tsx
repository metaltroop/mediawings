import { useState } from 'react';
import { Check, Zap, Shield, Star, Globe } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const SeoPricingPage = () => {
    const { openModal } = useModal();
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Basic SEO",
            price: isYearly ? "4,500" : "5,000",
            desc: "Essential for small businesses looking to establish a local search presence.",
            icon: <Globe className="text-brand-cyan w-6 h-6" />,
            features: [
                "Up to 10 Keywords",
                "Local SEO Optimization",
                "Monthly Performance Report",
                "Google My Business Setup",
                "On-Page Optimization",
                "Technical SEO Audit",
                "Meta Data Updates",
                "2 High-Quality Backlinks",
                "Email Support"
            ],
            cta: "Get Started",
            popular: false,
            color: "border-gray-200"
        },
        {
            name: "Growth SEO",
            price: isYearly ? "9,000" : "10,000",
            desc: "Perfect for growing businesses aiming for competitive keyword rankings.",
            icon: <Zap className="text-purple-600 w-6 h-6" />,
            features: [
                "Up to 30 Keywords",
                "Competitor Analysis",
                "Weekly Reporting",
                "Content Marketing (2 posts)",
                "Advanced Link Building (5)",
                "Schema Markup Implementation",
                "Broken Link Repair",
                "Site Speed Optimization",
                "Priority Email & Chat Support"
            ],
            cta: "Most Popular",
            popular: true,
            color: "border-brand-cyan ring-2 ring-brand-cyan ring-opacity-10 shadow-xl"
        },
        {
            name: "Enterprise SEO",
            price: isYearly ? "18,000" : "20,000",
            desc: "Comprehensive strategy for market leaders and global organizations.",
            icon: <Star className="text-orange-500 w-6 h-6" />,
            features: [
                "Unlimited Keywords",
                "Global & Multi-lingual SEO",
                "Daily Performance Tracking",
                "Custom Content Strategy",
                "Aggressive Backlink Profile (15+)",
                "Full Technical Maintenance",
                "Quarterly Strategic Review",
                "Conversion Rate Optimization",
                "Dedicated Account Manager"
            ],
            cta: "Contact Sales",
            popular: false,
            color: "border-gray-200"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 bg-brand-lavender/30">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6">
                        SEO <span className="text-brand-cyan">Pricing Plans</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Drive more organic traffic and dominate search results with our results-driven SEO packages tailored to your business goals.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <small className={`font-bold uppercase tracking-widest ${!isYearly ? 'text-brand-cyan' : 'text-gray-400'}`}>Monthly</small>
                        <button 
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-7 bg-gray-200 rounded-full relative p-1 transition-all"
                        >
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all ${isYearly ? 'translate-x-7 bg-brand-cyan' : ''}`} />
                        </button>
                        <small className={`font-bold uppercase tracking-widest ${isYearly ? 'text-brand-cyan' : 'text-gray-400'}`}>Yearly <span className="text-pink-500">(20% OFF)</span></small>
                    </div>
                </div>
            </section>

            {/* Plans Grid */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx}
                            className={`p-10 rounded-3xl border transition-all duration-300 relative bg-white flex flex-col ${plan.color}`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-10 -translate-y-1/2 bg-brand-cyan text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                                    Best Value
                                </span>
                            )}
                            
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-black text-gray-900 tracking-tighter">${plan.price}</span>
                                <span className="text-gray-500 font-bold">/mo</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">{plan.desc}</p>
                            
                            <div className="space-y-4 mb-10 grow">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                            <Check className="text-brand-cyan w-3 h-3 stroke-[3px]" />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={openModal}
                                className={`w-full py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 ${plan.popular ? 'bg-brand-cyan text-white shadow-lg hover:shadow-brand-cyan/30' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer comparison info */}
                <div className="mt-20 text-center text-gray-400 text-sm font-medium">
                    <p>All plans include a dedicated account lead and monthly strategy sessions. Custom enterprise plans available upon request.</p>
                </div>
            </section>

            {/* FAQ Strip */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Transparent Pricing", desc: "No hidden fees or unexpected costs. What you see is what you pay." },
                            { title: "Cancel Anytime", desc: "We believe in earning your business every month. No long-term contracts." },
                            { title: "Proven ROI", desc: "Our strategies are focused on driving actual revenue, not just vanity metrics." },
                            { title: "Expert Support", desc: "Direct access to SEO specialists who understand your industry." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <Shield className="text-brand-cyan w-6 h-6 shrink-0" />
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeoPricingPage;
