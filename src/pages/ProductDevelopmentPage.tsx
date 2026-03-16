
import { useState } from 'react';
import { 
    Package, 
    Lightbulb, 
    Layers, 
    Zap, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Target,
    Users,
    LineChart,
    Rocket
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const ProductDevelopmentPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Lightbulb className="w-8 h-8 text-brand-cyan" />,
            title: "Product Strategy & Research",
            desc: "Market analysis and user research to define a roadmap that aligns with your business goals and market needs.",
            color: "bg-blue-50"
        },
        {
            icon: <Target className="w-8 h-8 text-purple-600" />,
            title: "MVP Development",
            desc: "Rapidly building a Minimum Viable Product to test core assumptions and gather user feedback with minimal risk.",
            color: "bg-purple-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-orange-500" />,
            title: "UI/UX Product Design",
            desc: "Creating intuitive and aesthetically pleasing product interfaces that prioritize user journey and brand flow.",
            color: "bg-orange-50"
        },
        {
            icon: <Users className="w-8 h-8 text-pink-500" />,
            title: "User Testing & Feedback",
            desc: "Iterative testing with real users to identify pain points and refine the product experience before full launch.",
            color: "bg-pink-50"
        },
        {
            icon: <LineChart className="w-8 h-8 text-green-500" />,
            title: "Product Growth & Scaling",
            desc: "Post-launch optimization and feature expansion to help your product capture more market share.",
            color: "bg-green-50"
        },
        {
            icon: <Rocket className="w-8 h-8 text-indigo-500" />,
            title: "Go-to-Market Execution",
            desc: "Strategic planning for product launch, ensuring your target audience is reached effectively on day one.",
            color: "bg-indigo-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "Secure Infrastructure",
            desc: "Building a rock-solid technical foundation that can handle growth while maintaining data integrity.",
            color: "bg-yellow-50"
        },
        {
            icon: <Package className="w-8 h-8 text-red-500" />,
            title: "Cycle Management",
            desc: "End-to-end management of the product lifecycle, from initial ideation to continuous improvement.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is the timeline for building an MVP?",
            a: "An MVP typically takes 8 to 14 weeks depending on the core features required to validate your product concept in the market."
        },
        {
            q: "Do you help with product-market fit research?",
            a: "Yes, our strategy phase includes deep market research and competitor analysis to ensure there's a genuine demand for your solution."
        },
        {
            q: "How do you handle feature prioritization?",
            a: "We use data-driven frameworks like RICE or MoSCoW to ensure we build the most impactful features first within your budget and timeline."
        },
        {
            q: "Can you help me scale my existing product?",
            a: "Absolutely. We can perform a technical and UX audit of your current product and implement a roadmap for scalability and expansion."
        },
        {
            q: "Who owns the intellectual property (IP)?",
            a: "You do. Full ownership of the design assets, source code, and all related IP is transferred to you upon completion of the project."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Innovative <span className="text-brand-cyan">Product</span> Development <br className="hidden md:block" /> From Concept to Case Study
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We transform ambitious ideas into market-ready digital products that solve real problems and deliver measurable business value.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Launch Your Product
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
                        Strategic <span className="text-brand-cyan">Product</span> Engineering
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        We combine agile development with human-centered design to build products that users love and businesses thrive on.
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

            {/* Process Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Our <span className="text-brand-cyan">Product</span> DNA
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We don't just build features; we build solutions. Our holistic approach ensures that your product is technically sound, commercially viable, and delightful to use.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "User-Centric Design", desc: "Prioritizing the needs and behaviors of your target audience." },
                                    { title: "Iterative Development", desc: "Continuous improvement based on real-world data and feedback." },
                                    { title: "Technical Excellence", desc: "Clean code and scalable architecture built for future growth." }
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
                        
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors">
                                    <h4 className="text-4xl font-black text-brand-cyan mb-2">95%</h4>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Success Rate</p>
                                    <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="bg-brand-cyan h-full w-[95%]"></div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand-cyan transition-colors pt-12">
                                    <h4 className="text-4xl font-black text-brand-cyan mb-2">12wk</h4>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Avg MVP Speed</p>
                                    <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="bg-brand-cyan h-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 bg-linear-to-r from-brand-cyan/10 to-purple-500/10 p-8 rounded-2xl border border-white/5">
                                    <p className="italic text-gray-300 text-lg leading-relaxed">
                                        "Mediawings didn't just build our app; they helped us redefine our business model and find our true market fit. They are partners in every sense."
                                    </p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                                        <div>
                                            <div className="font-bold">Sarah Jenkins</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-widest leading-none mt-1">Founding CEO, TechStream</div>
                                        </div>
                                    </div>
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
                        Let's Build Your <span className="text-brand-cyan">Next Big Thing</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Our product experts are ready to grab a coffee and discuss your next breakthrough. High-performance design and engineering is just a click away.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Discovery Call
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductDevelopmentPage;
