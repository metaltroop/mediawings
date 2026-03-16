
import { useState } from 'react';
import { 
    Code2, 
    Settings, 
    ShieldCheck, 
    Zap, 
    Database, 
    Cpu, 
    Layers, 
    ChevronDown,
    ChevronUp,
    Binary,
    Container,
    Cloud,
    GitBranch
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const SoftwareDevelopmentPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Application Development",
            desc: "End-to-end development of scalable, secure, and high-performance applications tailored to your business needs.",
            color: "bg-blue-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-purple-600" />,
            title: "Enterprise Software Solutions",
            desc: "Robust enterprise-grade systems designed to streamline complex business processes and improve efficiency.",
            color: "bg-purple-50"
        },
        {
            icon: <Cpu className="w-8 h-8 text-orange-500" />,
            title: "Legacy System Modernization",
            desc: "Updating and refactoring outdated systems to modern architectures for better performance and security.",
            color: "bg-orange-50"
        },
        {
            icon: <Container className="w-8 h-8 text-pink-500" />,
            title: "Microservices Architecture",
            desc: "Building modular, loosely coupled services that are easy to deploy, scale, and maintain in a cloud environment.",
            color: "bg-pink-50"
        },
        {
            icon: <Database className="w-8 h-8 text-green-500" />,
            title: "Database Design & Optimization",
            desc: "Expertly structured data models and optimized queries for maximum reliability and speed.",
            color: "bg-green-50"
        },
        {
            icon: <Cloud className="w-8 h-8 text-indigo-500" />,
            title: "Cloud-Native Development",
            desc: "Applications designed specifically for cloud environments to take advantage of scalability and flexibility.",
            color: "bg-indigo-50"
        },
        {
            icon: <Binary className="w-8 h-8 text-yellow-500" />,
            title: "API Development & Integration",
            desc: "Building secure, well-documented APIs and integrating third-party services into your software ecosystem.",
            color: "bg-yellow-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-red-500" />,
            title: "Maintenance & DevOps",
            desc: "Continuous integration, deployment, and monitoring to ensure your software remains stable and updated.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is your software development process?",
            a: "We follow an Agile methodology consisting of discovery, planning, design, development, testing, and deployment, with continuous feedback loops."
        },
        {
            q: "How do you ensure software security?",
            a: "We implement security best practices from the start, including data encryption, secure authentication, and regular vulnerability assessments."
        },
        {
            q: "Can you take over an existing project?",
            a: "Yes, we can perform a technical audit and seamlessly transition your existing codebase for ongoing development and support."
        },
        {
            q: "What tech stacks do you specialize in?",
            a: "Our core expertise includes MERN/MEAN stacks, Python/Django, Go, Java, and cloud platforms like AWS, Azure, and Google Cloud."
        },
        {
            q: "Do you provide documentation for the code?",
            a: "Yes, we provide comprehensive technical documentation, including API specs, architecture diagrams, and clean, well-commented code."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Custom <span className="text-brand-cyan">Software</span> Development <br className="hidden md:block" /> Engineered for Scale
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We build robust, enterprise-grade software solutions that solve complex business challenges and drive digital transformation.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Start Your Project
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight">
                        Our Software <span className="text-brand-cyan">Engineering</span> Capabilities
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        From startups to enterprises, we deliver high-quality code that powers the most demanding business operations.
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

            {/* Development Process Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Our <span className="text-brand-cyan">Agile</span> Software Development Lifecycle
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We combine technical expertise with business acumen to ensure your software is not only technically sound but also strategically aligned with your growth goals.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Discovery", desc: "Requirements gathering & roadmap definition." },
                                    { title: "Architecture", desc: "System design & scalability planning." },
                                    { title: "Development", desc: "High-quality coding with regular sprints." },
                                    { title: "QA & Testing", desc: "Rigorous automated & manual testing." },
                                    { title: "Deployment", desc: "Smooth release with CI/CD pipelines." },
                                    { title: "Support", desc: "Ongoing maintenance & optimization." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                                            <span className="text-brand-cyan font-bold leading-none">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white leading-none mb-2">{item.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <GitBranch className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Version Control</h4>
                                    <p className="text-sm text-gray-500">Robust Git workflows for collaboration.</p>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors mt-8">
                                    <ShieldCheck className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Secure Code</h4>
                                    <p className="text-sm text-gray-500">Industry-standard security protocols.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <Cloud className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">DevOps Ready</h4>
                                    <p className="text-sm text-gray-500">Automated deployment & monitoring.</p>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors mt-8">
                                    <Zap className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Fast Performance</h4>
                                    <p className="text-sm text-gray-500">Optimized for speed & concurrency.</p>
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
                        Transform Your Idea into <span className="text-brand-cyan">Reality</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Ready to build something extraordinary? Our software experts are here to turn your vision into a scalable product.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Technical Discovery Call
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevelopmentPage;
