
import { useState } from 'react';
import { 
    Database, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Globe,
    Server,
    Shield,
    Activity,
    Lock,
    LifeBuoy
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const WebHostingPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Zap className="w-8 h-8 text-brand-cyan" />,
            title: "NVMe SSD Storage",
            desc: "Ultra-fast read/write speeds that ensure your website content loads almost instantly for your visitors.",
            color: "bg-blue-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
            title: "Free SSL Certificates",
            desc: "Protect your visitors' data and boost your SEO rankings with free AutoSSL enabled on every domain.",
            color: "bg-purple-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-orange-500" />,
            title: "99.9% Uptime Guarantee",
            desc: "Our redundant network and server architecture ensure your website stays online even during maintenance.",
            color: "bg-orange-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-pink-500" />,
            title: "Imunify360 Security",
            desc: "Real-time malware scanning, firewall protection, and intrusion detection to keep hackers at bay.",
            color: "bg-pink-50"
        },
        {
            icon: <Database className="w-8 h-8 text-green-500" />,
            title: "Automated Backups",
            desc: "Daily off-site backups with easy restore points, so your data is always safe, no matter what happens.",
            color: "bg-green-50"
        },
        {
            icon: <LifeBuoy className="w-8 h-8 text-indigo-500" />,
            title: "24/7 Expert Support",
            desc: "Our system admins are available round the clock to help you with migrations, setup, or troubleshooting.",
            color: "bg-indigo-50"
        },
        {
            icon: <Server className="w-8 h-8 text-yellow-500" />,
            title: "Multi-Location Servers",
            desc: "Pick a data center closest to your audience for the lowest possible latency and fastest response times.",
            color: "bg-yellow-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-red-500" />,
            title: "HTTP/3 Enabled",
            desc: "Leverage the latest web protocols to deliver your assets faster and more securely than ever before.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is web hosting and why do I need it?",
            a: "Web hosting is a service that provides the server space and resources needed for your website to be accessible on the internet. Without hosting, your website files have nowhere to live."
        },
        {
            q: "Do you offer free migration?",
            a: "Yes! Our team will move your entire website from your old host to our servers for free, ensuring zero downtime and a smooth transition."
        },
        {
            q: "Can I host multiple websites?",
            a: "Depending on the plan you choose, you can host anywhere from a single website to unlimited domains on a single hosting account."
        },
        {
            q: "Is an email account included?",
            a: "Yes, all our hosting plans include the ability to create professional email addresses (e.g., info@yourdomain.com) at no extra cost."
        },
        {
            q: "How secure is your hosting environment?",
            a: "We use isolated account technology (CloudLinux), proactive malware scanning, and server-level firewalls to ensure every website is perfectly secure."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Reliable, High-Speed <br className="hidden md:block" /> <span className="text-brand-cyan">Premium Web Hosting</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the power of NVMe storage and LiteSpeed servers. The perfect home for your website, managed by experts who care.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Claim Your Hosting Space
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
                        Hosting That <span className="text-brand-cyan">Delivers</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Whether you're starting a blog or running a high-traffic portal, our hosting architecture is built to stay fast and secure under any load.
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

            {/* Performance Strip - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Built on <span className="text-brand-cyan">LiteSpeed</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                We use LiteSpeed Web Server, which is up to 533% faster than Apache and 300% faster than Nginx, ensuring your dynamic content is served with zero delay.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "LSCache Optimization", desc: "Built-in caching for WordPress, Magento, and Joomla that slashes load times." },
                                    { title: "DDoS Mitigation", desc: "Server-level protection that filters out malicious traffic before it hits your site." },
                                    { title: "Daily Snapshots", desc: "Complete daily snapshots of your environment for total peace of mind." }
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
                                 <Server className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">100% Legit <br /> Infrastructure.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">No overselling. Just pure, dedicated resources for your web presence.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Explore Plans
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Icons Strip */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center opacity-40 grayscale">
                         <div className="flex flex-col items-center">
                             <Shield className="w-12 h-12 mb-4" />
                             <span className="text-xs uppercase font-bold tracking-widest">SECURE</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <Activity className="w-12 h-12 mb-4" />
                             <span className="text-xs uppercase font-bold tracking-widest">STABLE</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <Zap className="w-12 h-12 mb-4" />
                             <span className="text-xs uppercase font-bold tracking-widest">FAST</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <LifeBuoy className="w-12 h-12 mb-4" />
                             <span className="text-xs uppercase font-bold tracking-widest text-center">SUPPORTED</span>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Give Your Website the <span className="text-brand-cyan">Home It Deserves</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Stop settling for average hosting. Step up to elite performance and bulletproof security. Let's get your site online today.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Start Your Hosting Journey
                    </button>
                </div>
            </section>
        </div>
    );
};

export default WebHostingPage;
