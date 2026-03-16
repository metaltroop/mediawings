import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, BarChart3, Target, MousePointerClick, Gauge, Search, PenTool, Smartphone, RefreshCw, Layers, Globe2, Zap, Briefcase } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const FEATURE_CARDS = [
    { title: 'Lead-gen UI/UX', desc: 'Strategically designed user interfaces focused on guiding visitors towards a single, clear call-to-action.', bgColor: 'bg-[#fff1f2]', icon: <MousePointerClick className="w-6 h-6" /> },
    { title: 'Mobile Responsive', desc: 'Fully optimized layouts that provide a seamless experience across all devices, ensuring no lead is lost on mobile.', bgColor: 'bg-[#fffbeb]', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'Fast Performance', desc: 'Lightning-fast loading speeds to reduce bounce rates and keep potential customers engaged from the first second.', bgColor: 'bg-[#f0f9ff]', icon: <Gauge className="w-6 h-6" /> },
    { title: 'Conversion Tracking', desc: 'Complete set-up of tracking pixels and event monitoring to measure every interaction and ROI accurately.', bgColor: 'bg-[#f5f3ff]', icon: <Target className="w-6 h-6" /> },
    { title: 'A/B Testing', desc: 'Continuous testing of headlines, images, and CTAs to identify the highest-performing versions for your business.', bgColor: 'bg-[#f5f3ff]', icon: <RefreshCw className="w-6 h-6" /> },
    { title: 'Custom Branding', desc: 'Aligning your landing page perfectly with your brand identity to build trust and immediate recognition.', bgColor: 'bg-[#f0f9ff]', icon: <PenTool className="w-6 h-6" /> },
    { title: 'Copywriting', desc: 'Persuasive, benefit-driven copy that addresses customer pain points and compels them to take action.', bgColor: 'bg-[#fffbeb]', icon: <Layers className="w-6 h-6" /> },
    { title: 'SEO Optimized', desc: 'Search-engine friendly structure to help your landing pages rank for relevant high-intent keywords.', bgColor: 'bg-[#fff1f2]', icon: <Search className="w-6 h-6" /> },
];

const FAQS = [
    {
        question: "What is the difference between a website and a landing page?",
        answer: "A website is a collection of pages with multiple goals (about, services, contact), while a landing page is a standalone page created specifically for a marketing campaign with a single focused objective (CTA)."
    },
    {
        question: "How long does it take to design and launch a landing page?",
        answer: "Typically, a custom high-converting landing page takes 5-10 business days from research and copywriting to design, development, and tracking setup."
    },
    {
        question: "Do I need to provide the content and images?",
        answer: "Our team can handle everything from strategic copywriting to selecting or designing high-quality visual assets that align with your brand."
    },
    {
        question: "How do you measure the success of a landing page?",
        answer: "We track conversion rates, bounce rates, time on page, and heatmaps to understand user behavior and optimize for the highest possible ROI."
    }
];

const LandingPagesPage = () => {
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
                            Conversion-focused <span className="text-brand-cyan">Landing Pages</span> Design Agency
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Stop wasting your ad spend on pages that don't convert. We design custom, high-performance 
                            landing pages that turn clicks into customers and maximize your ROI.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Custom Quote
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[company1, company2, company3, company4].map((logo, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-4 border border-gray-100">
                                <img src={logo} alt="Partner" className="h-6 md:h-8 object-contain grayscale opacity-60" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Feature Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight uppercase">
                            Landing-page features
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Every page we build is a result of deep research, persuasive copywriting, 
                            and user-centric design principles focused on one goal: Conversions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {FEATURE_CARDS.map((card, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${card.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-cyan group-hover:scale-110 transition-transform duration-300 text-2xl">
                                    {card.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-3 leading-tight uppercase text-[13px]">{card.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-3">{card.desc}</p>
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
                            { icon: MousePointerClick, stat: "35%+", label: "Avg. Conv. Rate Increase" },
                            { icon: Gauge, stat: "< 2s", label: "Page Load Speed" },
                            { icon: RefreshCw, stat: "100+", label: "A/B Tests Run" },
                            { icon: Smartphone, stat: "100%", label: "Mobile Responsive" },
                            { icon: Target, stat: "25X", label: "Max ROI Achieved" }
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

            {/* 4. Why Choose Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Conversion First', desc: 'Our designs are driven by psychology and data, not just aesthetics.', icon: <BarChart3 /> },
                            { title: 'Global Standards', desc: 'We build pages that compete at the highest level of international markets.', icon: <Globe2 className="w-6 h-6" /> },
                            { title: 'Fast Launch', desc: 'Get your page live and generating leads in as little as 7 days.', icon: <Zap className="w-6 h-6" /> },
                            { title: 'Digital Performance', desc: 'Fully optimized for search engines and paid advertising platforms.', icon: <Briefcase className="w-6 h-6" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center border border-gray-100">
                                <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6 text-brand-cyan">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm">{item.title}</h4>
                                <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Detailed Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What makes a high converting landing page?</h2>
                            <p className="mb-6">
                                A high-converting landing page is more than just a beautiful design. It's a strategic asset that combines 
                                psychology, data, and technology to guide visitors toward a specific action. Here's our methodology:
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Clear Value Proposition</h3>
                            <p className="mb-6 italic">
                                Your visitors should know exactly what you offer and why it matters to them within the first 3 seconds 
                                of landing on your page. We craft headlines that hook and subheadlines that sell.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Zero Distractions</h3>
                            <p className="mb-6">
                                Unlike a full website, a landing page should have a 1:1 attention ratio. Every element on the page 
                                must support the primary goal. We remove navigation bars and unnecessary links to keep focus on the CTA.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Strategic Social Proof</h3>
                            <p className="mb-6">
                                Trust is the currency of conversion. We strategically place testimonials, case studies, and 
                                trust badges to overcome buyer hesitation and build authority.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Optimized User Journey</h3>
                            <p className="mb-6">
                                From the button placement to the form fields, everything is optimized for the least resistance. 
                                We ensure your page is fast, mobile-responsive, and accessible to everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
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

            {/* 7. Contact Section */}
            <section className="py-24 bg-[#fdf2f8]">
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
                                <label className="block text-sm font-semibold text-gray-700 mb-4">What do you need?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['New Landing Page', 'Redesign', 'A/B Testing', 'Copywriting', 'Audit', 'Other'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Boost My Conversions
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LandingPagesPage;
