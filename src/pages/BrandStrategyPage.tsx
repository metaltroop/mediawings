
import { useState } from 'react';
import { 
    Target, 
    TrendingUp, 
    Users, 
    Layers, 
    Zap, 
    ChevronDown,
    ChevronUp,
    Eye,
    Compass,
    BarChart3,
    Award
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const BrandStrategyPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Target className="w-8 h-8 text-brand-cyan" />,
            title: "Market Positioning",
            desc: "Identifying your unique 'wedge' in the market to ensure your brand stands out from competitors and resonates with customers.",
            color: "bg-blue-50"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-600" />,
            title: "Audience Persona Development",
            desc: "Deep-diving into your customer demographics and psychographics to build highly accurate buying personas.",
            color: "bg-purple-50"
        },
        {
            icon: <Compass className="w-8 h-8 text-orange-500" />,
            title: "Brand Vision & Mission",
            desc: "Defining the core purpose and long-term goals of your brand to provide a roadmap for all future business decisions.",
            color: "bg-orange-50"
        },
        {
            icon: <Eye className="w-8 h-8 text-pink-500" />,
            title: "Competitor Analysis",
            desc: "Comprehensive auditing of your rivals to identify gaps in the market and opportunities for your brand to dominate.",
            color: "bg-pink-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            title: "Growth Strategy",
            desc: "Strategic planning for brand expansion, including new product launches and entering new geographical markets.",
            color: "bg-green-50"
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
            title: "Brand Equity Assessment",
            desc: "Measuring the value and perception of your brand in the mind of consumers to guide refinement and investment.",
            color: "bg-indigo-50"
        },
        {
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            title: "Value Proposition",
            desc: "Crafting a compelling reason for customers to choose you over anyone else, focused on benefit-driven messaging.",
            color: "bg-yellow-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-red-500" />,
            title: "Brand Architecture",
            desc: "Organizing your products and services into a logical hierarchy that builds overall brand authority and trust.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why do I need a brand strategy if I have a logo?",
            a: "A logo is a symbol; a strategy is the system behind it. Strategy defines who you are, who you serve, and why you matter. Without it, even the best logo will fail to drive business results."
        },
        {
            q: "How long does a brand strategy project take?",
            a: "A comprehensive brand strategy typically takes 4 to 8 weeks, involving deep research, workshops, and strategic synthesis."
        },
        {
            q: "Can you help reposition an existing brand?",
            a: "Yes, we specialize in 'Brand Rescues' where we help established companies pivot their market position to reach new audiences or recover from market shifts."
        },
        {
            q: "What is the end deliverable of this service?",
            a: "You receive a comprehensive Brand Strategy Document which includes your positioning, personas, messaging framework, and a 12-month growth roadmap."
        },
        {
            q: "Do you help with the implementation of the strategy?",
            a: "Absolutely. We guide our design and marketing teams using the strategy as a 'North Star' to ensure all output is perfectly aligned."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Future-Proof Your <span className="text-brand-cyan">Brand Strategy</span> <br className="hidden md:block" /> for Exponential Growth
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
                        We combine data-driven insights with creative vision to build brands that don't just exist in the market—they lead it.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Map Your Brand Future
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
                        Strategic <span className="text-brand-cyan">Foundations</span> for Success
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        A great brand is built on a rock-solid foundation of research and insight. We help you find your unique voice in a crowded world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, idx) => (
                        <div key={idx} className={`${item.color} p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-brand-cyan/20`}>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{item.desc}</p>
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
                                Our Strategic <span className="text-brand-cyan">Mastery</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We go beyond aesthetics. We analyze the emotional triggers that drive your audience and align them with your business objectives for maximum impact.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Data-Driven Insights", desc: "Using real-world market data to inform every strategic pivot." },
                                    { title: "Psychological Targeting", desc: "Understanding the 'Why' behind every customer decision." },
                                    { title: "Long-Term Vision", desc: "Building a brand that remains relevant for decades, not just seasons." }
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
                             <div className="relative p-12 bg-gray-800 rounded-[3rem] border border-white/5 shadow-2xl">
                                 <Compass className="w-20 h-20 text-brand-cyan mb-8 animate-spin-slow" />
                                 <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Navigate Your <br /> Brand's Peak.</h4>
                                 <p className="text-gray-400 mb-10 leading-relaxed italic">
                                     "Mediawings took our vague ideas and crystallized them into a powerful brand story that our customers (and our team) finally believe in."
                                 </p>
                                 <div className="flex items-center gap-4">
                                     <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                                     <div>
                                         <div className="font-bold">Marcus Thorne</div>
                                         <div className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-bold">Director of Marketing, AeroPath</div>
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
                        Define Your <span className="text-brand-cyan">Brand Destiny</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Don't leave your brand's future to chance. Let our master strategists help you build a roadmap for unparalleled success.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Strategy Session
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BrandStrategyPage;
