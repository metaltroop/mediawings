
import { useState } from 'react';
import { 
    Layout, 
    MousePointer2, 
    Smartphone, 
    Monitor, 
    Layers, 
    Zap, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Palette,
    Figma,
    Eye,
    Sparkles
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const UiDesignPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Layout className="w-8 h-8 text-brand-cyan" />,
            title: "Web Interface Design",
            desc: "Creating visually stunning and highly functional website layouts that prioritize user engagement and accessibility.",
            color: "bg-blue-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-purple-600" />,
            title: "Mobile App UI",
            desc: "Designing intuitive and thumb-friendly mobile interfaces for iOS and Android that users love to interact with.",
            color: "bg-purple-50"
        },
        {
            icon: <Figma className="w-8 h-8 text-orange-500" />,
            title: "Prototyping",
            desc: "Building interactive high-fidelity prototypes to test user flows and gather feedback before development starts.",
            color: "bg-orange-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-pink-500" />,
            title: "Design Systems",
            desc: "Developing scalable UI component libraries that ensure consistency across your entire digital product ecosystem.",
            color: "bg-pink-50"
        },
        {
            icon: <Palette className="w-8 h-8 text-green-500" />,
            title: "Visual Language",
            desc: "Establishing a unique visual aesthetic through custom iconography, illustrations, and color theory.",
            color: "bg-green-50"
        },
        {
            icon: <MousePointer2 className="w-8 h-8 text-indigo-500" />,
            title: "Interactions & Micro-animations",
            desc: "Adding subtle animations that provide feedback and delight users, making your interface feel alive.",
            color: "bg-indigo-50"
        },
        {
            icon: <Monitor className="w-8 h-8 text-yellow-500" />,
            title: "Responsive Design",
            desc: "Ensuring your interface looks and performs perfectly across all screen sizes, from ultra-wide monitors to tiny phones.",
            color: "bg-yellow-50"
        },
        {
            icon: <Sparkles className="w-8 h-8 text-red-500" />,
            title: "Accessibility (a11y)",
            desc: "Designing inclusive interfaces that meet WCAG standards, ensuring everyone can use your product effectively.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What tools do you use for UI design?",
            a: "We primary use Figma for collaborative design and prototyping, along with Adobe Creative Cloud for advanced visual assets and illustrations."
        },
        {
            q: "Do you provide the design source files?",
            a: "Yes, you will receive organized Figma files with components, styles, and full developer handoff documentation."
        },
        {
            q: "How do you handle the handoff to developers?",
            a: "We provide detailed design specifications, including spacing, typography, and asset exports, often using Figma's Dev Mode for a seamless transition."
        },
        {
            q: "Can you redesign our existing application?",
            a: "Absolutely. We specialize in Modernizing legacy software with fresh, intuitive interfaces that improve user satisfaction and productivity."
        },
        {
            q: "Do you conduct user testing on your designs?",
            a: "Yes, we often perform internal and external usability testing on prototypes to validate our design decisions before finalizing the UI."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Precision-Crafted <span className="text-brand-cyan">UI Design</span> <br className="hidden md:block" /> for Superior Experiences
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We create digital interfaces that are not only visually breathtaking but also intuitively obvious, driving engagement and user loyalty.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Start Your Design Project
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
                        Design That <span className="text-brand-cyan">Delights</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our UI experts focus on the perfect balance of aesthetics and utility, ensuring your brand's digital presence remains future-proof.
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

            {/* Showcase Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Systematic <span className="text-brand-cyan">Creativity</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                We don't just 'make themes'. We build design systems that scale your product and maintain brand integrity across every screen.
                            </p>
                            
                            <div className="space-y-6 text-left">
                                {[
                                    { title: "Pixel Perfection", desc: "Meticulous attention to detail in spacing, color, and alignment." },
                                    { title: "User-Centric Logic", desc: "Placing elements exactly where users expect them to be." },
                                    { title: "Performance Ready", desc: "Optimizing assets for lightning-fast load times and smooth interactions." }
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
                             <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                 <div className="grid grid-cols-2 gap-6">
                                     <div className="h-40 bg-brand-cyan/20 rounded-2xl flex items-center justify-center border border-brand-cyan/30">
                                         <Figma className="w-12 h-12 text-brand-cyan" />
                                     </div>
                                     <div className="h-40 bg-purple-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 mt-8">
                                         <Eye className="w-12 h-12 text-purple-400" />
                                     </div>
                                     <div className="h-40 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30 -mt-4">
                                         <Smartphone className="w-12 h-12 text-orange-400" />
                                     </div>
                                     <div className="h-40 bg-pink-500/20 rounded-2xl flex items-center justify-center border border-pink-500/30 mt-4">
                                         <Sparkles className="w-12 h-12 text-pink-400" />
                                     </div>
                                 </div>
                                 <div className="mt-12 text-center">
                                     <h4 className="text-2xl font-bold mb-2">Beautifully Functional</h4>
                                     <p className="text-gray-400 text-sm">Design that drives conversions and delights users.</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Cards */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-cyan transition-colors group">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                             <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Conversion Focused</h4>
                        <p className="text-gray-600">Every element is strategically placed to lead users toward your desired goal.</p>
                    </div>
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-cyan transition-colors group">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                             <Smartphone className="w-10 h-10 text-purple-600" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Mobile First</h4>
                        <p className="text-gray-600">We design for the smallest screens first to ensure a flawless mobile experience.</p>
                    </div>
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-cyan transition-colors group">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                             <Palette className="w-10 h-10 text-orange-500" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">Brand Aligned</h4>
                        <p className="text-gray-600">Your digital products will be an exact visual extension of your brand identity.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Transform Your <span className="text-brand-cyan">Digital Presence</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to level up your user interface? Let's discuss how we can create a design that your users will absolutely love.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Build Review
                    </button>
                </div>
            </section>
        </div>
    );
};

export default UiDesignPage;
