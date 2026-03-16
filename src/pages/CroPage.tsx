import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, Users, Target, TrendingUp, Search, MousePointer2, BarChart3, Settings, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const CRO_INCLUDE_CARDS = [
    { title: 'Audit', desc: 'A thorough audit of your website to identify performance bottlenecks and conversion killers.', bgColor: 'bg-[#fff1f2]', icon: '📋' },
    { title: 'Performance Review', desc: 'Analyzing site speed and technical performance across different devices and browsers.', bgColor: 'bg-[#fffbeb]', icon: '⚡' },
    { title: 'Quantitative Analysis', desc: 'Deep diving into data to understand how users navigate through your conversion funnels.', bgColor: 'bg-[#f0f9ff]', icon: '📊' },
    { title: 'Qualitative Research', desc: 'Understanding the "why" behind user behavior through heatmaps, recordings, and surveys.', bgColor: 'bg-[#f5f3ff]', icon: '🧠' },
    { title: 'Conversion Copywriting', desc: 'Crafting persuasive copy that resonates with your audience and drives them to take action.', bgColor: 'bg-[#f5f3ff]', icon: '✍️' },
    { title: 'User Experience', desc: 'Improving the overall flow and usability of your site to reduce friction and increase satisfaction.', bgColor: 'bg-[#f0f9ff]', icon: '🎯' },
    { title: 'A/B Testing', desc: 'Running scientific tests to validate hypotheses and identify the most effective design changes.', bgColor: 'bg-[#fffbeb]', icon: '🧪' },
];

const FAQS = [
    {
        question: "What is Conversion Rate Optimization (CRO)?",
        answer: "CRO is the systematic process of increasing the percentage of website visitors who take a desired action—be it purchasing a product, signing up for a service, or filling out a form."
    },
    {
        question: "How long does it take to see results from CRO?",
        answer: "While initial insights can be found within the first month, significant and statistically relevant improvements usually take 3-6 months as we test and iterate."
    },
    {
        question: "Do I need a lot of traffic for CRO?",
        answer: "While higher traffic allows for faster testing, CRO is valuable for any business. For lower traffic sites, we focus more on qualitative research and high-impact usability improvements."
    },
    {
        question: "How do you decide what to test?",
        answer: "Our testing roadmap is data-driven. We use a combination of analytics, heatmaps, user recordings, and competitive analysis to prioritize changes with the highest potential impact."
    }
];

const CroPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#f0f9ff] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Conversion <span className="text-brand-cyan">Problems?</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Stop losing customers to a leaky funnel. We help you identify hidden friction points 
                            on your website and transform passive visitors into active customers.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Free CRO Audit
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Top Agency", sub: "Google Certified" },
                            { img: company2, text: "Excellent", sub: "Trustpilot" },
                            { img: company3, text: "Verified", sub: "Clutch Reviews" },
                            { img: company4, text: "ROI Driven", sub: "Case Studies" }
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

            {/* 2. Include Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900">
                            What does CRO include?
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            A comprehensive approach to conversion optimization that covers everything 
                            from technical data to human psychology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {CRO_INCLUDE_CARDS.map((card, idx) => (
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
                            { icon: TrendingUp, stat: "400%", label: "Average Revenue Lift" },
                            { icon: Target, stat: "50%+", label: "Conv. Rate Improvements" },
                            { icon: MousePointer2, stat: "10k+", label: "Experiments Run" },
                            { icon: Layers, stat: "500+", label: "Landing Pages Built" },
                            { icon: ShieldCheck, stat: "98%", label: "Customer Satisfaction" }
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
                            { icon: Search, title: "Heatmap Analysis", desc: "See exactly where users are clicking, scrolling, and getting stuck on your pages." },
                            { icon: Users, title: "User Feedback", desc: "Gain direct insights from your actual customers through targeted surveys and polls." },
                            { icon: BarChart3, title: "Funnel Tracking", desc: "Identify the exact step in your customer journey where users drop off and why." },
                            { icon: Settings, title: "Technical Audit", desc: "Ensure your site is fast, responsive, and free of technical bugs that kill conversions." },
                            { icon: MousePointer2, title: "Click Tracking", desc: "Monitor every interaction to see which elements are helping or hurting your goals." },
                            { icon: RefreshCw, title: "A/B Testing", desc: "Scientific validation of every change to ensure it actually improves your bottom line." },
                            { icon: Zap, title: "Form Optimization", desc: "Streamline your sign-up and checkout processes to reduce friction and abandonments." },
                            { icon: Layers, title: "Competitor Benchmarking", desc: "Compare your conversion performance against industry leaders and benchmarks." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 leading-tight">{item.title}</h4>
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
                            { title: "Evaluation & Audit analysis", icon: "🔍", color: "bg-blue-50" },
                            { title: "Strategy & Roadmap", icon: "🗺️", color: "bg-purple-50" },
                            { title: "UX Testing & Implementation", icon: "🖋️", color: "bg-cyan-50" },
                            { title: "Launch & Analysis", icon: "📊", color: "bg-indigo-50" }
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Conversion Rate Optimization Services</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At Mediawings, we don't just guess what works—we prove it. Our CRO methodology is built 
                                on a foundation of rigorous data analysis and deep psychological insights. We transform 
                                your website from a digital brochure into a high-performance sales machine.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Identify Friction Points</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every click, scroll, and hover tells a story. We use advanced tracking tools to 
                                understand exactly where your users are getting confused, frustrated, or bored. 
                                By removing these friction points, we clear the path for your customers to take action.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific A/B Testing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We never implement a change without knowing its impact. Our A/B testing framework 
                                ensures that every design modification, new headline, or updated CTA is 
                                statistically proven to increase your conversion rate before it goes live globally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
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

            {/* 8. Contact Form */}
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
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Email address" />
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">What service are you interested in?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['CRO Audit', 'A/B Testing', 'Landing Pages', 'UX Design', 'Funnel Tracking', 'Lead Gen'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CroPage;
