
import { useState } from 'react';
import { 
    PenTool, 
    Box, 
    Zap, 
    Layers, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Compass,
    Target,
    Activity,
    MousePointer2,
    Layout,
    Smartphone,
    Globe
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const ProductDesignPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <PenTool className="w-8 h-8 text-brand-cyan" />,
            title: "Concept Development",
            desc: "Translating your initial ideas into viable product concepts through sketching, brainstorming, and feasibility analysis.",
            color: "bg-blue-50"
        },
        {
            icon: <Box className="w-8 h-8 text-purple-600" />,
            title: "3D Visualization",
            desc: "Creating high-fidelity 3D models and renders to help you visualize your physical or digital product before it's built.",
            color: "bg-purple-50"
        },
        {
            icon: <Compass className="w-8 h-8 text-orange-500" />,
            title: "Prototyping & Testing",
            desc: "Building functional prototypes to test ergonomics, user interaction, and overall product performance.",
            color: "bg-orange-50"
        },
        {
            icon: <Target className="w-8 h-8 text-pink-500" />,
            title: "Design for Manufacturing",
            desc: "Optimizing your product designs for efficient production while maintaining high quality and cost-effectiveness.",
            color: "bg-pink-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-green-500" />,
            title: "User-Centered Design",
            desc: "Ensuring that every aspect of the product is designed with the end-user's needs and behaviors in mind.",
            color: "bg-green-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-indigo-500" />,
            title: "Product Ecosystems",
            desc: "Designing how your product fits into a larger system of apps, hardware, and services for a unified experience.",
            color: "bg-indigo-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-yellow-500" />,
            title: "Global Compliance",
            desc: "Ensuring your product designs meet international standards for safety, sustainability, and accessibility.",
            color: "bg-yellow-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-red-500" />,
            title: "Sustainable Design",
            desc: "Focusing on eco-friendly materials and energy-efficient designs to future-proof your product.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is the difference between Product Design and Product Development?",
            a: "Product Design focuses on the 'What' and 'How it feels' (aesthetics, ergonomics, usability), while Product Development focuses on the 'How it's built' (engineering, code, manufacturing)."
        },
        {
            q: "Do you design physical products as well as digital ones?",
            a: "Yes, our team has experience in both industrial design for physical goods and UI/UX design for digital platforms."
        },
        {
            q: "How long does the design process take?",
            a: "A typical product design cycle can take anywhere from 6 to 12 weeks, depending on the complexity and technical requirements."
        },
        {
            q: "Can you help with patent filing?",
            a: "While we aren't patent attorneys, we provide all the technical drawings and specifications needed for your legal team to file for patents."
        },
        {
            q: "Do you provide manufacturing support?",
            a: "Yes, we work closely with manufacturing partners to ensure that the final product matches the design intent perfectly."
        }
    ];

    return (
        <div className="bg-white text-center">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Innovative <span className="text-brand-cyan">Product Design</span> <br className="hidden md:block" /> from Concept to Reality
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center px-4">
                        We blend engineering precision with artistic vision to create products that solve real problems and capture the market's imagination.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Design Your Innovation
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
                        Crafting The <span className="text-brand-cyan">Future</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our holistic approach ensures that your product is not only beautiful but also functional, scalable, and ready for the global market.
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
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative text-left">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Product <span className="text-brand-cyan">Excellence</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We believe that a great product is one that feels inevitable. It meets a need so perfectly that users can't imagine life without it.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Iterative Refinement", desc: "Constant testing and feedback to reach the perfect form factor." },
                                    { title: "Technical Feasibility", desc: "Design decisions backed by engineering and manufacturing logic." },
                                    { title: "Brand Synergy", desc: "Ensuring your product is a perfect visual extension of your brand." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="text-brand-cyan w-6 h-6" />
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
                                 <Box className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-pulse" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Form & <br /> Function.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Ready to build something that disrupts the market and delights your customers?</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Free Product Audit
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process Strip */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale group">
                         <div className="flex items-center gap-3">
                             <MousePointer2 className="w-8 h-8" />
                             <span className="font-bold uppercase tracking-widest text-sm">Sketching</span>
                         </div>
                         <div className="hidden md:block w-12 h-px bg-gray-300"></div>
                         <div className="flex items-center gap-3">
                             <Layout className="w-8 h-8" />
                             <span className="font-bold uppercase tracking-widest text-sm">Modeling</span>
                         </div>
                         <div className="hidden md:block w-12 h-px bg-gray-300"></div>
                         <div className="flex items-center gap-3">
                             <Smartphone className="w-8 h-8" />
                             <span className="font-bold uppercase tracking-widest text-sm">Prototyping</span>
                         </div>
                         <div className="hidden md:block w-12 h-px bg-gray-300"></div>
                         <div className="flex items-center gap-3">
                             <Zap className="w-8 h-8 text-brand-cyan grayscale-0 opacity-100" />
                             <span className="font-bold uppercase tracking-widest text-sm grayscale-0 opacity-100 text-brand-cyan">Launch</span>
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
                        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50 text-left">
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight text-center">
                        Bring Your <span className="text-brand-cyan">Vision to Life</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Don't let your next great idea stay on the sketchboard. Let's work together to design a product that changes the game.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Design Workshop
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductDesignPage;
