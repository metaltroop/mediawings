import { useModal } from '../contexts/ModalContext';
import { Star, Plus, Minus, Users, Target, TrendingUp, Share2 } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const GROWTH_CARDS = [
    { title: 'Brand Awareness', desc: 'Reach thousands of potential customers and increase your brand visibility on the most active social platforms.', bgColor: 'bg-[#fff0f4]', icon: '🌟' },
    { title: 'Lead Generation', desc: 'Capture high-quality leads directly within Facebook and Instagram using optimized lead forms and targeted ads.', bgColor: 'bg-[#fffbeb]', icon: '🧲' },
    { title: 'Website Traffic', desc: 'Drive engaged users from their social feeds directly to your website or landing pages to increase conversions.', bgColor: 'bg-[#f0fbff]', icon: '🖱️' },
    { title: 'Video Views', desc: 'Capture attention with engaging video content that tells your brand story and builds deep audience connection.', bgColor: 'bg-[#f3f0ff]', icon: '🎬' },
    { title: 'Conversions', desc: 'Turn social interaction into business growth by targeting users most likely to take action on your site.', bgColor: 'bg-[#f3f0ff]', icon: '💹' },
    { title: 'Store Visits', desc: 'Drive foot traffic to your physical locations with local awareness ads and map-based targeting.', bgColor: 'bg-[#eef2ff]', icon: '🏪' },
    { title: 'Engagement', desc: 'Build an active community around your brand with ads designed to encourage likes, comments, and shares.', bgColor: 'bg-[#fff7ed]', icon: '💬' },
    { title: 'App Installs', desc: 'Scale your mobile application growth by reaching users on the devices where they spend the most time.', bgColor: 'bg-[#fff0f4]', icon: '📱' },
];

const FAQS = [
    {
        question: "Why should I advertise on Facebook and Instagram?",
        answer: "Facebook and Instagram offer unparalleled targeting capabilities, reaching billions of active users. They allow you to target specific demographics, interests, and behaviors, ensuring your ads are seen by those most likely to be interested in your brand."
    },
    {
        question: "How do you handle ad creative for social media?",
        answer: "We design high-impact visuals and write compelling copy specifically for social feeds. This includes static images, carousels, stories, and video content that matches the platform's style while standing out."
    },
    {
        question: "What is the minimum budget for social ads?",
        answer: "While there is no strict minimum, we recommend a budget that allows for proper testing and data collection. We work with you to determine a budget that aligns with your business goals and ensures a positive ROI."
    },
    {
        question: "Can you target my existing customers?",
        answer: "Yes, through Custom Audiences, we can target your existing customer lists or website visitors (Remarketing) to drive repeat purchases and increase customer lifetime value."
    },
    {
        question: "How do you track the success of campaigns?",
        answer: "We use the Meta Pixel and Conversions API to track user actions on your website. This allows us to measure actual sales, leads, and ROI, rather than just likes and comments."
    }
];

const SocialAdsPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#f3f0ff] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <Share2 className="w-4 h-4" />
                            <span>Social Growth Specialists</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Facebook & Instagram <span className="text-brand-cyan">Advertising</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Scale your business with high-performance Meta campaigns. We combine data-driven 
                            targeting with thumb-stopping creative to drive massive ROI on the world's most active platforms.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Start Scaling Now
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Meta Partner", sub: "Verified Agency" },
                            { img: company2, text: "Top Growth", sub: "Clutch 2024" },
                            { img: company3, text: "Excellent", sub: "Trustpilot" },
                            { img: company4, text: "Elite Performance", sub: "Ad Excellence" }
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

            {/* 2. Growth Grid */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            Facebook and Instagram Ads Grow Businesses
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Unlock the full potential of social advertising with targeted strategies 
                            designed to meet your specific business objectives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {GROWTH_CARDS.map((card, idx) => (
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

            {/* 3. Performance Strip */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-white">
                        {[
                            { icon: TrendingUp, stat: "15x+", label: "Average Campaign ROAS" },
                            { icon: Target, stat: "50m+", label: "Precise Audience Reached" },
                            { icon: Share2, stat: "100k+", label: "Monthly Social Leads" },
                            { icon: Users, stat: "500+", label: "Satisfied Scale Clients" },
                            { icon: Star, stat: "Top Tier", label: "Meta Business Partner" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-brand-cyan/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Success Stories */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Success Stories</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Real results from brands that scaled vertically with our social strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">eCommerce</span>
                                <div className="flex text-yellow-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">12X ROAS for Fashion Retailer</h3>
                            <p className="text-gray-600 leading-relaxed italic">"Mediawings transformed our social presence. We saw a 12x return on our ad spend within the first 3 months of scaling."</p>
                            <div className="pt-4 border-t border-gray-50 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">Marketing Director</div>
                                    <div className="text-xs text-brand-cyan">Global Fashion Brand</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider">B2B SaaS</span>
                                <div className="flex text-yellow-400"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">400% Increase in Qualitative Leads</h3>
                            <p className="text-gray-600 leading-relaxed italic">"The targeting precision on LinkedIn and Facebook was a game-changer for our lead generation results."</p>
                            <div className="pt-4 border-t border-gray-50 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">CEO & Founder</div>
                                    <div className="text-xs text-brand-cyan">SaaS Enterprise</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Benefits Section (Detailed Content) */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Benefits of Facebook and Instagram Advertising</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { title: "Precise Targeting", desc: "Reach your audience based on their location, age, gender, interests, and even recent life events." },
                                { title: "Scale with Meta Pixel", desc: "Leverage the power of the Pixel to track conversions and build high-converting lookalike audiences." },
                                { title: "A/B Testing Mastery", desc: "We constantly test copy, creative, and audiences to find the winning combination for your brand." },
                                { title: "Story ad Specialists", desc: "Dominate the mobile experience with beautiful, native story advertisements that drive action." },
                                { title: "Dynamic Product Ads", desc: "Show users the exact products they viewed on your site to close the sale with ease." },
                                { title: "Remarketing Precision", desc: "Re-engage users throughout their customer journey with tailored messaging that converts." },
                                { title: "Video First Approach", desc: "Utilize engaging video formats to build brand authority and capture attention in busy feeds." },
                                { title: "Lead Form Optimization", desc: "Reduce friction and increase lead volume with optimized instant forms within the social apps." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-sm transition-all group-hover:bg-brand-cyan group-hover:text-white">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Accordion */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-500 text-lg">Your most common questions about social media advertising, answered.</p>
                    </div>

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

            {/* 7. Contact Form */}
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
                                    {['Social Ads', 'SEO', 'Display Ads', 'Performance Marketing', 'Web Development', 'Influencer Marketing'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Start Scaling
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SocialAdsPage;
