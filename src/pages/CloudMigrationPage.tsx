
import { useState } from 'react';
import { 
    Rocket, 
    ShieldCheck, 
    Zap, 
    Layers, 
    Database, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    ArrowRightLeft,
    Box,
    FileText,
    Activity
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CloudMigrationPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <ArrowRightLeft className="w-8 h-8 text-brand-cyan" />,
            title: "Migration Strategy",
            desc: "Comprehensive assessment of your current infrastructure to develop a risk-free roadmap for your cloud transition.",
            color: "bg-blue-50"
        },
        {
            icon: <Database className="w-8 h-8 text-purple-600" />,
            title: "Data Migration",
            desc: "Securely moving your databases and file storage to the cloud with guaranteed data integrity and minimal downtime.",
            color: "bg-purple-50"
        },
        {
            icon: <Box className="w-8 h-8 text-orange-500" />,
            title: "Application Refactoring",
            desc: "Optimizing your existing applications to take full advantage of cloud-native features and scalability.",
            color: "bg-orange-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-pink-500" />,
            title: "Rehosting (Lift & Shift)",
            desc: "The fastest way to the cloud: moving your applications with minimal changes to realize immediate infrastructure benefits.",
            color: "bg-pink-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
            title: "Security & Compliance Migration",
            desc: "Ensuring your cloud environment meets all regulatory requirements (GDPR, HIPAA, etc.) from day one.",
            color: "bg-green-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-indigo-500" />,
            title: "Post-Migration Testing",
            desc: "Rigorous performance and functional testing to verify that everything works perfectly in the new environment.",
            color: "bg-indigo-50"
        },
        {
            icon: <FileText className="w-8 h-8 text-yellow-500" />,
            title: "Legacy System Modernization",
            desc: "Phased replacement of outdated systems with modern, cloud-native services for better long-term efficiency.",
            color: "bg-yellow-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-red-500" />,
            title: "Hybrid Cloud Integration",
            desc: "Setting up secure bridges between your on-premise hardware and new cloud resources during the transition phase.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "How much downtime should I expect during migration?",
            a: "We aim for near-zero downtime. By using parallel environments and database replication, we can cut over traffic in minutes once the data is synchronized."
        },
        {
            q: "Is it cheaper to run my business in the cloud?",
            a: "Initially, migration has costs, but long-term savings come from auto-scaling (only paying for what you use) and eliminating hardware maintenance costs."
        },
        {
            q: "Can you migrate legacy applications that are 10+ years old?",
            a: "Yes, we analyze legacy codebases to determine if a simple 'lift and shift' is possible or if partial refactoring is needed to ensure compatibility."
        },
        {
            q: "How do you handle data security during the move?",
            a: "We use end-to-end encryption for all data in transit and perform checksum verifications to ensure every byte is moved accurately and securely."
        },
        {
            q: "Do you provide support after the migration is complete?",
            a: "Absolutely. We offer managed services to monitor your new cloud environment and continue optimizing it for performance and cost."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Seamless <span className="text-brand-cyan">Cloud Migration</span> <br className="hidden md:block" /> with Zero Disruptions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We take the complexity out of moving to the cloud, ensuring your data, applications, and legacy systems are transitioned securely and efficiently.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Plan Your Move
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
                        End-to-End <span className="text-brand-cyan">Migration Expertise</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        Whether you're moving a single app or an entire data center, our proven migration framework guarantees a smooth transition.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, idx) => (
                        <div key={idx} className={`${item.color} p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-brand-cyan/20`}>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight text-brand-cyan">
                                Why Trust Us <br /> With Your Migration?
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Migration is more than just moving data; it's about business continuity. We prioritize the safety of your assets and the availability of your services.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Zero Data Loss Track Record",
                                    "Risk-Averse Migration Strategies",
                                    "Minimized Cut-over Downtime",
                                    "Cloud Cost Benefit Analysis",
                                    "Application Performance Tuning",
                                    "Comprehensive Post-Move Support"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2">
                            <div className="relative p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl">
                                <Rocket className="text-brand-cyan w-16 h-16 mb-6 mx-auto animate-bounce" />
                                <h4 className="text-2xl font-bold text-center mb-8">Migration Speedometer</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400 font-bold uppercase tracking-widest">Assessment Phase</span>
                                            <span className="text-brand-cyan">100%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-cyan w-full"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-400 font-bold uppercase tracking-widest">Data Transfer</span>
                                            <span className="text-brand-cyan">Optimized</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-cyan w-[85%]"></div>
                                        </div>
                                    </div>
                                    <button onClick={openModal} className="w-full mt-6 bg-brand-cyan text-white font-black py-4 rounded-xl hover:bg-brand-cyan/90 transition-all uppercase tracking-widest text-sm shadow-lg shadow-brand-cyan/20">
                                        Start Free Assessment
                                    </button>
                                </div>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight text-center">
                        Take the First Step <br /> to the <span className="text-brand-cyan">Cloud</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed">
                        Ready to experience the freedom and power of the cloud? Our migration experts are standing by to guide you through every step of the journey.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Migration Review
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CloudMigrationPage;
