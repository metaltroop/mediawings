
import { useState } from 'react';
import { 
    Palette, 
    Type, 
    Image as ImageIcon, 
    Fingerprint, 
    Zap, 
    ChevronDown,
    ChevronUp,
    PenTool,
    Briefcase,
    Globe,
    Layout
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const BrandDesignPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Fingerprint className="w-8 h-8 text-brand-cyan" />,
            title: "Identity Design",
            desc: "Crafting a unique visual personality for your brand, including logos, color palettes, and typography that resonate with your audience.",
            color: "bg-blue-50"
        },
        {
            icon: <Layout className="w-8 h-8 text-purple-600" />,
            title: "Brand Style Guides",
            desc: "Comprehensive documentation that ensures your brand remains consistent across all platforms, from social media to print.",
            color: "bg-purple-50"
        },
        {
            icon: <PenTool className="w-8 h-8 text-orange-500" />,
            title: "Logo Evolution",
            desc: "Refreshing your existing logo to meet modern design standards while preserving its core heritage and recognition.",
            color: "bg-orange-50"
        },
        {
            icon: <ImageIcon className="w-8 h-8 text-pink-500" />,
            title: "Visual Assets & Icons",
            desc: "Designing custom icon sets and visual elements that give your brand a handcrafted, premium feel in every digital touchpoint.",
            color: "bg-pink-50"
        },
        {
            icon: <Type className="w-8 h-8 text-green-500" />,
            title: "Typography Strategy",
            desc: "Selecting and pairing typefaces that improve readability and convey the right emotional tone for your messages.",
            color: "bg-green-50"
        },
        {
            icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
            title: "Corporate Stationary",
            desc: "Extending your brand identity to business cards, letterheads, and physical touchpoints for a professional edge.",
            color: "bg-indigo-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "UI/UX Visual Language",
            desc: "Translating your brand vibes into systematic design components for high-performing web and mobile interfaces.",
            color: "bg-yellow-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-red-500" />,
            title: "Digital Brand Presence",
            desc: "Adapting your visual identity for maximum impact on social media, email templates, and display advertising.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What defines a successful brand identity?",
            a: "A successful brand identity is consistent, memorable, and accurately reflects your company's values and mission while appealing to your target demographic."
        },
        {
            q: "How long does the logo design process take?",
            a: "A full identity package typically takes 3 to 6 weeks, allowing time for research, concept development, and iterative refinement based on your feedback."
        },
        {
            q: "Will I have full ownership of the final designs?",
            a: "Yes, once the project is completed and final payment is made, you receive full intellectual property ownership and all master source files."
        },
        {
            q: "Do you provide print-ready files?",
            a: "Absolutely. We provide all assets in multiple formats including high-res vectors, web-optimized PNGs, and print-ready PDFs with bleed zones."
        },
        {
            q: "How do you handle brand consistency after the project?",
            a: "We provide a detailed Brand Style Guide that serves as a manual for your future designers and marketers to ensure the brand stays on track."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                         Impactful <span className="text-brand-cyan">Brand Design</span> <br className="hidden md:block" /> for the Digital Age
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We create visual identities that don't just look beautiful—they tell a story, build trust, and drive meaningful connections with your customers.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Start Your Brand Journey
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
                        Art Meets <span className="text-brand-cyan">Strategy</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center">
                        Our design process is rooted in deep market research. We don't follow trends; we create timeless identities that help your business stand out.
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

            {/* Showcase Strip */}
            <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale">
                         <div className="text-2xl font-black text-gray-400 font-heading tracking-tighter italic">LOGO DESIGN</div>
                         <div className="text-2xl font-black text-gray-400 font-heading tracking-tighter italic">VISUAL IDENTITY</div>
                         <div className="text-2xl font-black text-gray-400 font-heading tracking-tighter italic">TYPOGRAPHY</div>
                         <div className="text-2xl font-black text-gray-400 font-heading tracking-tighter italic">PACKAGING</div>
                         <div className="text-2xl font-black text-gray-400 font-heading tracking-tighter italic">STYLE GUIDES</div>
                     </div>
                </div>
            </section>

            {/* Why Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Our Design <span className="text-brand-cyan">DNA</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We believe that great design is invisible. It guides the user, builds subconscious trust, and removes friction between your business and its audience.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Research Driven", desc: "Understanding your competitors and audience before moving a single pixel." },
                                    { title: "Iterative Feedback", desc: "Working closely with you to refine concepts until they are perfect." },
                                    { title: "Multi-Format Delivery", desc: "Providing everything you need for print, web, and social media." }
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
                        
                        <div className="w-full md:w-1/2 relative">
                             <div className="bg-linear-to-br from-brand-cyan/30 to-purple-500/30 p-12 md:p-20 rounded-[3rem] border border-white/10 flex flex-col items-center">
                                 <Palette className="w-24 h-24 text-white mb-8" />
                                 <h4 className="text-3xl font-black text-center mb-4 uppercase tracking-tighter">Your Brand, <br /> Redefined.</h4>
                                 <p className="text-center text-gray-200 mb-8 max-w-sm">Ready to give your business the visual edge it deserves?</p>
                                 <button onClick={openModal} className="bg-white text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-brand-cyan hover:text-white transition-all shadow-2xl">
                                     Free Design Consultation
                                 </button>
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
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight text-center">
                        Level Up Your <span className="text-brand-cyan">Visual Game</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed">
                        Don't let mediocre design hold your brand back. Our award-winning designers are ready to help you capture your audience's attention.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Brand Review
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BrandDesignPage;
