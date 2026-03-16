import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, Users, Target, TrendingUp, Magnet, MousePointer2, BarChart3, Settings, ShieldCheck, Zap, RefreshCw, Mail, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const LEAD_GEN_CARDS = [
    { title: 'B2B Lead Generation', desc: 'Target key decision-makers in your industry with personalized outreach and data-driven prospecting strategies.', bgColor: 'bg-[#fff1f2]', icon: '🏢' },
    { title: 'PPC Lead Ads', desc: 'Capture high-intent leads from Google and Social Media using optimized lead forms and targeted landing pages.', bgColor: 'bg-[#fffbeb]', icon: '💰' },
    { title: 'Landing Page Optimization', desc: 'Design and test high-converting landing pages that transform passive visitors into valuable business leads.', bgColor: 'bg-[#f0f9ff]', icon: '📄' },
    { title: 'LinkedIn Prospecting', desc: 'Leverage the world\'s largest professional network to build a consistent pipeline of high-quality B2B opportunities.', bgColor: 'bg-[#f5f3ff]', icon: '🔗' },
    { title: 'Cold Outreach', desc: 'Scalable and compliant email and LinkedIn outreach programs that put your message directly in front of targeted prospects.', bgColor: 'bg-[#f5f3ff]', icon: '✉️' },
    { title: 'CRM Integration', desc: 'Seamlessly connect your lead flow to your existing CRM systems for automated follow-ups and better sales tracking.', bgColor: 'bg-[#f0f9ff]', icon: '⚙️' },
    { title: 'Database Enrichment', desc: 'Clean, verify, and enrich your existing lead database to improve deliverability and sales effectiveness.', bgColor: 'bg-[#fffbeb]', icon: '🗄️' },
    { title: 'Appointment Setting', desc: 'Full-service lead qualification and appointment setting to ensure your sales team only talks to "hot" prospects.', bgColor: 'bg-[#fff1f2]', icon: '📅' },
];

const FAQS = [
    {
        question: "What makes a 'quality' lead?",
        answer: "A quality lead is an individual or business that fits your Ideal Customer Profile (ICP) and has shown intent or interest in your specific solutions. We use rigorous qualification criteria to ensure your sales team isn't wasting time."
    },
    {
        question: "How long does it take to start seeing leads?",
        answer: "Paid campaigns can start generating leads within 24-48 hours. Scalable outbound and organic strategies typically take 4-8 weeks to build significant momentum and consistent flow."
    },
    {
        question: "Can you target specific job titles and industries?",
        answer: "Absolutely. We can hyper-target based on Job Title, Industry, Company Size, Revenue, Technology Stack, and even recent funding rounds or hiring activity."
    },
    {
        question: "Do you integrate with HubSpot, Salesforce, or Zoho?",
        answer: "Yes, we provide full technical support to integrate your new lead flow directly into almost any modern CRM system, ensuring automated data transfer and tracking."
    }
];

const LeadGenerationPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#f5f3ff] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <Magnet className="w-4 h-4" />
                            <span>Fuel Your Sales Pipeline</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Lead Generation <span className="text-brand-cyan">Services</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Stop chasing, start attracting. We build automated lead engines that deliver 
                            qualified, high-intent prospects directly to your sales team, consistently.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get Qualified Leads Now
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Lead Gen Experts", sub: "Clutch 2024" },
                            { img: company2, text: "Top Performance", sub: "Google Partner" },
                            { img: company3, text: "Verified Results", sub: "Trustpilot" },
                            { img: company4, text: "B2B Specialists", sub: "ROI Driven" }
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

            {/* 2. Lead Gen Include Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                            Scale Your Growth with Quality Leads
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            A multi-channel approach to lead generation that ensures your pipeline 
                            remains full of opportunities throughout the year.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {LEAD_GEN_CARDS.map((card, idx) => (
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
            <section className="py-20 bg-[#1a132b] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Users, stat: "1M+", label: "Leads Generated" },
                            { icon: TrendingUp, stat: "45%", label: "Avg. Conversion Lift" },
                            { icon: Target, stat: "Billion+", label: "Total Reached" },
                            { icon: MousePointer2, stat: "200+", label: "Industries Served" },
                            { icon: ShieldCheck, stat: "Top Tier", label: "Strategic Partner" }
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
                            { icon: Target, title: "Intent Targeting", desc: "Identify and reach prospects who are actively searching for your solutions right now." },
                            { icon: Mail, title: "Outreach Mastery", desc: "Highly personalized email and LinkedIn campaigns that get replies from decision-makers." },
                            { icon: BarChart3, title: "ROI Tracking", desc: "Deep attribution to see which channels are delivering the most valuable business leads." },
                            { icon: Settings, title: "CRM Sync", desc: "Automatic lead injection into your sales CRM for immediate follow-up and zero data loss." },
                            { icon: RefreshCw, title: "Lead Nurturing", desc: "Automated sequences to stay top-of-mind with prospects until they are ready to buy." },
                            { icon: Phone, title: "Qualifying Calls", desc: "SDR-as-a-service to qualify incoming leads before they even reach your sales team." },
                            { icon: Calendar, title: "Meeting Booking", desc: "Automated scheduling that puts qualified meetings directly onto your sales team's calendar." },
                            { icon: Zap, title: "Rapid Scale", desc: "Proven framework to quickly increase lead volume without sacrificing lead quality." }
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
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Our Proven Lead Engine
                    </h2>
                </div>
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Strategy & Prospect Analysis", icon: "🔍", color: "bg-blue-50" },
                            { title: "Funnel & Content Build", icon: "🏗️", color: "bg-purple-50" },
                            { title: "Launch & Lead Capture", icon: "🎯", color: "bg-cyan-50" },
                            { title: "Qualify & Appointment Book", icon: "📅", color: "bg-indigo-50" }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6 relative group hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
                                <div className="bg-brand-cyan text-white text-xs font-black px-3 py-1 rounded-full uppercase italic">Step 0{idx + 1}</div>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Lead Generation Strategies for B2B & B2C</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At Mediawings, we understand that a business is only as healthy as its pipeline. 
                                Our lead generation services are designed to remove the "feast or famine" cycle 
                                from your sales process, providing a steady stream of qualified opportunities 
                                that fit your exact customer profile.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Over Quantity</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We don't believe in "vanity leads." Our focus is on depth of intent and 
                                    closeness to the Ideal Customer Profile. By implementing multi-step 
                                    qualification and data verification, we ensure your sales team spends 
                                    their time on prospects actually empowered to say "Yes."
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Channel Dominance</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Your customers aren't in just one place. We deploy coordinated campaigns 
                                    across Google Search, LinkedIn, Email, and Social platforms to build 
                                    frequency and trust, making your brand the obvious choice when they 
                                    are ready to engage.
                                </p>
                            </div>
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
                                        maxHeight: openFaq === index ? '600px' : '0',
                                        opacity: openFaq === index ? 1 : 0,
                                        paddingBottom: openFaq === index ? '24px' : '0'
                                    }}
                                >
                                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100 italic">
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
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center text-black">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">
                        Fuel Your Pipeline Today
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">Interest Service</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['B2B Lead Gen', 'LinkedIn Prospecting', 'Cold Outreach', 'CRM Sync', 'SDR Service', 'Lead Magnet'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase italic">
                                Scale My Pipeline
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LeadGenerationPage;
