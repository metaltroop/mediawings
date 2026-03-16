import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, Users, Target, TrendingUp, BarChart3, Zap, Globe2, ShieldCheck, DollarSign, PieChart, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const MAXIMIZE_CARDS = [
    { title: 'Data Analytics', desc: 'Uncover deep insights from your business data to identify high-revenue opportunities and trends.', bgColor: 'bg-[#fff1f2]', icon: '📊' },
    { title: 'Price Optimization', desc: 'Strategic pricing models designed to maximize margins while remaining competitive in your market.', bgColor: 'bg-[#fffbeb]', icon: '🏷️' },
    { title: 'Funnel Mastery', desc: 'Optimizing Every touchpoint in your sales journey to increase conversion values and customer lifetime value.', bgColor: 'bg-[#f0f9ff]', icon: '🧪' },
    { title: 'Audience Scaling', desc: 'Identifying and reaching new high-value segments that are most likely to drive consistent revenue growth.', bgColor: 'bg-[#f5f3ff]', icon: '🚀' },
    { title: 'Revenue Recovery', desc: 'Implementing advanced strategies to win back lost customers and recover abandoned sales opportunities.', bgColor: 'bg-[#f5f3ff]', icon: '🔄' },
    { title: 'Customer LTV', desc: 'Scaling the long-term value of your existing customers through strategic upsells and retention paths.', bgColor: 'bg-[#f0f9ff]', icon: '💎' },
    { title: 'Market Expansion', desc: 'Strategic entry into new markets and channels to diversify your revenue streams and scale globally.', bgColor: 'bg-[#fffbeb]', icon: '🌍' },
    { title: 'Churn Reduction', desc: 'Advanced analytics to predict and prevent customer churn, ensuring a stable and growing revenue foundation.', bgColor: 'bg-[#fff1f2]', icon: '📉' },
];

const FAQS = [
    {
        question: "What are revenue generation services?",
        answer: "Revenue generation services are a holistic set of strategies aimed at identifying and capitalizing on growth opportunities across your entire business ecosystem. This includes everything from acquisition scaling to LTV optimization."
    },
    {
        question: "How long does it take to see a lift in revenue?",
        answer: "While quick wins in funnel optimization can be seen in weeks, sustainable and scalable revenue growth typically builds over 3-6 months as we implement and refine long-term strategies."
    },
    {
        question: "Is this only for eCommerce businesses?",
        answer: "No, our revenue generation strategies are applicable to B2B SaaS, service-based businesses, and established enterprises. We tailor the methodology to your specific business model."
    },
    {
        question: "How do you track actual revenue impact?",
        answer: "We implement deep attribution tracking that connects marketing efforts directly to bottom-line revenue, ensuring every dollar spent is accountable for a measurable return."
    }
];

const RevenueGenerationPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#fffbeb] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Revenue Generating <span className="text-brand-cyan">Services</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Scale your business beyond benchmarks. We deploy data-centric growth frameworks 
                            that turn your marketing spend into a high-performance revenue engine.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Maximize Your Revenue
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Growth Leaders", sub: "Top 1% Agency" },
                            { img: company2, text: "High ROI", sub: "Verified Results" },
                            { img: company3, text: "Strategic", sub: "Clutch Partner" },
                            { img: company4, text: "Scale Experts", sub: "Fortune 500" }
                        ].map((badge, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-4 min-w-[200px] border border-gray-100 hover:border-brand-cyan/30 transition-all duration-300">
                                <img src={badge.img} alt="Rating" className="h-8 object-contain" />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 text-sm">{badge.text}</div>
                                    <div className="text-xs text-gray-500">{badge.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Maximize Revenue Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900">
                            How Do We Maximize Revenue?
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Our proprietary frameworks focus on the three pillars of growth: 
                            Acquisition, Optimization, and Retention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {MAXIMIZE_CARDS.map((card, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${card.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{card.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Performance Stats Strip */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: DollarSign, stat: "$500m+", label: "Client Revenue Managed" },
                            { icon: ArrowUpRight, stat: "35x", label: "Max Campaign ROAS" },
                            { icon: PieChart, stat: "92%", label: "Market Share Increase" },
                            { icon: Users, stat: "10m+", label: "New Customers Acquired" },
                            { icon: ShieldCheck, stat: "Top 1%", label: "Growth Performance" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: Target, title: "Intent Mapping", desc: "Targeting users exactly when they are most likely to convert through deep behavior analysis." },
                            { icon: BarChart3, title: "LTV Scaling", desc: "Advanced strategies to maximize the total revenue earned from every single customer." },
                            { icon: Zap, title: "Hyper-Scaling", desc: "Scientific scaling protocols to increase ad spend while maintaining healthy profitability." },
                            { icon: Globe2, title: "Global Reach", desc: "Expanding your revenue footprint across new geographic territories and languages." },
                            { icon: ShieldCheck, title: "Profit Protection", desc: "Continuous monitoring of margins and costs to ensure revenue growth is actually profitable." },
                            { icon: TrendingUp, title: "Conversion Lift", desc: "Aggressive optimization of your entire sales funnel to squeeze more value from every visitor." },
                            { icon: Users, title: "Retention Paths", desc: "Strategic customer journeys designed to keep users engaged and buying for years, not days." },
                            { icon: DollarSign, title: "Revenue Recovery", desc: "Automated systems to recapture missed sales opportunities and abandoned interest." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 uppercase leading-tight">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Strategy & Audit analysis", icon: "📊", color: "bg-red-50" },
                            { title: "Funnel & LTV Optimization", icon: "🎯", color: "bg-blue-50" },
                            { title: "Scale Up Strategy", icon: "🚀", color: "bg-cyan-50" },
                            { title: "CRM & Discovery monetization", icon: "💎", color: "bg-purple-50" }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6 relative group hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                                <div className="bg-brand-cyan text-white text-xs font-black px-3 py-1 rounded-full uppercase">Step 0{idx + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Detailed Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Revenue Generation Framework</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Revenue generation isn't just about traffic—it's about the bottom line. Our 
                                comprehensive framework looks at your entire business model to identify 
                                efficiencies and growth levers that others miss.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Unlocking Growth Potential</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We dive deep into your historical data to find untapped markets and 
                                    customer segments. Our strategy is built on scaling what works while 
                                    aggressively testing new revenue streams to ensure your growth never plateaus.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Maximizing Every Lead</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A lead is only as valuable as the revenue they generate. We optimize 
                                    your entire customer journey to increase the average order value and 
                                    frequency of purchase, ensuring you get the absolute maximum ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-24 bg-gray-50 text-black">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16 uppercase">
                        Frequently asked questions
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {FAQS.map((faq, index) => (
                            <div 
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-brand-cyan shadow-md bg-white' : 'border-gray-200 bg-white hover:border-brand-cyan/50'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-hidden"
                                >
                                    <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                    <span className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'text-brand-cyan rotate-180' : 'text-gray-400'}`}>
                                        {openFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </span>
                                </button>
                                
                                <div 
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{ 
                                        maxHeight: openFaq === index ? '500px' : '0',
                                        opacity: openFaq === index ? 1 : 0,
                                        paddingBottom: openFaq === index ? '24px' : '0'
                                    }}
                                >
                                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Contact Form */}
            <section className="py-24 bg-[#f3f0ff]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-gray-900 uppercase">
                        Lets Get Project Started
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Email address" />
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Interest</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Scaling', 'Optimization', 'Market Exit', 'Funnel Design', 'Data Audit', 'LTV Strategy'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Start Scaling Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RevenueGenerationPage;
