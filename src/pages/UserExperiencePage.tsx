
import { useState } from 'react';
import { 
    Users, 
    Search, 
    MousePointer2, 
    Zap, 
    Layers, 
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Target,
    Activity,
    Smartphone,
    Monitor,
    ShieldCheck
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const UserExperiencePage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Search className="w-8 h-8 text-brand-cyan" />,
            title: "User Research",
            desc: "Conducting deep-dive interviews and surveys to understand your users' needs, pain points, and motivations.",
            color: "bg-blue-50"
        },
        {
            icon: <Target className="w-8 h-8 text-purple-600" />,
            title: "Information Architecture",
            desc: "Organizing and structuring your content in a way that feels natural and intuitive for users to navigate.",
            color: "bg-purple-50"
        },
        {
            icon: <MousePointer2 className="w-8 h-8 text-orange-500" />,
            title: "Interaction Design",
            desc: "Defining how users interact with your system, focusing on making every action feel effortless and rewarding.",
            color: "bg-orange-50"
        },
        {
            icon: <Activity className="w-8 h-8 text-pink-500" />,
            title: "Usability Testing",
            desc: "Observing real users as they interact with your product to identify and fix friction points before launch.",
            color: "bg-pink-50"
        },
        {
            icon: <Users className="w-8 h-8 text-green-500" />,
            title: "Persona Mapping",
            desc: "Creating detailed archetypes of your typical users to guide design decisions and marketing strategies.",
            color: "bg-green-50"
        },
        {
            icon: <Layers className="w-8 h-8 text-indigo-500" />,
            title: "User Journey Mapping",
            desc: "Visualizing the entire end-to-end path a user takes with your brand to optimize every touchpoint.",
            color: "bg-indigo-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "Accessibility Audit",
            desc: "Ensuring your digital products are usable by people of all abilities, following global WCAG standards.",
            color: "bg-yellow-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Conversion Optimization",
            desc: "Using behavioral psychology to remove barriers and guide users toward completing key business goals.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is the difference between UI and UX?",
            a: "UI (User Interface) is about the look and layout, while UX (User Experience) is about the logic and feel. UI is the engine's body; UX is how smoothly the car drives."
        },
        {
            q: "How long does a typical UX research phase take?",
            a: "A standard research sprint can take 2 to 4 weeks depending on the complexity of the project and the availability of test subjects."
        },
        {
            q: "Can you help improve the UX of an existing product?",
            a: "Yes, we often perform 'UX Audits' where we identify friction points in existing apps and provide a roadmap for improvement."
        },
        {
            q: "Do you involve real users in the process?",
            a: "Absolutely. We believe that design without user data is just Art. We involve real users through interviews, testing, and analytics analysis."
        },
        {
            q: "Will UX design improve my conversion rates?",
            a: "Yes. By removing friction and making it easier for users to find what they need, good UX directly leads to higher conversion and retention rates."
        }
    ];

    return (
        <div className="bg-white text-center">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Human-Centered <span className="text-brand-cyan">User Experience</span> <br className="hidden md:block" /> for the Modern Web
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We design digital products that solve real problems, eliminate friction, and create lasting emotional connections with your users.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Optimize Your Experience
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
                        Logic Meets <span className="text-brand-cyan">Empathy</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our UX process is built on a deep understanding of human behavior. we don't just design for screens; we design for people.
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

            {/* Why UX Matters - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative text-left">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Design for <span className="text-brand-cyan">Results</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Studies show that for every $1 invested in UX, there is a $100 return. Good design is not a luxury; it's a fundamental business strategy.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Retention", desc: "Keep users coming back with a seamless interface." },
                                    { title: "Loyalty", desc: "Build trust through reliability and ease of use." },
                                    { title: "Conversion", desc: "Turn more visitors into paying customers." },
                                    { title: "Support", desc: "Reduce support costs by making the product intuitive." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="text-brand-cyan w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 text-center">
                             <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                 <Users className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Start With <br /> The User.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Ready to make your product more human-centric and successful?</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Free UX Consultation
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Devices Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
                     <div className="flex flex-col items-center group cursor-help">
                         <div className="w-20 h-20 bg-brand-lavender rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <Monitor className="w-10 h-10 text-brand-cyan" />
                         </div>
                         <h4 className="font-bold text-xl mb-2">Desktop</h4>
                         <p className="text-gray-500 text-sm">Complex Workflows</p>
                     </div>
                     <div className="flex flex-col items-center group cursor-help">
                         <div className="w-24 h-24 bg-brand-lavender rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ring-4 ring-brand-cyan/20">
                             <Smartphone className="w-12 h-12 text-brand-cyan" />
                         </div>
                         <h4 className="font-bold text-2xl mb-2">Mobile</h4>
                         <p className="text-gray-500 text-sm">Thumb-Driven Logic</p>
                     </div>
                     <div className="flex flex-col items-center group cursor-help">
                         <div className="w-20 h-20 bg-brand-lavender rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <Layers className="w-10 h-10 text-brand-cyan" />
                         </div>
                         <h4 className="font-bold text-xl mb-2">Cross-Platform</h4>
                         <p className="text-gray-500 text-sm">Seamless Continuity</p>
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
                        Don't Make Your <span className="text-brand-cyan">Users Think</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Ready to eliminate friction and create an experience your users will love? Let's discuss how we can optimize your digital product.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a UX Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default UserExperiencePage;
