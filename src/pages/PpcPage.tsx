import { useModal } from '../contexts/ModalContext';
import { LayoutGrid, Star, Plus, Minus, Users, Globe2, Clock, Megaphone, Target, BarChart3, Search, ShoppingCart, MousePointer2, Briefcase, Zap } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const AD_NETWORKS = [
    { title: 'Google Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff0f4]', icon: '🔍' },
    { title: 'Microsoft Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fffbeb]', icon: '💻' },
    { title: 'YouTube Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f0fbff]', icon: '🎥' },
    { title: 'Facebook Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f3f0ff]', icon: '👥' },
    { title: 'Instagram Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f3f0ff]', icon: '📸' },
    { title: 'LinkedIn Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#eef2ff]', icon: '💼' },
    { title: 'Twitter Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff7ed]', icon: '🐦' },
    { title: 'Amazon Ads', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff0f4]', icon: '🛒' },
];

const FAQS = [
    {
        question: "What is pay-per-click (PPC)?",
        answer: "PPC is an online advertising model where advertisers pay a fee each time one of their ads is clicked. Essentially, it's a way of buying visits to your site, rather than attempting to earn those visits organically."
    },
    {
        question: "Why should I use PPC?",
        answer: "PPC offers immediate visibility on search engines and social platforms. It allows for precise targeting, measurable ROI, and the ability to scale your marketing efforts quickly based on performance data."
    },
    {
        question: "How do you measure a successful PPC campaign?",
        answer: "Success is measured through various KPIs including Click-Through Rate (CTR), Conversion Rate, Cost Per Click (CPC), and most importantly, Return on Ad Spend (ROAS)."
    },
    {
        question: "Google ads vs social ads: which is better?",
        answer: "It depends on your goals. Google Ads are great for capturing intent (users searching for specific products), while social ads are excellent for audience targeting and brand awareness. Often, a combination of both is most effective."
    },
    {
        question: "How long does it take to see results from PPC?",
        answer: "Unlike SEO, PPC can show results almost immediately. Once your campaign is approved and goes live, your ads can start appearing and driving traffic to your site on day one."
    }
];

const PpcPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#fff0f4] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#ff3b71]/20 text-[#ff3b71] text-sm font-semibold mb-8">
                            <Zap className="w-4 h-4" />
                            <span>Fast Results with Targeted PPC</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            PPC Company <span className="text-brand-cyan">In India</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Scale your business with data-driven PPC strategies. We help you reach your ideal customers 
                            exactly when they are looking for your products or services, ensuring maximum ROI and growth.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Request A Proposal
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "5.0/5 Ratings", sub: "150+ Reviews" },
                            { img: company2, text: "4.9/5 Ratings", sub: "Top Agency" },
                            { img: company3, text: "4.8/5 Ratings", sub: "Excellent" },
                            { img: company4, text: "5.0/5 Ratings", sub: "Top Rated" }
                        ].map((badge, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-4 min-w-[200px] border border-gray-100 hover:border-brand-cyan/30 hover:-translate-y-1 transition-all duration-300">
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

            {/* 2. Ad Networks Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            Popular PPC Ad Networks
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            We manage campaigns across all major advertising platforms to ensure your brand 
                            appears wherever your potential customers are spending their time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {AD_NETWORKS.map((network, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${network.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {network.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{network.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{network.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Dark Performance Strip */}
            <section className="py-20 bg-[#1a1423] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Clock, stat: "10+", label: "Years in business experience" },
                            { icon: Globe2, stat: "160+", label: "The team is abroad for services" },
                            { icon: Users, stat: "98%", label: "Clients good cooperation" },
                            { icon: LayoutGrid, stat: "500+", label: "Projects are completed correctly" },
                            { icon: Star, stat: "10k+", label: "The term is good for business" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process / Why Choose Us Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: Target, title: "Precision Targeting", desc: "Reach your audience based on location, age, interests, and precise search intent." },
                            { icon: BarChart3, title: "Data-Driven ROI", desc: "Every dollar is tracked. We focus on conversion metrics to maximize your return on ad spend." },
                            { icon: Megaphone, title: "Creative Ad Management", desc: "From compelling copy to eye-catching visuals, we manage the entire creative process." },
                            { icon: Search, title: "Comprehensive Keywords", desc: "Deep research to identify high-converting keywords that your competitors might miss." },
                            { icon: MousePointer2, title: "Landing Page Optimization", desc: "We ensure your traffic lands on high-converting pages designed for goal completion." },
                            { icon: Briefcase, title: "Strategic Bid Management", desc: "Advanced bidding strategies to get the most out of your budget, 24/7." },
                            { icon: ShoppingCart, title: "eCommerce Specialization", desc: "Tailored strategies for online stores, including Google Shopping and dynamic remarketing." },
                            { icon: Zap, title: "Quick Setup & Launch", desc: "Get your campaigns live and generating traffic within days, not weeks." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-[#ff3b71]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 uppercase leading-snug">{item.title}</h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Detailed Content Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-20">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Search Ads</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Search ads allow your brand to appear at the very top of Google and Bing when users search for keywords 
                                related to your business. This is the most effective way to capture high-intent traffic ready to buy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Display and Video Ads</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Reach your audience visually across millions of websites and YouTube. Display and video ads are perfect 
                                for building brand awareness and staying top-of-mind through remarketing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">eCommerce Ads</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Maximize your online sales with Google Shopping and Facebook Dynamic Ads. We help you showcase your products 
                                directly to shoppers at the moment of peak interest.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Accordion */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-500 text-lg">Detailed answers to your most common PPC inquiries.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {FAQS.map((faq, index) => (
                            <div 
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-brand-cyan shadow-md bg-white' : 'border-gray-200 bg-gray-50 hover:border-brand-cyan/50'}`}
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

            {/* 7. Contact Form */}
            <section className="py-24 bg-[#fff0f4]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-gray-900">
                        Lets Get Project Started
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">What service are you interested in?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['SEO', 'PPC Ads', 'Web Development', 'Performance Marketing', 'Social Media Management', 'Influencer Marketing'].map((service) => (
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

export default PpcPage;
