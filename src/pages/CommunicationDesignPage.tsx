
import { useState } from 'react';
import { 
    MessageSquare, 
    Layers, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Share2,
    Users,
    Activity,
    Globe,
    FileText,
    Volume2
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CommunicationDesignPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <MessageSquare className="w-8 h-8 text-brand-cyan" />,
            title: "Strategic Messaging",
            desc: "Crafting clear, persuasive, and consistent brand voices that resonate with your target audience across all channels.",
            color: "bg-blue-50"
        },
        {
            icon: <Share2 className="w-8 h-8 text-purple-600" />,
            title: "Omnichannel Design",
            desc: "Ensuring your communication remains unified, whether it's through email marketing, social media, or physical mail.",
            color: "bg-purple-50"
        },
        {
            icon: <FileText className="w-8 h-8 text-orange-500" />,
            title: "Content Presentation",
            desc: "Designing information layouts that prioritize clarity and engagement, making complex data easy for users to digest.",
            color: "bg-orange-50"
        },
        {
            icon: <Volume2 className="w-8 h-8 text-pink-500" />,
            title: "Brand Voice Alignment",
            desc: "Auditing and refining your linguistic style to match your visual identity for a truly holistic brand experience.",
            color: "bg-pink-50"
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            title: "Internal Communications",
            desc: "Designing tools and templates that help your team communicate the brand vision effectively to stakeholders.",
            color: "bg-green-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-indigo-500" />,
            title: "Interactive Storytelling",
            desc: "Using digital elements to tell your brand story in an immersive way that captures attention and drives action.",
            color: "bg-indigo-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-yellow-500" />,
            title: "Global Communication",
            desc: "Adapting your messaging and design for different cultures and markets while maintaining core brand integrity.",
            color: "bg-yellow-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-red-500" />,
            title: "Campaign Collateral",
            desc: "Developing a suite of specialized communication assets for product launches, events, and seasonal promotions.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is communication design vs. graphic design?",
            a: "While graphic design focuses on visuals, communication design focuses on the effective delivery of a message. It's about how the visual and verbal work together to achieve a specific outcome."
        },
        {
            q: "How do you define a brand's voice?",
            a: "We analyze your company values, target audience, and market position to create a 'personality' for your brand that informs every piece of content you produce."
        },
        {
            q: "Can you help me rewrite my existing sales decks?",
            a: "Yes! We specialize in redesigning marketing and sales materials to be more persuasive, clear, and aligned with modern communication standards."
        },
        {
            q: "How do you measure communication effectiveness?",
            a: "We look at engagement metrics, user feedback, and conversion rates to see how well the intended message is being received and acted upon by your audience."
        },
        {
            q: "Do you provide templates for our internal team?",
            a: "Absolutely. We can create branded templates for emails, presentations, and reports so your team can maintain consistency without needing a designer for every task."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Effective <span className="text-brand-cyan">Communication</span> <br className="hidden md:block" /> That Drives Action
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We bridge the gap between your brand and your audience through strategic design that prioritizes clarity, engagement, and results.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Enhance Your Message
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight text-center">
                        Strategic <span className="text-brand-cyan">Information</span> Delivery
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center leading-relaxed">
                        Design is not just what it looks like; it's how it communicates. Our holistic approach ensures your message is never lost in translation.
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

            {/* Quote Strip */}
            <section className="py-20 bg-gray-900 text-white border-y border-white/5 relative overflow-hidden">
                 <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
                     <Volume2 className="w-12 h-12 text-brand-cyan mx-auto mb-8 opacity-50" />
                     <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight leading-tight italic">
                         "The single biggest problem in communication <br className="hidden md:block" /> is the illusion that it has taken place."
                     </h3>
                     <p className="text-brand-cyan font-bold uppercase tracking-widest text-sm">— George Bernard Shaw</p>
                 </div>
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]"></div>
            </section>

            {/* Why Us Section - Cards */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                            Design for <span className="text-brand-cyan">Impact</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            We don't just make things look good. We make them speak. Our designs are engineered to guide the eye and influence the mind.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                "Psychology-Based Design Principles",
                                "Clear Information Hierarchy",
                                "Consistent Brand Narratives",
                                "Data-Driven Message Optimization",
                                "Cross-Platform Cohesion",
                                "Persuasive Visual Storytelling"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="bg-brand-lavender p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors">
                                 <h4 className="font-bold text-lg mb-4">Clarity First</h4>
                                 <p className="text-gray-600 text-sm">Removing noise to ensure your core message is the first thing users see.</p>
                             </div>
                             <div className="bg-[#f0fbff] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors mt-0 sm:mt-8">
                                 <h4 className="font-bold text-lg mb-4">Engagement</h4>
                                 <p className="text-gray-600 text-sm">Crafting hooks that keep users interested and moving through your content.</p>
                             </div>
                             <div className="bg-[#fff7ed] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors">
                                 <h4 className="font-bold text-lg mb-4">Consistency</h4>
                                 <p className="text-gray-600 text-sm">Ensuring every touchpoint reinforces your brand DNA perfectly.</p>
                             </div>
                             <div className="bg-[#fff0f4] p-8 rounded-3xl border border-brand-cyan/10 hover:border-brand-cyan transition-colors mt-0 sm:mt-8">
                                 <h4 className="font-bold text-lg mb-4">Conversion</h4>
                                 <p className="text-gray-600 text-sm">Strategically placing calls-to-action that feel natural and earned.</p>
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
                        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
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
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Start Talking <span className="text-brand-cyan">The Right Way</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed">
                        Ready to transform your brand communication? Let's discuss how we can make your message more powerful and clear.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Message Strategy Call
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CommunicationDesignPage;
