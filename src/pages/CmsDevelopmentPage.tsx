
import { useState } from 'react';
import { 
    Monitor, 
    Settings, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    FileEdit,
    SearchCheck,
    Lock,
    RefreshCw,
    Database
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const CmsDevelopmentPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <FileEdit className="w-8 h-8 text-brand-cyan" />,
            title: "Custom CMS Architecture",
            desc: "Tailor-made content management systems designed specifically for your unique business workflows and data structures.",
            color: "bg-blue-50"
        },
        {
            icon: <Monitor className="w-8 h-8 text-purple-600" />,
            title: "Headless CMS",
            desc: "Decoupled content solutions using Contentful, Strapi, or Sanity for multi-channel content delivery (Web, Mobile, IoT).",
            color: "bg-purple-50"
        },
        {
            icon: <Settings className="w-8 h-8 text-orange-500" />,
            title: "WordPress Customization",
            desc: "Advanced WordPress development including custom themes, complex plugins, and high-performance optimizations.",
            color: "bg-orange-50"
        },
        {
            icon: <Database className="w-8 h-8 text-pink-500" />,
            title: "Data Migration",
            desc: "Seamlessly moving your legacy content into a new, modern CMS with zero data loss and preserved SEO value.",
            color: "bg-pink-50"
        },
        {
            icon: <SearchCheck className="w-8 h-8 text-green-500" />,
            title: "SEO-Ready Structures",
            desc: "Building CMS foundations that automatically handle meta tags, sitemaps, and Schema markup for maximum visibility.",
            color: "bg-green-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-500" />,
            title: "Role-Based Access",
            desc: "Granular permission systems to manage editors, contributors, and admins while keeping your core data secure.",
            color: "bg-indigo-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-yellow-500" />,
            title: "API Integration",
            desc: "Connecting your CMS with CRM, ERP, and marketing automation tools for a unified business ecosystem.",
            color: "bg-yellow-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Enterprise Maintenance",
            desc: "Ongoing support, security updates, and performance monitoring to ensure your CMS remains bulletproof.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why choose a custom CMS over WordPress?",
            a: "A custom CMS is built exactly for your needs, meaning no unnecessary plugins, faster load times, and a higher level of security uniquely tailored to your business."
        },
        {
            q: "What is a Headless CMS?",
            a: "A Headless CMS separates the content management (backend) from the display (frontend). This allows you to use one content source across your website, mobile app, and other digital platforms."
        },
        {
            q: "Do you provide training for our editors?",
            a: "Yes, we provide comprehensive training sessions and documentation to ensure your team is confident using the CMS from day one."
        },
        {
            q: "Can you migrate our old content?",
            a: "Absolutely. We specialize in complex content migrations from legacy systems into modern platforms while maintaining SEO rankings."
        },
        {
            q: "Is the CMS mobile-friendly?",
            a: "Yes, all our custom CMS admin panels are fully responsive, allowing your team to manage content from any device."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Empower Your Content with <br className="hidden md:block" /> <span className="text-brand-cyan">Custom CMS Development</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Say goodbye to restrictive templates. We build powerful, user-friendly content management systems that scale with your ambitions.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Build Your Custom CMS
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
                        Content Management <br className="md:hidden" /> <span className="text-brand-cyan">Simplified</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our CMS solutions are focused on three core pillars: speed of management, flexibility of design, and rock-solid security.
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

            {/* Why Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Built for <span className="text-brand-cyan">Performance</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                A cluttered backend leads to slow productivity. We design sleek, intuitive interfaces for your editors, so they can focus on what matters: the story.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Lightning Fast Loads", desc: "No bloated code. Just the features you need for maximum performance." },
                                    { title: "Future-Proof Tech", desc: "Built with modern frameworks that won't be obsolete next year." },
                                    { title: "Scalable Logic", desc: "Add thousands of pages without degrading performance or reliability." }
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
                                 <Monitor className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Your Backend, <br /> Beautiful.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Tired of fighting with your current CMS? Let's build something you'll actually enjoy using.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Request a Demo
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Comparison Strip */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 border p-12 rounded-4xl border-dashed border-gray-300">
                         <div className="text-2xl font-black tracking-tighter">WORDPRESS</div>
                         <div className="text-2xl font-black tracking-tighter">CONTENTFUL</div>
                         <div className="text-2xl font-black tracking-tighter">STRAPI</div>
                         <div className="text-2xl font-black tracking-tighter">SANITY.IO</div>
                         <div className="text-2xl font-black tracking-tighter">SHOPIFY</div>
                         <div className="text-2xl font-black tracking-tighter bg-brand-cyan/20 grayscale-0 opacity-100 text-brand-cyan px-4 py-1 rounded-lg">CUSTOM</div>
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
                        Take Control of Your <span className="text-brand-cyan">Content Destiny</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed px-4">
                        Stop adapting your content to your tools. Start building tools that adapt to your content. Let's discuss your CMS needs today.
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

export default CmsDevelopmentPage;
