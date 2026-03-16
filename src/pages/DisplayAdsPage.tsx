import { useModal } from '../contexts/ModalContext';
import { Star, Plus, Minus, Users, Globe2, Clock, Target, BarChart3, Search, Briefcase, Zap, Image, Video, Monitor, Layout } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const PLATFORMS = [
    { title: 'Google Display Network', desc: 'Reach over 90% of internet users across millions of websites, news pages, blogs, and Google sites like Gmail and YouTube.', bgColor: 'bg-[#fff0f4]', icon: '🌐' },
    { title: 'YouTube Advertising', desc: 'Connect with viewers on the world\'s largest video platform through skippable, non-skippable, and discovery video ads.', bgColor: 'bg-[#fffbeb]', icon: '🎥' },
    { title: 'Facebook Ads', desc: 'Target your ideal audience on the world\'s largest social network with highly visual and engaging display and video placements.', bgColor: 'bg-[#f0fbff]', icon: '👥' },
    { title: 'Instagram Ads', desc: 'Drive engagement and conversions on the most visual social platform with beautiful image, video, and story advertisements.', bgColor: 'bg-[#f3f0ff]', icon: '📸' },
    { title: 'LinkedIn Advertising', desc: 'Reach professionals and decision-makers with sponsored content, message ads, and text ads targeted by job title and industry.', bgColor: 'bg-[#f3f0ff]', icon: '💼' },
    { title: 'Programmatic Display', desc: 'Automated, real-time bidding for ad space that uses data-driven insights to target the right user at the right time.', bgColor: 'bg-[#eef2ff]', icon: '⚙️' },
    { title: 'Native Advertising', desc: 'Ads that match the look, feel, and function of the media format in which they appear, leading to higher engagement.', bgColor: 'bg-[#fff7ed]', icon: '📰' },
    { title: 'Remarketing', desc: 'Re-engage users who have previously visited your website or app with targeted ads as they browse the web.', bgColor: 'bg-[#fff0f4]', icon: '🔄' },
];

const FAQS = [
    {
        question: "What are display advertising services?",
        answer: "Display advertising services involve creating and managing visual advertisements (banners, videos, or images) that appear on third-party websites, social media platforms, and apps. They are designed to build brand awareness and drive traffic through visual appeal."
    },
    {
        question: "How do display ads differ from search ads?",
        answer: "Search ads appear when users are actively searching for specific keywords (pull marketing), while display ads appear while users are browsing other content (push marketing). Display ads are more visual and focus on brand building and remarketing."
    },
    {
        question: "What platforms do you use for display ads?",
        answer: "We manage campaigns across the Google Display Network, YouTube, Facebook, Instagram, LinkedIn, and various programmatic platforms to ensure maximum reach for your brand."
    },
    {
        question: "How do you measure the success of display ads?",
        answer: "We track metrics such as impressions, reach, Click-Through Rate (CTR), View-Through Conversions, and brand lift to ensure your campaigns are meeting your business goals."
    },
    {
        question: "Is remarketing a part of display advertising?",
        answer: "Yes, remarketing is a powerful component of display advertising. It allows us to show ads specifically to people who have already interacted with your brand, keeping you top-of-mind and increasing conversion rates."
    }
];

const DisplayAdsPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#e0f7fa] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <Monitor className="w-4 h-4" />
                            <span>Visual Impact, Proven Results</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Display Advertising <span className="text-brand-cyan">Services</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Captivate your audience with stunning visual ads. We design and manage high-impact 
                            display campaigns that build brand awareness, drive traffic, and boost conversions.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Free Audit
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Top Rated", sub: "Clutch 2024" },
                            { img: company2, text: "Google Partner", sub: "Display Certified" },
                            { img: company3, text: "Excellent", sub: "Trustpilot" },
                            { img: company4, text: "Award Winning", sub: "Marketing Excellence" }
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

            {/* 2. Platform Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            Top Display Marketing Platforms
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            We leverage the world's most powerful visual platforms to ensure your brand's 
                            message is seen by the right audience in the most engaging formats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {PLATFORMS.map((platform, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${platform.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {platform.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{platform.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{platform.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Performance Strip */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Clock, stat: "12+", label: "Years Display Expertise" },
                            { icon: Image, stat: "5k+", label: "Creative Assets Managed" },
                            { icon: Globe2, stat: "Billion+", label: "Monthly Ad Impressions" },
                            { icon: Users, stat: "20m+", label: "Targeted Audience Reach" },
                            { icon: Star, stat: "95%", label: "Client Retention Rate" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: Target, title: "Audience Intelligence", desc: "Advanced targeting using demographics, interests, and behavioral data to reach likely buyers." },
                            { icon: BarChart3, title: "Transparent Analytics", desc: "Detailed reporting on impressions, clicks, and conversions to track every penny of your spend." },
                            { icon: Image, title: "Rich Media Creative", desc: "Expert design of static banners, animated GIFs, and interactive HTML5 ads for high impact." },
                            { icon: Zap, title: "Dynamic Remarketing", desc: "Serve personalized ads to past visitors based on specific products or pages they viewed." },
                            { icon: Layout, title: "Cross-Device Strategy", desc: "Ensure your ads look perfect and function seamlessly across mobile, tablet, and desktop." },
                            { icon: Video, stat: "Video Ad Specialists", desc: "End-to-end management of YouTube and social video campaigns for maximum engagement." },
                            { icon: Briefcase, title: "Brand Safety", desc: "Rigorous monitoring to ensure your ads only appear on high-quality, relevant websites." },
                            { icon: Search, title: "Placement Mastery", desc: "Strategic selection of high-performing websites and apps to maximize your brand visibility." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-brand-cyan">
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Display Marketing Approach</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At Mediawings, we believe display advertising is an art and a science. We don't just put banners on websites; 
                                we create visual stories that resonate with your audience. Our approach starts with deep audience research, 
                                followed by world-class creative design and data-driven placement strategies.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Remarketing That Converts</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Don't let potential customers slip away. Our sophisticated remarketing campaigns re-engage users who 
                                have shown interest in your brand, providing the gentle nudge they need to return and complete their purchase.
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
                        <p className="text-gray-500 text-lg">Your most common questions about display advertising, answered.</p>
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
            <section className="py-24 bg-[#e0f7fa]">
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
                                    {['SEO', 'Display Ads', 'Web Development', 'Performance Marketing', 'Social Media Management', 'Influencer Marketing'].map((service) => (
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

export default DisplayAdsPage;
