
import { useState } from 'react';
import { 
    ShoppingCart, 
    CreditCard, 
    ShieldCheck, 
    Zap, 
    Smartphone, 
    BarChart, 
    Globe, 
    Package,
    ChevronDown,
    ChevronUp,
    Search,
    RefreshCw,
    Truck
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const EcommercePage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <ShoppingCart className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Storefront Design",
            desc: "Unique, high-converting e-commerce designs that reflect your brand identity and provide a seamless shopping experience.",
            color: "bg-blue-50"
        },
        {
            icon: <Package className="w-8 h-8 text-purple-600" />,
            title: "Marketplace Integration",
            desc: "Synchronize your store with platforms like Amazon, eBay, and Etsy for a unified multi-channel selling experience.",
            color: "bg-purple-50"
        },
        {
            icon: <CreditCard className="w-8 h-8 text-orange-500" />,
            title: "Secure Payment Gateways",
            desc: "Integration of global and local payment solutions ensuring secure, fast, and frictionless transactions.",
            color: "bg-orange-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-pink-500" />,
            title: "Mobile Commerce (mCommerce)",
            desc: "Optimizing your store for mobile users with fast-loading pages and touch-friendly checkout processes.",
            color: "bg-pink-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-green-500" />,
            title: "Inventory & ERP Sync",
            desc: "Real-time synchronization between your online store and backend inventory or ERP systems for accurate data.",
            color: "bg-green-50"
        },
        {
            icon: <BarChart className="w-8 h-8 text-indigo-500" />,
            title: "Conversion Optimization",
            desc: "Data-driven strategies including A/B testing and funnel analysis to maximize your revenue per visitor.",
            color: "bg-indigo-50"
        },
        {
            icon: <Search className="w-8 h-8 text-yellow-500" />,
            title: "E-commerce SEO",
            desc: "Optimizing product pages and categories to ensure your store ranks high for relevant buyer searches.",
            color: "bg-yellow-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Security & Compliance",
            desc: "Implementing PCI-DSS compliance and robust security protocols to protect customer data and build trust.",
            color: "bg-red-50"
        }
    ];

    const platforms = [
        "Shopify", "Magento", "WooCommerce", "BigCommerce", "Custom Headless", "Salesforce Commerce"
    ];

    const faqs = [
        {
            q: "Which e-commerce platform should I choose?",
            a: "The choice depends on your business size and needs. Shopify is great for ease of use, while Magento/Adobe Commerce offers more flexibility for complex enterprise needs. We help you choose the best fit."
        },
        {
            q: "Can you migrate my existing store to a new platform?",
            a: "Yes, we specialize in seamless migrations, ensuring all your product data, customer history, and SEO rankings are preserved during the transition."
        },
        {
            q: "Do you provide support for third-party marketplace selling?",
            a: "Absolutely. We can integrate your store with Amazon, eBay, and other marketplaces to centralize your orders and inventory management."
        },
        {
            q: "How do you handle e-commerce security?",
            a: "We implement SSL certificates, PCI-compliant payment integrations, and regular security audits to ensure your customers' data is always safe."
        },
        {
            q: "Can you build a custom mobile app for my store?",
            a: "Yes, we develop high-performance native and cross-platform mobile apps that provide a premium shopping experience to your mobile audience."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight text-center">
                        Scalable <span className="text-brand-cyan">E-commerce</span> Solutions <br className="hidden md:block" /> for Global Brands
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We build high-performance online stores that combine stunning design with robust engineering to maximize your sales and ROI.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Build Your Store
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-center text-gray-900 leading-tight">
                        Revolutionize Your <span className="text-brand-cyan">Online Sales</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Our e-commerce expertise spans across strategy, design, and development to deliver a world-class shopping ecosystem.
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

            {/* Platforms Strip */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-row">
                        {platforms.map((platform, idx) => (
                            <span key={idx} className="text-gray-400 font-bold text-xl uppercase tracking-widest">{platform}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                eCommerce That <span className="text-brand-cyan">Converts</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We focus on the intersection of psychology and technology. Our stores are designed to guide users from discovery to checkout with zero friction.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <Zap className="text-brand-cyan w-8 h-8 mb-2" />
                                    <h4 className="font-bold text-lg">Lightning Fast</h4>
                                    <p className="text-sm text-gray-500">Optimized loading speeds for better SEO and lower bounce rates.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Truck className="text-brand-cyan w-8 h-8 mb-2" />
                                    <h4 className="font-bold text-lg">Smooth Logistics</h4>
                                    <p className="text-sm text-gray-500">Integrated shipping and fulfillment automation.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <ShieldCheck className="text-brand-cyan w-8 h-8 mb-2" />
                                    <h4 className="font-bold text-lg">Hack Proof</h4>
                                    <p className="text-sm text-gray-500">Continuous monitoring and proactive security scanning.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Globe className="text-brand-cyan w-8 h-8 mb-2" />
                                    <h4 className="font-bold text-lg">Multi-Currency</h4>
                                    <p className="text-sm text-gray-500">Expand your reach with global payment and currency support.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
                                <div className="bg-gray-800 p-10 rounded-[40px] border border-gray-700 relative z-10">
                                    <h4 className="text-2xl font-bold mb-6">Our Success Track</h4>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                            <span className="text-gray-400">Avg. Revenue Increase</span>
                                            <span className="text-brand-cyan font-black text-2xl">+145%</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                            <span className="text-gray-400">Conversion Rate Bump</span>
                                            <span className="text-brand-cyan font-black text-2xl">3.8x</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Cart Abandonment Drop</span>
                                            <span className="text-brand-cyan font-black text-2xl">-22%</span>
                                        </div>
                                    </div>
                                    <button onClick={openModal} className="w-full mt-10 bg-brand-cyan text-white font-bold py-4 rounded-2xl hover:bg-brand-cyan/90 transition-colors">
                                        Get A Quote
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Grow Your <span className="text-brand-cyan">E-commerce</span> Business
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Ready to take your online store to the next level? Join the hundreds of brands scaling their revenue with Mediawings.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Free Store Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default EcommercePage;
