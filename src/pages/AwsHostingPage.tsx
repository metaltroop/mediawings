
import { useState } from 'react';
import { 
    Cloud, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Server,
    Database,
    Globe,
    Lock,
    TrendingUp,
    Activity
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const AwsHostingPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Server className="w-8 h-8 text-brand-cyan" />,
            title: "EC2 Computing",
            desc: "Highly scalable virtual servers in the cloud. Tailored instances for every performance requirement.",
            color: "bg-blue-50"
        },
        {
            icon: <Database className="w-8 h-8 text-purple-600" />,
            title: "Managed RDS",
            desc: "Worry-free relational database management with automated backups, patching, and multi-AZ deployments.",
            color: "bg-purple-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-orange-500" />,
            title: "WAF & Security Hub",
            desc: "Enterprise-grade protection against web exploits and unauthorized access across your entire AWS environment.",
            color: "bg-orange-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-pink-500" />,
            title: "CloudFront CDN",
            desc: "Accelerate your content delivery globally with AWS's ultra-low latency edge network locations.",
            color: "bg-pink-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: "Auto-Scaling Groups",
            desc: "Automatically adjust your resource capacity to maintain steady performance at the lowest possible cost.",
            color: "bg-green-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-indigo-500" />,
            title: "CloudWatch Monitoring",
            desc: "Real-time visibility into your applications and infrastructure for proactive performance tuning.",
            color: "bg-indigo-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "IAM Identity Management",
            desc: "Granular access control ensuring only authorized users and services can interact with your cloud data.",
            color: "bg-yellow-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-red-500" />,
            title: "Serverless Lambda",
            desc: "Run code without provisioning or managing servers. Pay only for the compute time you consume.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why choose AWS for my business?",
            a: "AWS offers unrivaled reliability, global reach, and the most comprehensive set of cloud services, allowing your business to innovate faster and scale with ease."
        },
        {
            q: "Do you provide managed AWS services?",
            a: "Yes! We handle the architecting, deployment, monitoring, and ongoing maintenance of your AWS infrastructure so you don't have to."
        },
        {
            q: "How can AWS help reduce my IT costs?",
            a: "With AWS's pay-as-you-go model and our optimization strategies, you only pay for the resources you actually use, eliminating waste."
        },
        {
            q: "What is your approach to cloud security?",
            a: "We follow the AWS Shared Responsibility Model and implement best practices like the Well-Architected Framework to ensure your data is secure."
        },
        {
            q: "Can you help migrate our legacy servers to AWS?",
            a: "Absolutely. We specialize in zero-downtime migrations from on-premise servers or other cloud providers directly into the AWS ecosystem."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Scale Beyond Limits with <br className="hidden md:block" /> <span className="text-brand-cyan">AWS Cloud Hosting</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Harness the power of the world's most advanced cloud platform. Managed, optimized, and secured by the Mediawings AWS team.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Architect Your Cloud Future
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
                        The Power of <span className="text-brand-cyan">Amazon Web Services</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        We leverage the full AWS stack to build resilient, high-performance environments tailored to your specific application needs.
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

            {/* Why Managed Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Expert <span className="text-brand-cyan">AWS Management</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                AWS is vast and complex. We simplify it for you by providing architecture design, security enforcement, and 24/7 technical oversight.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Well-Architected Reviews", desc: "Regular audits to ensure your environment follows security and cost-optimization best practices." },
                                    { title: "Zero-Downtime Deployments", desc: "Implementing CI/CD pipelines for seamless updates without impacting your users." },
                                    { title: "Disaster Recovery Planning", desc: "Robust multi-region backup strategies to protect against even the catastrophic failures." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <Cloud className="text-brand-cyan w-6 h-6" />
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
                                 <Activity className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-pulse" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">99.99% <br /> Availability.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Build on the global backbone that powers the web's biggest platforms.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Talk to a Cloud Architect
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AWS Logo Strip placeholder */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center opacity-40 grayscale">
                         <div className="text-2xl font-black tracking-tighter">AMAZON EC2</div>
                         <div className="text-2xl font-black tracking-tighter">AWS LAMBDA</div>
                         <div className="text-2xl font-black tracking-tighter">AMAZON S3</div>
                         <div className="text-2xl font-black tracking-tighter">AWS CLOUDFRONT</div>
                         <div className="text-2xl font-black tracking-tighter">AMAZON RDS</div>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Launch Your <span className="text-brand-cyan">AWS Strategy</span> Today
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed px-4">
                        Stop guessing your infrastructure needs. Let's build a secure, cost-optimized, and high-performance AWS environment for your business.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule an AWS Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AwsHostingPage;
