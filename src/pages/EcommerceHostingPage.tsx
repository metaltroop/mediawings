
import { useState } from 'react';
import { 
    ShoppingCart, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Database,
    Lock,
    RefreshCw,
    TrendingUp,
    Globe,
    SearchCheck
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const EcommerceHostingPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Zap className="w-8 h-8 text-brand-cyan" />,
            title: "Lightning Fast Performance",
            desc: "Optimized server configurations and edge caching ensure your store loads in under 2 seconds, reducing bounce rates.",
            color: "bg-blue-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-purple-600" />,
            title: "PCI DSS Compliance",
            desc: "Secure infrastructure that meets payment card industry standards to protect your customers' financial data.",
            color: "bg-purple-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
            title: "Auto-Scaling Architecture",
            desc: "Infrastructure that grows with you. We automatically handle traffic spikes during Black Friday and seasonal sales.",
            color: "bg-orange-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
            title: "WAF & DDoS Protection",
            desc: "Advanced Web Application Firewall and DDoS mitigation to keep your store online even during malicious attacks.",
            color: "bg-pink-50"
        },
        {
            icon: <Database className="w-8 h-8 text-green-500" />,
            title: "Daily Backups",
            desc: "Automated daily backups with one-click restore functionality, ensuring your store data is always safe and recoverable.",
            color: "bg-green-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-indigo-500" />,
            title: "Staging Environments",
            desc: "Test new products, themes, and plugins in a safe staging environment before pushing them to your live store.",
            color: "bg-indigo-50"
        },
        {
            icon: <SearchCheck className="w-8 h-8 text-yellow-500" />,
            title: "SEO Optimization",
            desc: "Server-level optimizations for Core Web Vitals to help your products rank higher on Google Search results.",
            color: "bg-yellow-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-red-500" />,
            title: "Global CDN",
            desc: "Content Delivery Network with 200+ global locations to ensure your store is fast for customers anywhere in the world.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Can you host my WooCommerce or Magento store?",
            a: "Yes, we offer specialized hosting environments optimized specifically for WooCommerce, Magento, PrestaShop, and custom-built eCommerce platforms."
        },
        {
            q: "What happens if my site gets a huge traffic spike?",
            a: "Our auto-scaling technology detects the spike and automatically allocates more resources to your store to maintain performance without any manual intervention."
        },
        {
            q: "Is an SSL certificate included?",
            a: "Yes, we provide free Let's Encrypt SSL certificates for all hosted stores, ensuring your customer data is always encrypted and secure."
        },
        {
            q: "Do you offer migration support?",
            a: "Absolutely. Our expert team will migrate your entire store, including database and media, with zero downtime and thorough post-migration testing."
        },
        {
            q: "How secure is your eCommerce hosting?",
            a: "We use isolated container technology, hardware-level firewalls, and 24/7 security monitoring to prevent unauthorized access and protect your store."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Convert More Visitors with <br className="hidden md:block" /> <span className="text-brand-cyan">High-Performance eCommerce Hosting</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Don't let slow hosting kill your sales. We provide the speed, security, and scalability your online store needs to thrive.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Optimize Your Store Now
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
                        Built for <span className="text-brand-cyan">Sales</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our hosting environment is engineered specifically to handle the intensive database queries and media-heavy pages of modern eCommerce stores.
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

            {/* The ROI of Speed Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Speed is Your <span className="text-brand-cyan">Best Salesman</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                A 100-millisecond delay in load time can cause conversion rates to drop by 7%. We optimize every layer of the stack to ensure your customers never have to wait.
                            </p>
                            
                            <div className="space-y-6 text-left">
                                {[
                                    { title: "Redis & Memcached", desc: "Advanced caching layers to serve repeat visitors almost instantly." },
                                    { title: "HTTP/3 & Brotli", desc: "The latest web protocols for lightning-fast data transmission." },
                                    { title: "NVMe Storage", desc: "Ultra-fast SSD drives for near-instant database responses." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <Zap className="text-brand-cyan w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 text-center">
                             <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                 <ShoppingCart className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter text-center">100% Secure <br /> Shopping.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto text-center">Build trust with your customers by providing a secure, lightning-fast shopping experience.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Compare Plans
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Strip */}
            <section className="py-16 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center opacity-40">
                         <div className="text-2xl font-bold tracking-tighter">WOOCOMMERCE</div>
                         <div className="text-2xl font-bold tracking-tighter">MAGENTO</div>
                         <div className="text-2xl font-bold tracking-tighter">OPENCART</div>
                         <div className="text-2xl font-bold tracking-tighter">PRESTASHOP</div>
                         <div className="text-2xl font-bold tracking-tighter">BIGCOMMERCE</div>
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
                        Scale Your <span className="text-brand-cyan">eCommerce Business</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to join the fastest stores on the web? Let's discuss a hosting solution that grows with your sales and protects your brand.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Request Migration Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default EcommerceHostingPage;
