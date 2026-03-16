
import { useState } from 'react';
import { 
    Smartphone, 
    SmartphoneNfc, 
    ShieldCheck,
    Layers, 
    Globe, 
    Cpu,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Palette,
    Code2,
    Settings,
    Activity
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const MobileAppsPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Smartphone className="w-8 h-8 text-brand-cyan" />,
            title: "Native iOS Development",
            desc: "High-performance applications built using Swift and SwiftUI, fully optimized for the Apple ecosystem.",
            color: "bg-blue-50"
        },
        {
            icon: <SmartphoneNfc className="w-8 h-8 text-purple-600" />,
            title: "Native Android Development",
            desc: "Robust and scalable Android apps developed with Kotlin, ensuring compatibility across all modern Android devices.",
            color: "bg-purple-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-orange-500" />,
            title: "Cross-Platform Apps",
            desc: "Cost-effective solutions using React Native or Flutter to reach both iOS and Android audiences with a single codebase.",
            color: "bg-orange-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-pink-500" />,
            title: "App Performance Audit",
            desc: "Detailed analysis and optimization of your existing app's speed, battery usage, and overall responsiveness.",
            color: "bg-pink-50"
        },
        {
            icon: <Palette className="w-8 h-8 text-green-500" />,
            title: "Mobile UI/UX Design",
            desc: "Intuitive and engaging user interfaces specifically designed for mobile interactions and smaller screens.",
            color: "bg-green-50"
        },
        {
            icon: <Cpu className="w-8 h-8 text-indigo-500" />,
            title: "Backend API Integration",
            desc: "Developing secure and efficient APIs to power your mobile experience with real-time data synchronization.",
            color: "bg-indigo-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "App Security & Compliance",
            desc: "Implementing bio-metric authentication, data encryption, and ensuring compliance with App Store & Play Store policies.",
            color: "bg-yellow-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-red-500" />,
            title: "App Maintenance & Support",
            desc: "Ongoing monitoring, OS-level updates, and feature enhancements to keep your app relevant and functional.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Which platform should I choose: Native or Cross-Platform?",
            a: "Native is best for high-performance apps with complex hardware interactions. Cross-platform is more cost-effective for most business apps that need to be on both iOS and Android quickly."
        },
        {
            q: "How long does it take to develop a mobile app?",
            a: "A typical MVP (Minimum Viable Product) takes between 12 to 24 weeks depending on the complexity of features and integrations required."
        },
        {
            q: "Can you help me publish my app to the stores?",
            a: "Yes, we handle the entire submission process, including metadata optimization, asset creation, and ensuring compliance with store guidelines."
        },
        {
            q: "Will you provide the source code after development?",
            a: "Yes, once the project is completed and all dues are cleared, full ownership of the source code and IP is transferred to you."
        },
        {
            q: "Do you offer post-launch marketing for the app?",
            a: "While this page focuses on development, our digital marketing team specializes in App Store Optimization (ASO) and user acquisition campaigns."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Transform Your Vision into <br className="hidden md:block" /> <span className="text-brand-cyan">Mobile Reality</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We engineer award-winning mobile applications that deliver exceptional user experiences and drive business results across all platforms.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Build Your App
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
                        Full-Stack <span className="text-brand-cyan">Mobile App</span> Development
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        From discovery to deployment, we cover every aspect of the mobile app lifecycle to ensure your product succeeds in a competitive market.
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
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Engineering for <span className="text-brand-cyan">Mobile Excellence</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Our development philosophy centers on user-centric design and technical robustness. We build apps that are not just beautiful, but also incredibly fast and secure.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "User-Focused UX Design",
                                    "High-Performance Native Code",
                                    "Secure API Communication",
                                    "Continuous Integration & Deployment",
                                    "Scalable Cloud Backend",
                                    "Rigorous Multi-Device Testing"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 relative lg:pl-12">
                             <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                        <Code2 className="text-brand-cyan w-10 h-10 mb-4" />
                                        <h4 className="font-bold text-lg mb-2">Modern Stack</h4>
                                        <p className="text-sm text-gray-500">Swift, Kotlin, React Native, Flutter.</p>
                                    </div>
                                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                        <Globe className="text-brand-cyan w-10 h-10 mb-4" />
                                        <h4 className="font-bold text-lg mb-2">Global Scale</h4>
                                        <p className="text-sm text-gray-500">Apps designed for millions of users.</p>
                                    </div>
                                </div>
                                <div className="space-y-6 mt-12">
                                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                        <Activity className="text-brand-cyan w-10 h-10 mb-4" />
                                        <h4 className="font-bold text-lg mb-2">Real-time</h4>
                                        <p className="text-sm text-gray-500">WebSocket & Push notification experts.</p>
                                    </div>
                                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                        <ShieldCheck className="text-brand-cyan w-10 h-10 mb-4" />
                                        <h4 className="font-bold text-lg mb-2">Enterprise Sec</h4>
                                        <p className="text-sm text-gray-500">End-to-end data security.</p>
                                    </div>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Let's Create Your <span className="text-brand-cyan">Mobile Success</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Ready to start your mobile journey? Get a free consultation and feasibility report for your app idea today.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Request a Free App Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MobileAppsPage;
