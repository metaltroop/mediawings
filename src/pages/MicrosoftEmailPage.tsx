
import { useState } from 'react';
import { 
    Mail, 
    ShieldCheck, 
    Zap, 
    ChevronDown,
    ChevronUp,
    Users,
    Smartphone,
    Globe,
    Lock,
    RefreshCw,
    MessageSquare
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const MicrosoftEmailPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Mail className="w-8 h-8 text-brand-cyan" />,
            title: "Business Email (Exchange)",
            desc: "Enterprise-class email, calendar, and contacts on your PC, phone, and web browser with a 50 GB mailbox per user.",
            color: "bg-blue-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
            title: "Advanced Threat Protection",
            desc: "Real-time protection against sophisticated attacks like phishing and zero-day malware with Microsoft Defender.",
            color: "bg-purple-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-orange-500" />,
            title: "Seamless Sync",
            desc: "Any changes you make on one device are instantly updated across all your other devices, so you stay in sync no matter where you are.",
            color: "bg-orange-50"
        },
        {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            title: "Shared Calendars",
            desc: "Collaborate effortlessly with shared calendars, meeting scheduling, and global address lists for your entire team.",
            color: "bg-pink-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-green-500" />,
            title: "Mobile Optimization",
            desc: "Optimized experience for Outlook on iOS and Android, ensuring your team can work securely from anywhere.",
            color: "bg-green-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-500" />,
            title: "Data Compliance",
            desc: "Built-in data loss prevention (DLP) and compliance tools to help you meet regulatory requirements and protect sensitive information.",
            color: "bg-indigo-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "99.9% Uptime Guarantee",
            desc: "Financially backed service level agreement (SLA) ensures your business communications are always up and running.",
            color: "bg-yellow-50"
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-red-500" />,
            title: "Teams Integration",
            desc: "Built-in integration with Microsoft Teams for instant messaging, video calls, and collaborative document editing.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is the difference between personal and business Microsoft email?",
            a: "Business email provides custom domain addresses (name@yourcompany.com), larger storage limits, advanced security features, and centralized IT management."
        },
        {
            q: "Can I migrate my existing emails to Microsoft 365?",
            a: "Yes, we provide professional migration services to move your emails, contacts, and calendars from Gmail, IMAP, or old Exchange servers with zero downtime."
        },
        {
            q: "How secure is Microsoft email?",
            a: "It includes world-class anti-spam and anti-malware protection, multi-factor authentication (MFA), and encrypted email options for sensitive data."
        },
        {
            q: "Does it work with Outlook on my desktop?",
            a: "Absolutely. It integrates perfectly with the desktop versions of Outlook (Windows and Mac) and also provides a powerful web-based version."
        },
        {
            q: "Can I use my own domain name?",
            a: "Yes, Microsoft 365 allows you to use your registered domain name for all your email addresses."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Enterprise-Grade <br className="hidden md:block" /> <span className="text-brand-cyan">Microsoft Email Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Secure, professional, and reliable email for your growing team. Powered by Microsoft 365 and managed by Mediawings experts.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Get Started with Microsoft 365
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
                        Power Your <span className="text-brand-cyan">Professional Presence</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Don't just send emails—send a message of professionalism and security with our managed Microsoft 365 solutions.
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

            {/* Why Managed Service Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Why <span className="text-brand-cyan">Managed</span> Microsoft 365?
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                Setting up and securing an enterprise email environment is complex. We take the burden off your IT team so they can focus on innovation.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "24/7 Expert Support", desc: "Never wait in a queue again. Our Microsoft certified experts are just a call away." },
                                    { title: "Zero-Downtime Migration", desc: "We move your data while your team keeps working. No missing emails, no drama." },
                                    { title: "Security First Config", desc: "We set up MFA, conditional access, and threat protection from day one." }
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
                             <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                 <Globe className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-pulse" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter text-center">Global <br /> Connectivity.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto text-center">Connect your global team with a unified communication ecosystem that never sleeps.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Consult an Expert
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         <div>
                             <h4 className="text-3xl font-black text-brand-cyan mb-2">99.9%</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Uptime SLA</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-purple-600 mb-2">50GB</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Base Storage</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-orange-500 mb-2">256-bit</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Encryption</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-green-500 mb-2">24/7</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Live Support</p>
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
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight text-center">
                        Communicate with <span className="text-brand-cyan">Confidence</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to elevate your business communication? Let's build a secure, professional email environment that helps your brand shine.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Request a Setup Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MicrosoftEmailPage;
