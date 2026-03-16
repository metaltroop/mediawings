
import { useState } from 'react';
import { 
    Globe, 
    Settings, 
    Zap, 
    ShieldCheck, 
    Search, 
    Smartphone, 
    Wrench,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Palette,
    Layers,
    ShoppingCart
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const WordPressPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Palette className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Theme Development",
            desc: "Bespoke WordPress themes built from scratch to match your brand's unique design and functional requirements.",
            color: "bg-blue-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-purple-600" />,
            title: "Plugin Customization",
            desc: "Extending WordPress functionality with custom plugins or modifying existing ones to fit your specific needs.",
            color: "bg-purple-50"
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
            title: "WooCommerce Development",
            desc: "Building powerful, scalable e-commerce stores using the world's most popular WordPress shopping platform.",
            color: "bg-orange-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-pink-500" />,
            title: "Performance Optimization",
            desc: "Speeding up your WordPress site with advanced caching, image optimization, and code refactoring.",
            color: "bg-pink-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
            title: "Security & Malware Removal",
            desc: "Hardening your WordPress site against attacks and providing emergency malware extraction services.",
            color: "bg-green-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-indigo-500" />,
            title: "WordPress Migration",
            desc: "Seamlessly moving your site between hosts or from other CMS platforms with zero data loss.",
            color: "bg-indigo-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-yellow-500" />,
            title: "WP Multilingual Setup",
            desc: "Configuring multi-language capabilities to help your WordPress site reach a global audience.",
            color: "bg-yellow-50"
        },
        {
            icon: <Wrench className="w-8 h-8 text-red-500" />,
            title: "Maintenance & Support",
            desc: "Regular updates to core, themes, and plugins, along with daily backups and uptime monitoring.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why choose WordPress for my business?",
            a: "WordPress is flexible, SEO-friendly, and easy to manage. It powers over 40% of the web, ensuring a massive ecosystem of support and scalability for your business."
        },
        {
            q: "Can you build a custom design for my WordPress site?",
            a: "Absolutely. We specialize in custom-coded themes that provide unique aesthetics and superior performance compared to off-the-shelf templates."
        },
        {
            q: "Is WordPress secure enough for my enterprise?",
            a: "Yes, when properly configured and maintained. we implement enterprise-grade security protocols, firewalls, and regular audits to keep your site safe."
        },
        {
            q: "How do you handle WordPress updates?",
            a: "We provide managed maintenance plans where we test all updates in a staging environment before pushing them to your live site to prevent any downtime."
        },
        {
            q: "Can you integrate my WordPress site with a CRM?",
            a: "Yes, we can sync WordPress with Salesforce, HubSpot, Zoho, and other CRMs to automate your lead generation and customer management."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Expert <span className="text-brand-cyan">WordPress</span> Solutions <br className="hidden md:block" /> for Modern Businesses
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We don't just 'install' WordPress; we engineer high-performance, secure, and scalable digital experiences that drive growth.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Redefine Your Presence
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
                        Strategic <span className="text-brand-cyan">WordPress</span> Consulting & Development
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        From high-traffic blogs to complex enterprise portals, our WordPress experts deliver tailored solutions that perform.
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

            {/* CMS Stats Strip */}
            <section className="py-20 bg-brand-cyan">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">1000+</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Sites Launched</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">50+</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Custom Plugins</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">100ms</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Avg Load Time</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">24/7</div>
                            <div className="text-brand-cyan-light font-medium uppercase tracking-wider text-sm">Expert Support</div>
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
                                CMS Development <span className="text-brand-cyan">Mastery</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We leverage the full power of WordPress to give you complete control over your content while ensuring your technical foundation is rock solid for long-term growth.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Custom Coded, Zero-Bloat Themes",
                                    "Enterprise-Grade Scalability",
                                    "Built-in SEO Best Practices",
                                    "Mobile-First Responsive Design",
                                    "Secure Core Infrastructure",
                                    "Intuitive Content Management Experience"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <Search className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">SEO Dominance</h4>
                                    <p className="text-sm text-gray-500">Optimized for Google rankings.</p>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors pt-12">
                                    <Smartphone className="text-brand-cyan w-10 h-10 mb-4" />
                                    <h4 className="font-bold text-lg mb-2">Pixel Perfect</h4>
                                    <p className="text-sm text-gray-500">Stunning across all devices.</p>
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
                        Start Your <span className="text-brand-cyan">WordPress</span> Project
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Ready to experience the true potential of WordPress? Let's build a website that works as hard as you do.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default WordPressPage;
