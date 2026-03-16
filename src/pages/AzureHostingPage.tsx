
import { useState } from 'react';
import { 
    Cloud, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Database,
    Lock,
    Cpu,
    Network,
    Users,
    Activity
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const AzureHostingPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Cpu className="w-8 h-8 text-blue-600" />,
            title: "Azure Virtual Machines",
            desc: "On-demand, scalable computing resources that give you the flexibility of virtualization without buying hardware.",
            color: "bg-blue-50"
        },
        {
            icon: <Database className="w-8 h-8 text-cyan-600" />,
            title: "Azure SQL Database",
            desc: "Always-up-to-date relational database service built for the cloud, with AI-powered performance and security.",
            color: "bg-cyan-50"
        },
        {
            icon: <Users className="w-8 h-8 text-indigo-600" />,
            title: "Active Directory",
            desc: "Enterprise identity service that provides single sign-on and multi-factor authentication to protect your users.",
            color: "bg-indigo-50"
        },
        {
            icon: <Network className="w-8 h-8 text-purple-600" />,
            title: "Azure Virtual Network",
            desc: "Logically isolated sections of the Azure network where you can launch your Azure resources securely.",
            color: "bg-purple-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-red-500" />,
            title: "Azure Sentinel",
            desc: "Cloud-native SIEM that provides intelligent security analytics for your entire enterprise environment.",
            color: "bg-red-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Azure App Service",
            desc: "Quickly build, deploy, and scale web apps and APIs on your terms using .NET, Java, Node.js, Python, and PHP.",
            color: "bg-yellow-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
            title: "Azure Backup",
            desc: "Simple and cost-effective backup-as-a-service solution that protects your data no matter where it resides.",
            color: "bg-green-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-orange-500" />,
            title: "Azure Monitor",
            desc: "Full observability into your applications, infrastructure, and network to maximize performance and availability.",
            color: "bg-orange-50"
        }
    ];

    const faqs = [
        {
            q: "What makes Azure different from other cloud providers?",
            a: "Azure is uniquely positioned for hybrid cloud environments and offers seamless integration with Microsoft 365 and other Windows-based enterprise tools."
        },
        {
            q: "How does Azure ensure data residency?",
            a: "Azure has more global regions than any other cloud provider, allowing you to keep your data close to your users and meet strict regulatory requirements."
        },
        {
            q: "Can I run open-source software on Azure?",
            a: "Absolutely. Over 50% of Azure workloads run on Linux, and Azure fully supports popular open-source technologies like Kubernetes, PostgreSQL, and more."
        },
        {
            q: "What is your approach to Azure cost management?",
            a: "We implement Azure Cost Management and real-time monitoring to help you track spending, set budgets, and optimize your resource allocation."
        },
        {
            q: "Is Azure suitable for small businesses?",
            a: "Yes. Azure's scalable architecture means you only pay for what you need, making it an excellent choice for businesses of any size."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Empower Your Enterprise with <br className="hidden md:block" /> <span className="text-brand-cyan">Microsoft Azure Cloud</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The cloud platform built for professional businesses. Integrated, intelligent, and incredibly secure. Managed by Mediawings experts.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Design Your Azure Strategy
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight text-center">
                        Intelligent <span className="text-brand-cyan">Azure Solutions</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        From hybrid cloud to AI-powered analytics, we help you leverage the full potential of Microsoft's world-class cloud ecosystem.
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

            {/* Hybrid Cloud Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Seamless <span className="text-brand-cyan">Hybrid Cloud</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                Azure's unique hybrid capabilities allow you to maintain your on-premise assets while scaling to the cloud, giving you the best of both worlds.
                            </p>
                            
                            <div className="space-y-6 text-left">
                                {[
                                    { title: "Azure Arc Resource Management", desc: "Manage your servers, Kubernetes clusters, and apps across on-premises and edge." },
                                    { title: "Active Directory Integration", desc: "Unified identity management across all your local and cloud-based applications." },
                                    { title: "Azure Stack Solutions", desc: "Build and run consistently across your data center, edge locations, and the cloud." }
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
                                 <Lock className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-pulse" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Zero Trust <br /> Security.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Industry-leading security compliance that protects your brand and your data.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Talk to an Azure Expert
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Azure Service Strip placeholder */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center opacity-40 grayscale">
                         <div className="text-2xl font-black tracking-tighter">SQL SERVER</div>
                         <div className="text-2xl font-black tracking-tighter text-center italic">ACTIVE DIRECTORY</div>
                         <div className="text-2xl font-black tracking-tighter">VIRTUAL MACHINES</div>
                         <div className="text-2xl font-black tracking-tighter text-center">AZURE APPS</div>
                         <div className="text-2xl font-black tracking-tighter">COSMOS DB</div>
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
                        Modernize Your <span className="text-brand-cyan">Infrastructure</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed px-4">
                        Ready to take the next step in your cloud journey? Let's discuss an Azure solution that drives efficiency and growth for your business.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule an Azure Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AzureHostingPage;
