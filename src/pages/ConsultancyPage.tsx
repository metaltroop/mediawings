import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, ShieldCheck, BarChart3, Target, Users, Lightbulb, Briefcase, FileSearch, PieChart } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const OFFERING_CARDS = [
    { title: 'Marketing Audit', desc: 'Comprehensive assessment of your current marketing efforts, identified gaps, and identified opportunities for immediate growth.', bgColor: 'bg-[#fff1f2]', icon: '📋' },
    { title: 'ROI Strategy', desc: 'Developing data-driven roadmaps that focus on maximizing your marketing spend and increasing profitability across all channels.', bgColor: 'bg-[#fffbeb]', icon: '📈' },
    { title: 'Digital Transformation', desc: 'Guiding your business through the complexities of modernizing your marketing stack and digital customer experience.', bgColor: 'bg-[#f0f9ff]', icon: '🌐' },
    { title: 'Branding Technology', desc: 'Integrating cutting-edge marketing technology (MarTech) to automate processes and gain deeper audience insights.', bgColor: 'bg-[#f5f3ff]', icon: '💻' },
    { title: 'Operation Management', desc: 'Optimizing your internal marketing workflows, team structures, and resource allocation for maximum efficiency.', bgColor: 'bg-[#f5f3ff]', icon: '⚙️' },
    { title: 'Data Privacy & Compliance', desc: 'Ensuring your marketing activities are fully compliant with global data protection regulations (GDPR, CCPA) while maintaining effectiveness.', bgColor: 'bg-[#f0f9ff]', icon: '🛡️' },
    { title: 'Content Strategy', desc: 'Developing a cohesive content framework that builds authority, engages your audience, and drives long-term organic growth.', bgColor: 'bg-[#fffbeb]', icon: '✍️' },
    { title: 'Global Expansion', desc: 'Strategic guidance on entering new international markets, including cultural adaptation and localized marketing planning.', bgColor: 'bg-[#fff1f2]', icon: '🌍' },
];

const FAQS = [
    {
        question: "Why should I hire a CMO consultancy versus a full-time CMO?",
        answer: "CMO consultancy provides you with high-level strategic expertise without the long-term overhead of a full-time executive. It's ideal for businesses in transition, those needing fresh perspectives, or those not yet ready for a permanent C-level marketing hire."
    },
    {
        question: "What industries do you specialize in?",
        answer: "While our methodology is data-driven and adaptable, we have deep experience in B2B SaaS, eCommerce, Professional Services, and Technology sectors globally."
    },
    {
        question: "How long is a typical consultancy engagement?",
        answer: "Engagements vary based on needs. They can range from 3-month focused audits and strategy sprints to long-term retained partnerships where we act as your fractional CMO."
    },
    {
        question: "Do you help with implementation or just strategy?",
        answer: "We offer both. While our core is strategic guidance, we provide full support in oversaw implementation, managing vendors, and training your internal team to execute the strategy effectively."
    }
];

const ConsultancyPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#fff1f2] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            CMO Consultancy <span className="text-brand-cyan">Services</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            High-level strategic marketing leadership to navigate your brand's growth. 
                            We provide the vision, strategy, and roadmap for market-defining success.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Strategic Audit
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Strategic Leader", sub: "15+ Years Exp" },
                            { img: company2, text: "Top Rated", sub: "Clutch Reviews" },
                            { img: company3, text: "Verified", sub: "Trusted Partner" },
                            { img: company4, text: "ROI Focused", sub: "Growth Experts" }
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

            {/* 2. Offerings Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                            CMO Consultancy service offerings
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Tailored strategic solutions designed to solve your most complex 
                            marketing challenges and unlock hidden growth potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {OFFERING_CARDS.map((card, idx) => (
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

            {/* 3. Stats Strip */}
            <section className="py-20 bg-[#1a132b] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Briefcase, stat: "15+", label: "Avg. Years Experience" },
                            { icon: Users, stat: "500+", label: "Brands Consulted" },
                            { icon: PieChart, stat: "98%", label: "Strategic Map success" },
                            { icon: Target, stat: "$40M", label: "Client Ad spend managed" },
                            { icon: Lightbulb, stat: "50+", label: "Proprietary Growth playbooks" }
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

            {/* 4. Methodology/Why Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Strategic Marketing Partner</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    In today's fast-paced digital landscape, a "scattergun" approach to marketing no longer works. 
                                    You need a cohesive, data-backed strategy that aligns with your business objectives.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Deep-dive market & competitor analysis",
                                        "Brand positioning & messaging framework",
                                        "Full-funnel optimization strategy",
                                        "MarTech stack evaluation & integration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-4xl border border-gray-100 flex flex-col gap-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-cyan">
                                        <Lightbulb />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Growth Partner</h4>
                                        <p className="text-gray-600 text-sm">We don't just act as consultants; we become an extension of your leadership team.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-cyan">
                                        <FileSearch />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Audit first approach</h4>
                                        <p className="text-gray-600 text-sm">We believe in diagnosing before prescribing. Every engagement starts with a thorough audit.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-cyan">
                                        <BarChart3 />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Data-Driven Outcomes</h4>
                                        <p className="text-gray-600 text-sm">Every strategic recommendation is backed by industry data and proprietary research.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="py-24 bg-gray-50 text-black">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
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

            {/* 6. Contact Form */}
            <section className="py-24 bg-[#f3f0ff]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-gray-900">
                        Lets Get Project Started
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Full name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="work@email.com" />
                                </div>
                            </div>
                            
                            <div className="pt-4 text-black">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Service</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Full Audit', 'ROI Strategy', 'MarTech Help', 'Brand Strategy', 'Compliance', 'Fractional CMO'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Connect With An Expert
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ConsultancyPage;
