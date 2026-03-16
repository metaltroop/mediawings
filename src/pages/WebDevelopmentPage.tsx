
import { useState } from 'react';
import { 
    Smartphone, 
    Globe, 
    ShoppingCart, 
    Layout, 
    ShieldCheck, 
    Zap, 
    ChevronDown,
    ChevronUp,
    Settings,
    Layers,
    Cpu,
    Database,
    Palette,
    CheckCircle2
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const WebDevelopmentPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Globe className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Web Solutions",
            desc: "Tailored web applications built from the ground up to match your specific business logic and user needs.",
            color: "bg-blue-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-purple-600" />,
            title: "Progressive Web Apps",
            desc: "High-performance PWAs that offer a native app-like experience across all devices and browsers.",
            color: "bg-purple-50"
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
            title: "E-commerce Ecosystems",
            desc: "Scalable online stores with seamless payment integration, inventory management, and conversion-optimized UX.",
            color: "bg-orange-50"
        },
        {
            icon: <Layout className="w-8 h-8 text-pink-500" />,
            title: "Enterprise Portals",
            desc: "Robust internal systems and customer portals designed for high security and seamless data management.",
            color: "bg-pink-50"
        },
        {
            icon: <Database className="w-8 h-8 text-green-500" />,
            title: "CMS Development",
            desc: "User-friendly Content Management Systems that give you full control over your digital content without technical debt.",
            color: "bg-green-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-indigo-500" />,
            title: "API & System Integration",
            desc: "Connecting your web presence with third-party tools, ERPs, and CRMs for a unified business workflow.",
            color: "bg-indigo-50"
        },
        {
            icon: <Palette className="w-8 h-8 text-yellow-500" />,
            title: "UI/UX Architecture",
            desc: "Data-driven design that prioritizes user journey, accessibility, and brand aesthetics to drive engagement.",
            color: "bg-yellow-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Maintenance & Support",
            desc: "Ongoing monitoring, security patching, and performance optimization to keep your web assets ahead of the curve.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "How long does it take to develop a custom website?",
            a: "Typically, a custom web project takes between 8 to 16 weeks depending on complexity. We follow an agile process involving discovery, design, development, and rigorous testing phases."
        },
        {
            q: "Will my website be mobile-responsive?",
            a: "Absolutely. We follow a mobile-first design philosophy, ensuring your website provides an optimal viewing experience across smartphones, tablets, and desktops."
        },
        {
            q: "Do you offer post-launch support and maintenance?",
            a: "Yes, we provide comprehensive maintenance packages that include security updates, performance monitoring, regular backups, and feature enhancements."
        },
        {
            q: "Can you integrate third-party tools like CRM or ERP?",
            a: "Integration is one of our core strengths. We have extensive experience connecting web platforms with systems like Salesforce, SAP, HubSpot, and various payment gateways."
        },
        {
            q: "What technologies do you specialize in?",
            a: "We specialize in modern stacks including React, Node.js, Next.js, Python, and various CMS platforms like WordPress and Headless CMS solutions."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Website Design & <span className="text-brand-cyan">Development</span> <br className="hidden md:block" /> Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Engineering high-performance, scalable, and secure web solutions that drive business growth and deliver exceptional user experiences.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Let's Talk
                    </button>

                    {/* Trust Badges */}
                    <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                        <span className="font-bold text-xl text-gray-400">Clutch</span>
                        <span className="font-bold text-xl text-gray-400">HubSpot</span>
                        <span className="font-bold text-xl text-gray-400">Upwork</span>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight">
                        Our Web Development <span className="text-brand-cyan">Nurtures</span> Your Brand
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        We don't just build websites; we create digital assets that empower your business to scale and succeed in a competitive landscape.
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

            {/* Features/Stats Section */}
            <section className="py-20 bg-brand-cyan">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">500+</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">15+</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">98%</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Client Retention</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">24/7</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Dedicated Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Full-Cycle <span className="text-brand-cyan">Software</span> Development Lifecycle
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Our development philosophy is rooted in engineering excellence. We leverage modern frameworks and agile methodologies to ensure your product is built for scale, performance, and security.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Discovery & Strategic Roadmap",
                                    "User-Centric Architecture & Design",
                                    "High-Performance Agile Development",
                                    "Continuous Integration & Quality Assurance",
                                    "Seamless Deployment & Scalability",
                                    "24/7 Security & Performance Monitoring"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <Zap className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">High Performance</h4>
                                    <p className="text-sm text-gray-500">Optimized for speed and core web vitals.</p>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors mt-8">
                                    <ShieldCheck className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Secure by Design</h4>
                                    <p className="text-sm text-gray-500">Enterprise-grade security implementations.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <Layers className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Scalable Tech</h4>
                                    <p className="text-sm text-gray-500">Future-proof architecture for growth.</p>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors mt-8">
                                    <Cpu className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Modern Stack</h4>
                                    <p className="text-sm text-gray-500">Latest frameworks for better reliability.</p>
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
            <section className="py-24 bg-brand-lavender/50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Let's Get Your Project <span className="text-brand-cyan">Started</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Ready to transform your digital presence? Get a free consultation and roadmap for your next web development project.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Request a Free Consultation
                    </button>
                    <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-brand-cyan w-5 h-5" />
                            <span>No-Obligation Audit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-brand-cyan w-5 h-5" />
                            <span>NDA Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-brand-cyan w-5 h-5" />
                            <span>Expert Technical Roadmap</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentPage;
