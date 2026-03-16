import { useModal } from '../contexts/ModalContext';
import { LayoutGrid, Star, Plus, Minus, Users, Globe2, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const CATEGORIES = [
    { title: 'Entertainment & Comedy Plus', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff0f4]', icon: '🎭' },
    { title: 'Lifestyle & Care', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fffbeb]', icon: '✨' },
    { title: 'Travel & Vacations', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f0fbff]', icon: '✈️' },
    { title: 'Beauty & Fashion', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f3f0ff]', icon: '👗' },
    { title: 'Technology', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#f3f0ff]', icon: '⚙️' },
    { title: 'Food Lovers', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#eef2ff]', icon: '🍔' },
    { title: 'Health & Fitness', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff7ed]', icon: '🏋️' },
    { title: 'Educators', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', bgColor: 'bg-[#fff0f4]', icon: '👨‍🏫' },
];

const FAQS = [
    {
        question: "What is an influencer marketing agency and what do they do?",
        answer: "An influencer marketing agency pairs brands with relevant social media influencers to create campaigns that reach target audiences organically. They handle everything from influencer discovery and outreach to campaign management, contract negotiation, and ROI tracking."
    },
    {
        question: "Can influencer marketing be effective for B2B brands?",
        answer: "Yes, heavily. While B2C often uses Instagram or TikTok, B2B influencer marketing thrives on platforms like LinkedIn or via industry-specific podcasts and blogs. Integrating thought leaders can exponentially increase B2B brand trust and lead generation."
    },
    {
        question: "Do you only work with large scale or celebrity influencers?",
        answer: "No. We work with macro, micro, and nano-influencers depending on the campaign goals. Often, micro-influencers (10k-50k followers) boast much higher engagement rates and niche audience trust than massive celebrity accounts."
    },
    {
        question: "Why should I hire you if I can reach out to influencers myself?",
        answer: "Managing a successful campaign requires vetting for fake followers, negotiating fair rates, coordinating creative briefs, scaling communications, and tracking robust analytics—all of which require dedicated agency tools and expertise to ensure your budget isn't wasted."
    },
    {
        question: "How do you measure the ROI of an influencer marketing campaign?",
        answer: "We establish clear KPIs before the campaign begins. Common metrics include engagement rates, click-through rates (CTR) via custom UTM links or promo codes, cost per acquisition (CPA), brand sentiment, and overall reach/impressions."
    }
];

const InfluencerPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#e6fff5] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <Star className="w-4 h-4" />
                            <span>Top Rated Influencer Agency</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Influencer <span className="text-brand-cyan">Marketing Agency</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            The smartest, most measurable way to connect your brand with millions of consumers worldwide. Partner with top content creators to build trust, authority, and massive scale.
                        </p>

                        <button
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Proposal
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

            {/* 2. Influencer Categories Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            We can help with these influencer<br />categories:
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            Mediawings has partnered with the top influencers across the globe to boost your brand awareness and ROI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {CATEGORIES.map((category, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${category.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{category.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{category.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Dark Performance Strip */}
            <section className="py-20 bg-[#1a1423] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Building Visibility That Lasts</h2>
                    <p className="text-gray-300 mb-16 max-w-4xl mx-auto text-lg leading-relaxed">
                        With Mediawings, you can build connections that last. We place your brand in front of millions
                        of actual customers, turning cold prospects into brand loyalists. Here's a glimpse of the
                        reach we bring to your brand.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Users, stat: "10k+", label: "Influencers Network" },
                            { icon: Globe2, stat: "100M+", label: "Total Reach Generated" },
                            { icon: Star, stat: "98%", label: "Client Retention Rate" },
                            { icon: LayoutGrid, stat: "500+", label: "Successful Campaigns" },
                            { icon: Clock, stat: "10+", label: "Years In Industry" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{item.stat}</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Success Stories Carousel */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                            Success Stories
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-4">
                            Every successful project tells an interesting story about how they transformed their business.
                        </p>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            The advanced metrics across multiple dimensions driving key business insights.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Carousel Track */}
                        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                            {[
                                { logo: company1, text: "We needed robust integration frameworks. Mediawings seamlessly connected our systems reducing friction.", link: "#" },
                                { logo: company2, text: "An absolute game changer for our mobile applications. They helped our team scale with amazing efficiency.", link: "#" },
                                { logo: company3, text: "Increased our online sales by over 150% in the first quarter itself thanks to their organic growth hacks.", link: "#" }
                            ].map((story, i) => (
                                <div key={i} className="shrink-0 w-full md:w-[600px] h-[300px] bg-[#f0fbff] rounded-3xl p-10 flex flex-col items-center justify-center text-center snap-center border border-[#e6f4f9] shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
                                    <div className="relative z-10 flex flex-col items-center h-full w-full">
                                        <div className="h-12 w-24 bg-white rounded-lg shadow-xs flex items-center justify-center mb-8 px-4 border border-gray-100">
                                            <img src={story.logo} alt="Company" className="max-h-8 max-w-full object-contain" />
                                        </div>
                                        <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-auto">
                                            "{story.text}"
                                        </p>
                                        <a href={story.link} className="text-brand-cyan font-bold flex items-center gap-1 hover:gap-2 transition-all mt-6 text-sm uppercase tracking-wide">
                                            Read Full Case Study <ChevronRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls (Visual only for now, auto-scroll via CSS snap) */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-cyan hover:bg-brand-cyan hover:text-white transition-colors">
                                <Minus className="w-5 h-5 rotate-90" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-cyan hover:bg-brand-cyan hover:text-white transition-colors">
                                <span className="transform rotate-180"><Minus className="w-5 h-5 rotate-90" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Why Influencers Marketing (Text List) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-gray-900">
                            Why Influencers Marketing
                        </h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    Trust & Credibility
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Influencers have spent years building a loyal following who trust their recommendations.
                                    By partnering with them, you can leverage that trust and establish your brand's credibility.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    Targeted Reach
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Traditional advertising often has a broad reach but low targeting options. With influencers,
                                    you can specifically target your ideal audience based on their demographics, interests, and niche.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    Content Creation
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Influencers are masters at creating engaging content that resonates with their audience. They can
                                    help you create high-quality, authentic user-generated content that effectively promotes your brand.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    Brand Awareness
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    By partnering with influencers, you can tap into their massive following and significantly increase
                                    your brand's visibility and reach. It helps to keep your brand top of mind among potential customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Accordion */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Everything you need to know about our Influencer Marketing services and pricing.
                        </p>
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

            {/* 6. Contact Form (Lets Get Project Started) */}
            <section className="py-24 bg-brand-cyan/5">
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
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Your Company" />
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">What service are you interested in?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['SEO', 'Web Development', 'Performance Marketing', 'Social Media Management', 'Influencer Marketing', 'Digital PR'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none" placeholder="Tell us about your project goals..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg">
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InfluencerPage;
