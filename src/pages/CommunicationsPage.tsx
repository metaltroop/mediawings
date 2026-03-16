
import { useState } from 'react';
import { 
    MessageSquare, 
    Users, 
    Zap, 
    ChevronDown,
    ChevronUp,
    ShieldCheck,
    Volume2,
    Share2,
    Globe,
    Target
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CommunicationsPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <MessageSquare className="w-8 h-8 text-brand-cyan" />,
            title: "Internal Communications",
            desc: "Designing systems that keep your team aligned, motivated, and informed, from company-wide newsletters to internal portals.",
            color: "bg-blue-50"
        },
        {
            icon: <Volume2 className="w-8 h-8 text-purple-600" />,
            title: "Crisis Communication",
            desc: "Providing calm, strategic guidance during difficult times to protect your reputation and maintain stakeholder trust.",
            color: "bg-purple-50"
        },
        {
            icon: <Target className="w-8 h-8 text-orange-500" />,
            title: "Stakeholder Engagement",
            desc: "Crafting targeted messages for investors, partners, and regulators to ensure clear and positive relationships.",
            color: "bg-orange-50"
        },
        {
            icon: <Share2 className="w-8 h-8 text-pink-500" />,
            title: "Public Relations",
            desc: "Managing your brand's presence in the media to build authority and reach new audiences through earned coverage.",
            color: "bg-pink-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-green-500" />,
            title: "Global Messaging",
            desc: "Adapting your core brand message for different cultures and languages to ensure global resonance and clarity.",
            color: "bg-green-50"
        },
        {
            icon: <Users className="w-8 h-8 text-indigo-500" />,
            title: "Community Management",
            desc: "Nurturing and growing your online communities through active listening and authentic engagement.",
            color: "bg-indigo-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "Reputation Management",
            desc: "Proactively monitoring and shaping how your brand is perceived across digital platforms and offline media.",
            color: "bg-yellow-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-red-500" />,
            title: "Executive Branding",
            desc: "Developing and managing the personal brands of your leadership team to build corporate authority and trust.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is the primary goal of professional communications?",
            a: "The goal is to ensure that the right message reaches the right audience at the right time, building trust, alignment, and authority for your brand."
        },
        {
            q: "How do you handle crisis communications?",
            a: "We act immediately to assess the situation, develop verified messaging, and manage distribution channels to minimize reputational damage."
        },
        {
            q: "Do you help with social media responses?",
            a: "Yes, we develop response frameworks and community guidelines that help your team engage authentically with your audience."
        },
        {
            q: "Can you help with speech writing and presentations?",
            a: "Absolutely. We craft compelling narratives for executive speeches, investor decks, and internal town halls."
        },
        {
            q: "How do you measure communication success?",
            a: "We use a mix of qualitative feedback, media mentions, sentiment analysis, and internal engagement metrics."
        }
    ];

    return (
        <div className="bg-white text-center">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Mastering the Art of <br className="hidden md:block" /> <span className="text-brand-cyan">Professional Communications</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center px-4">
                        We help you cut through the noise with clear, authentic, and impactful messaging that builds trust and drives action across all platforms.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Align Your Message
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight">
                        Strategic <span className="text-brand-cyan">Clarity</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our communications experts ensure that your brand speaks with one voice, whether you're talking to a thousand employees or a million customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, idx) => (
                        <div key={idx} className={`${item.color} p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-brand-cyan/20 text-left`}>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Communications Matter - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative text-left">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Building <span className="text-brand-cyan">Trust</span> Through Dialogue
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                In an age of information overload, clarity is your greatest competitive advantage. We help you build bridges between your brand and your audience.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Authenticity First", desc: "No more corporate jargon. Just real, honest communication." },
                                    { title: "Omnichannel Logic", desc: "Ensuring consistency across email, social, and offline media." },
                                    { title: "Measurable Impact", desc: "Tracking sentiment and engagement to prove communication value." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <Zap className="text-brand-cyan w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 text-center">
                             <div className="relative p-12 bg-white/10 rounded-[3rem] border border-white/10 backdrop-blur-md">
                                 <MessageSquare className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Your Voice, <br /> Amplified.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto italic">"Mediawings didn't just write our press releases; they helped us find our soul and communicate it to the world."</p>
                                 <div className="flex items-center justify-center gap-4">
                                     <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                     <div className="text-left">
                                         <div className="font-bold text-sm">Elena Vance</div>
                                         <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">CEO, Zenith Dynamics</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-16 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center">
                         <div>
                             <div className="text-4xl font-black text-brand-cyan mb-2">91%</div>
                             <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Trust Authenticity</p>
                         </div>
                         <div>
                             <div className="text-4xl font-black text-purple-600 mb-2">5x</div>
                             <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Better Engagement</p>
                         </div>
                         <div>
                             <div className="text-4xl font-black text-orange-500 mb-2">24/7</div>
                             <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Reputation Monitoring</p>
                         </div>
                     </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-gray-900 leading-tight">
                    Frequently Asked <span className="text-brand-cyan">Questions</span>
                </h2>
                <div className="space-y-4 text-center">
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Align Your <span className="text-brand-cyan">Global Voice</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to speak with clarity and impact? Let's discuss how we can streamline and strengthen your communications.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Strategy Session
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CommunicationsPage;
