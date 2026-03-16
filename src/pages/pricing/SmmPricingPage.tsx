import { useState } from 'react';
import { Check, Zap, Star, Layout, Users, MessageCircle, BarChart3, Camera } from 'lucide-react';
import { useModal } from '../../contexts/ModalContext';

const SmmPricingPage = () => {
    const { openModal } = useModal();
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Social Starter",
            price: isYearly ? "700" : "850",
            desc: "Ideal for small businesses needing a consistent social presence.",
            icon: <MessageCircle className="text-brand-cyan w-6 h-6" />,
            features: [
                "2 Social Platforms",
                "12 Posts Per Month",
                "Basic Graphic Design",
                "Hashtag Optimization",
                "Community Engagement (1hr/day)",
                "Monthly Performance Report",
                "Dedicated Social Manager",
                "Content Calendar Approval"
            ],
            cta: "Get Started",
            popular: false,
            color: "border-gray-200"
        },
        {
            name: "Social Pro",
            price: isYearly ? "1,500" : "1,800",
            desc: "For brands ready to scale engagement and drive conversions.",
            icon: <Zap className="text-pink-600 w-6 h-6" />,
            features: [
                "4 Social Platforms",
                "20 Posts Per Month",
                "Reels & Short-form Video (4)",
                "Paid Ad Management ($1k Spend)",
                "Influencer Outreach (3/mo)",
                "Detailed Analytics & Tracking",
                "Contest & Giveaway Management",
                "Priority Community Response",
                "Brand Voice Development"
            ],
            cta: "Scale Now",
            popular: true,
            color: "border-brand-cyan ring-2 ring-brand-cyan ring-opacity-10 shadow-xl"
        },
        {
            name: "Social Elite",
            price: isYearly ? "3,200" : "4,000",
            desc: "Full-service social media department for established brands.",
            icon: <Star className="text-orange-500 w-6 h-6" />,
            features: [
                "Unlimited Platforms",
                "Daily Content Creation",
                "High-End Video Production",
                "Paid Ad Management (Any Spend)",
                "Weekly Influencer Campaigns",
                "Real-time Social Listening",
                "Custom Content Shoots",
                "Crisis Management Protocol",
                "Conversion Funnel Integration"
            ],
            cta: "Contact Elite",
            popular: false,
            color: "border-gray-200"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-pink-50/50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-gray-900 mb-6 uppercase tracking-tighter">
                        Social Media <span className="text-brand-cyan">Packages</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Build tribe, amplify your brand voice, and drive massive engagement with our data-driven social media management solutions.
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
                        <small className={`font-bold uppercase tracking-widest ${isYearly ? 'text-brand-cyan' : 'text-gray-400'}`}>Yearly <span className="text-brand-red font-black">(Save 20%)</span></small>
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
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-widest">
                                    Highly Recommended
                                </span>
                            )}
                            
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-10">
                                {plan.icon}
                            </div>
                            
                            <h3 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black text-gray-900 tracking-tighter">${plan.price}</span>
                                <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">/ Month</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium">{plan.desc}</p>
                            
                            <div className="space-y-5 mb-12 grow">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="text-brand-cyan w-3 h-3 stroke-[4px]" />
                                        </div>
                                        <span className="text-gray-600 text-sm font-bold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={openModal}
                                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-sm ${plan.popular ? 'bg-brand-cyan text-white shadow-xl hover:shadow-brand-cyan/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Us Strip */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black font-heading mb-8 uppercase leading-tight">
                                Our Social <span className="text-brand-cyan italic">Philosophy</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                                We don't just post content; we build communities. Our focus is on meaningful engagement that translates into brand loyalty and actual sales revenue.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { icon: <Layout />, title: "Visual Excellence", desc: "First impressions are everything on social media." },
                                    { icon: <Users />, title: "Community First", desc: "Humanizing your brand to build real trust." },
                                    { icon: <BarChart3 />, title: "Data Driven", desc: "Constant optimization based on real performance." },
                                    { icon: <Camera />, title: "Original Shoots", desc: "Unique, high-quality content that stands out." }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="text-brand-cyan w-8 h-8 opacity-80">{item.icon}</div>
                                        <h5 className="font-bold text-white uppercase text-sm tracking-wide">{item.title}</h5>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="aspect-square bg-white/5 rounded-[4rem] flex items-center justify-center p-12 border border-white/10">
                                <div className="text-center">
                                    <div className="text-7xl font-black text-brand-cyan mb-4 tracking-tighter">98%</div>
                                    <div className="text-xl font-bold uppercase tracking-widest mb-2">Engagement Boost</div>
                                    <div className="text-gray-500 text-sm max-w-xs mx-auto">Average engagement increase across our client portfolio within the first 3 months.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SmmPricingPage;
