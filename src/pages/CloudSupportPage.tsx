
import { useState } from 'react';
import { 
    Headphones, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Clock,
    Activity,
    Settings,
    Lock,
    LifeBuoy,
    Users
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CloudSupportPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Clock className="w-8 h-8 text-brand-cyan" />,
            title: "24/7/365 Monitoring",
            desc: "Round-the-clock observation of your server health and performance, identifying issues before they affect your users.",
            color: "bg-blue-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-purple-600" />,
            title: "Managed Migrations",
            desc: "Worry-free data and application transfers from any architecture into your new cloud home, with zero downtime.",
            color: "bg-purple-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
            title: "Security Patching",
            desc: "Automated and manual security updates for your operating system and core applications to keep vulnerabilities at zero.",
            color: "bg-orange-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-pink-500" />,
            title: "Performance Tuning",
            desc: "Regular audits and optimizations of your server configuration to ensure you're getting every ounce of speed possible.",
            color: "bg-pink-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-green-500" />,
            title: "Disaster Recovery",
            desc: "Strategic backup planning and rapid-response restoration protocols to ensure your business stays resilient.",
            color: "bg-green-50"
        },
        {
            icon: <Users className="w-8 h-8 text-indigo-500" />,
            title: "Expert Consultation",
            desc: "Direct access to senior cloud architects who can help you plan your next phase of infrastructure growth.",
            color: "bg-indigo-50"
        },
        {
            icon: <LifeBuoy className="w-8 h-8 text-yellow-500" />,
            title: "Troubleshooting",
            desc: "Rapid response to unexpected errors, configuration issues, or performance bottlenecks in your stack.",
            color: "bg-yellow-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-red-500" />,
            title: "Scalability Planning",
            desc: "Data-driven insights to help you decide when and how to scale your resources to meet increasing demand.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is 'Managed Cloud Support'?",
            a: "It's like having a dedicated team of system administrators working for you. We take care of all the technical details so you can focus on your business."
        },
        {
            q: "How fast is your response time?",
            a: "For critical infrastructure issues, our guaranteed response time is under 30 minutes, 24 hours a day, 7 days a week."
        },
        {
            q: "Do you support custom application stacks?",
            a: "Yes. From standard LAMP stacks to complex Node.js or Python environments, our team has the expertise to manage almost any software architecture."
        },
        {
            q: "Is security included in the support?",
            a: "Absolutely. Security is at the core of everything we do. We manage firewalls, SSH access, and perform regular vulnerability scans."
        },
        {
            q: "Can I upgrade my support tier?",
            a: "Yes, you can move between our Standard and Enterprise support tiers at any time as your business requirements change."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Your Cloud, <br className="hidden md:block" /> <span className="text-brand-cyan">Managed by Experts</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        24/7 technical assistance and proactive management for your entire IT infrastructure. Sleep better knowing your cloud is in safe hands.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Get Expert Cloud Support
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
                        Proactive <span className="text-brand-cyan">Cloud Care</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our support plans go beyond just fixing what's broken. We actively monitor and optimize your environment to prevent downtime before it starts.
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

            {/* Support Reliability Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Reliable <span className="text-brand-cyan">30-Minute Response</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                When your business is online, every second of downtime costs money. That's why our enterprise support tier features a 30-minute ticket response guarantee.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Direct Human Interaction", desc: "No frustrating bots or automated scripts. Talk directly to the engineers managing your cloud." },
                                    { title: "Escalation Protocols", desc: "Senior architects are always on standby for complex or high-priority issues." },
                                    { title: "Transparent Communication", desc: "Constant updates during any incident, so you're never left in the dark about your status." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <Headphones className="text-brand-cyan w-6 h-6" />
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
                                 <LifeBuoy className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-bounce" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Zero Downtime <br /> Mentality.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">We treat your business infrastructure with the same care as our own.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     View Support Tiers
                                 </button>
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
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[15px] text-left">
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
                        Secure Your Cloud <span className="text-brand-cyan">Expert Team</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed px-4">
                        Don't leave your infrastructure to chance. Partner with a support team that has the experience and passion to keep you running perfectly.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Contact Support Team
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CloudSupportPage;
