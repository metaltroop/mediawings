
import { useState } from 'react';
import { 
    FileText, 
    Search, 
    TrendingUp, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Target,
    Users,
    Activity,
    Share2,
    Calendar
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const ContentStrategyPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <FileText className="w-8 h-8 text-brand-cyan" />,
            title: "Content Auditing",
            desc: "Comprehensive analysis of your existing content to identify what's working, what's not, and where the gaps lie.",
            color: "bg-blue-50"
        },
        {
            icon: <Search className="w-8 h-8 text-purple-600" />,
            title: "SEO Content Planning",
            desc: "Developing a keyword-driven roadmap that ensures your content ranks for the terms your audience is searching for.",
            color: "bg-purple-50"
        },
        {
            icon: <Target className="w-8 h-8 text-orange-500" />,
            title: "Editorial Guidelines",
            desc: "Establishing a consistent tone of voice, style, and formatting rules that keep your brand message unified.",
            color: "bg-orange-50"
        },
        {
            icon: <Calendar className="w-8 h-8 text-pink-500" />,
            title: "Content Calendars",
            desc: "Strategic scheduling of your content across all platforms to ensure consistent engagement and seasonal relevance.",
            color: "bg-pink-50"
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            title: "Social Media Strategy",
            desc: "Tailoring your core content for maximum impact on specific social channels like LinkedIn, Instagram, and X.",
            color: "bg-green-50"
        },
        {
            icon: <Share2 className="w-8 h-8 text-indigo-500" />,
            title: "Distribution Strategy",
            desc: "Defining how and where your content will be promoted to reach the widest possible relevant audience.",
            color: "bg-indigo-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
            title: "Performance Analytics",
            desc: "Monitoring key metrics to measure content ROI and refine your strategy based on real-time user behavior.",
            color: "bg-yellow-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-red-500" />,
            title: "Lifecycle Content",
            desc: "Designing content for every stage of the buyer's journey, from awareness and consideration to decision.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why do I need a content strategy if I already write blogs?",
            a: "A content strategy ensures that every piece of content you create serves a specific business purpose and guides users toward a conversion. Without it, you're just creating noise."
        },
        {
            q: "How do you align content with SEO?",
            a: "We perform keyword research first, then we structure our content strategy around the topics that have high search volume and intent, ensuring maximum organic visibility."
        },
        {
            q: "Can you help with social media content as well?",
            a: "Yes, our strategy includes a comprehensive distribution plan that details how to break down long-form content for social platforms."
        },
        {
            q: "How often should we update our content strategy?",
            a: "We recommend a full strategic review every 6 months to stay aligned with market shifts and algorithm updates."
        },
        {
            q: "What is the primary goal of content strategy?",
            a: "The goal is to build long-term authority, trust, and organic traffic that converts into loyal customers."
        }
    ];

    return (
        <div className="bg-white text-center">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Power Your Growth with <br className="hidden md:block" /> Strategic <span className="text-brand-cyan">Content</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center px-4">
                        We don't just create content; we build authority. Our strategic approach ensures that every word you publish works toward your business goals.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Build Your Content Roadmap
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 text-left">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight">
                        Content with <span className="text-brand-cyan">Purpose</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our data-driven strategies help you cut through the noise and establish your brand as a leading voice in your industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, idx) => (
                        <div key={idx} className={`${item.color} p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-brand-cyan/20`}>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative text-center">
                <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                     <Share2 className="w-16 h-16 text-brand-cyan mx-auto mb-8 opacity-50" />
                     <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight italic">
                         "Content is the reason search began <br className="hidden md:block" /> in the first place."
                     </h2>
                     <p className="text-brand-cyan font-bold uppercase tracking-widest text-sm">— Lee Odden</p>
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]"></div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 bg-white text-left">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                            Strategic <span className="text-brand-cyan">Storytelling</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            We believe that content is the most powerful tool for building trust. We help you tell stories that resonate and drive measurable business impact.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                "Intent-Based Topic Research",
                                "Holistic Channel Planning",
                                "Brand Voice & Style Calibration",
                                "Performance-Driven Optimization",
                                "Comprehensive Distribution Maps",
                                "Long-Term Authority Building"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                         <div className="grid grid-cols-2 gap-4">
                             <div className="bg-brand-lavender p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors">
                                 <h4 className="font-bold text-xl mb-4 text-brand-cyan">43%</h4>
                                 <p className="text-gray-600 text-sm">Higher conversion rates for brands with a documented strategy.</p>
                             </div>
                             <div className="bg-[#f0fbff] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors mt-8">
                                 <h4 className="font-bold text-xl mb-4 text-purple-600">67%</h4>
                                 <p className="text-gray-600 text-sm">More leads generated by content-driven marketers.</p>
                             </div>
                             <div className="bg-[#fff7ed] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors -mt-4">
                                 <h4 className="font-bold text-xl mb-4 text-orange-500">3x</h4>
                                 <p className="text-gray-600 text-sm">More organic traffic generated versus paid alternatives.</p>
                             </div>
                             <div className="bg-[#fff0f4] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors mt-4">
                                 <h4 className="font-bold text-xl mb-4 text-pink-500">Zero</h4>
                                 <p className="text-gray-600 text-sm">Tolerance for fluff. Every word must serve your goals.</p>
                             </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-gray-900 leading-tight">
                    Frequently Asked <span className="text-brand-cyan">Questions</span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50 text-left">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-brand-cyan transition-colors"
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                <span className="text-lg">{faq.q}</span>
                                {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                            {openFaq === idx && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[15px]">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Form */}
            <section className="py-24 bg-brand-lavender/50 text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight text-center">
                        Own Your <span className="text-brand-cyan">Narrative</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to stop guessing and start growing? Let's build a content strategy that turns your brand into a destination.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Content Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContentStrategyPage;
