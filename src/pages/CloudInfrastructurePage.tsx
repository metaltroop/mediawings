
import { useState } from 'react';
import { 
    Server, 
    Zap, 
    Cpu, 
    Database, 
    Lock,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Activity,
    Globe,
    Settings,
    RefreshCw
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CloudInfrastructurePage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Server className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Architecture Design",
            desc: "Designing scalable and resilient cloud environments tailored to your specific application and business requirements.",
            color: "bg-blue-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-purple-600" />,
            title: "High Availability Setup",
            desc: "Ensuring your services remain online with multi-region deployments, load balancing, and automated failover systems.",
            color: "bg-purple-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-orange-500" />,
            title: "Cloud Security & Hardening",
            desc: "Implementing industry-standard security protocols, IAM policies, and VPC configurations to protect your cloud assets.",
            color: "bg-orange-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-pink-500" />,
            title: "Performance Optimization",
            desc: "Fine-tuning compute and storage resources to minimize latency and ensure a lightning-fast experience for your users.",
            color: "bg-pink-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-green-500" />,
            title: "DevOps & CI/CD",
            desc: "Automating your deployment pipeline to allow for rapid, reliable, and frequent software updates with zero downtime.",
            color: "bg-green-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-indigo-500" />,
            title: "Managed Cloud Services",
            desc: "Ongoing 24/7 monitoring, patching, and resource management to keep your infrastructure running at peak efficiency.",
            color: "bg-indigo-50"
        },
        {
            icon: <Database className="w-8 h-8 text-yellow-500" />,
            title: "Database Management",
            desc: "Deploying and managing high-performance relational and NoSQL databases with automated backup and scaling.",
            color: "bg-yellow-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-red-500" />,
            title: "Edge Computing & CDN",
            desc: "Distributing your content globally to reduce latency and improve load times for users regardless of their location.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Which cloud provider should I choose?",
            a: "The choice depends on your existing tech stack and budget. AWS is the most feature-rich, Azure is great for Windows-based enterprises, and Google Cloud excels in data and AI. We help you choose the best fit."
        },
        {
            q: "How do you ensure zero downtime during upgrades?",
            a: "We use blue-green deployments and canary releases to test new versions in parallel with the live environment before switching traffic over seamlessly."
        },
        {
            q: "What measures do you take for disaster recovery?",
            a: "We implement automated daily backups, cross-region replication, and regular recovery drills to ensure your data is safe and your business can resume quickly after any event."
        },
        {
            q: "How do you handle cloud cost management?",
            a: "We perform regular audits to identify underutilized resources, implement auto-scaling to match demand, and leverage reserved instances to minimize your monthly spend."
        },
        {
            q: "Do you provide support for hybrid cloud setups?",
            a: "Yes, we specialize in bridging the gap between your local data centers and the public cloud to create a unified and secure hybrid infrastructure."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Power Your Growth with <br className="hidden md:block" /> <span className="text-brand-cyan">Cloud Infrastructure</span> Excellence
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We design and manage high-perfomance cloud environments that provide the stability and scalability your modern business demands.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Architect Your Cloud
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
                        Resilient & Scalable <span className="text-brand-cyan">Cloud Designs</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        Our cloud architects combine deep technical knowledge with industry best practices to build infrastructure that stays up while your business scales.
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

            {/* Uptime Strip */}
            <section className="py-12 bg-gray-900 text-white border-y border-white/5">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        <div>
                            <div className="text-brand-cyan font-black text-4xl mb-1">99.99%</div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest font-bold font-heading">SLA Uptime Guarantee</div>
                        </div>
                        <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
                        <div>
                            <div className="text-brand-cyan font-black text-4xl mb-1">24/7/365</div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest font-bold font-heading">Proactive Monitoring</div>
                        </div>
                        <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
                        <div>
                            <div className="text-brand-cyan font-black text-4xl mb-1">&lt; 15min</div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest font-bold font-heading">Incident Response Time</div>
                        </div>
                        <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
                        <div>
                            <div className="text-brand-cyan font-black text-4xl mb-1">ZERO</div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest font-bold font-heading">Data Loss Records</div>
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
                                Our <span className="text-brand-cyan">Cloud</span> Philosophy
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We treat infrastructure as code. This means your environment is version-controlled, reproducible, and can be rebuilt in minutes, not days.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Infrastructure as Code (Terraform/CloudFormation)",
                                    "Enterprise-Grade Data Encryption",
                                    "Automated Compliance Monitoring",
                                    "Serverless & Microservices Experts",
                                    "Cost-Optimized Resource Management",
                                    "Global Multi-Cloud Engineering"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 relative">
                             <div className="absolute -inset-4 bg-brand-cyan/20 blur-3xl rounded-full"></div>
                             <div className="relative bg-gray-800 p-8 md:p-12 rounded-4xl border border-white/5">
                                 <div className="grid grid-cols-2 gap-8 mb-12">
                                     <div>
                                         <Cpu className="text-brand-cyan w-10 h-10 mb-4" />
                                         <h4 className="font-bold text-lg mb-2">Compute</h4>
                                         <p className="text-xs text-gray-500">Auto-scaling instances.</p>
                                     </div>
                                     <div>
                                         <Database className="text-brand-cyan w-10 h-10 mb-4" />
                                         <h4 className="font-bold text-lg mb-2">Storage</h4>
                                         <p className="text-xs text-gray-500">Fast, redundant data stores.</p>
                                     </div>
                                 </div>
                                 <button onClick={openModal} className="w-full bg-brand-cyan text-white font-bold py-4 rounded-xl hover:bg-brand-cyan/90 transition-colors shadow-lg shadow-brand-cyan/20">
                                     Free Cloud Readiness Audit
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
                        Future-Proof Your <span className="text-brand-cyan">Cloud</span> Today
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Our experts are ready to audit your current setup and provide a roadmap for superior performance and cost savings.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule an Architect Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CloudInfrastructurePage;
