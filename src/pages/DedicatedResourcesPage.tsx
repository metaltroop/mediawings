
import { useState } from 'react';
import { 
    Users, 
    UserPlus, 
    Zap, 
    ChevronDown,
    ChevronUp,
    Code2,
    Smartphone,
    Layout,
    Database,
    SearchCheck,
    Briefcase
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const DedicatedResourcesPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-brand-cyan" />,
            title: "Frontend Developers",
            desc: "Expert React, Vue, and Angular developers who craft pixel-perfect, responsive interfaces with clean, maintainable code.",
            color: "bg-blue-50"
        },
        {
            icon: <Database className="w-8 h-8 text-purple-600" />,
            title: "Backend Engineers",
            desc: "Skilled in Node.js, Python, and Go, our backend experts build robust, scalable architectures and secure APIs.",
            color: "bg-purple-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-orange-500" />,
            title: "Mobile App Developers",
            desc: "Specialists in Swift, Kotlin, and React Native for building high-performance native and cross-platform mobile experiences.",
            color: "bg-orange-50"
        },
        {
            icon: <Layout className="w-8 h-8 text-pink-500" />,
            title: "UI/UX Designers",
            desc: "Creative designers who combine aesthetic excellence with user-centric logic to build intuitive digital products.",
            color: "bg-pink-50"
        },
        {
            icon: <SearchCheck className="w-8 h-8 text-green-500" />,
            title: "QA & Automation",
            desc: "Dedicated testers ensuring your software is bug-free through meticulous manual testing and automated scripts.",
            color: "bg-green-50"
        },
        {
            icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
            title: "Project Managers",
            desc: "Agile experts who ensure smooth delivery, clear communication, and perfect alignment with your business goals.",
            color: "bg-indigo-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            title: "DevOps Specialists",
            desc: "Cloud infrastructure experts who automate your CI/CD pipelines and ensure 99.9% uptime for your applications.",
            color: "bg-yellow-50"
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "Full Stack Squads",
            desc: "Complete cross-functional teams ready to take your product from concept to launch within weeks.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "How fast can I hire a dedicated resource?",
            a: "We can typically have a vetted resource ready to interview within 48 to 72 hours, and onboarded within a week."
        },
        {
            q: "Who manages the dedicated resources?",
            a: "You have full control over the day-to-day tasks, but we provide a dedicated account manager to handle HR, administrative tasks, and performance reviews."
        },
        {
            q: "What is the minimum contract period?",
            a: "Our standard minimum contract is 3 months, but we offer flexible monthly rolling contracts for teams with fluctuating needs."
        },
        {
            q: "Can I replace a resource if they aren't a good fit?",
            a: "Yes, we have a 'Replacement Guarantee'. If a resource isn't meeting expectations, we will find a replacement within 15 days at no extra cost to you."
        },
        {
            q: "Do the developers speak English?",
            a: "Absolutely. All our resources undergo rigorous communication testing to ensure they can collaborate effectively with international teams."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Scale Your Team Fast with <br className="hidden md:block" /> <span className="text-brand-cyan">Dedicated Resources</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-center">
                        Hire the top 3% of tech talent and designers. No recruitment headaches, no overhead—just high-quality work delivered on time.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Find Your Next Hire
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight text-center">
                        Expert Talent in <span className="text-brand-cyan">Every Domain</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Whether you need a single developer or a complete engineering department, we provide the muscle you need to build great things.
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

            {/* Why Us Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Your Extension <span className="text-brand-cyan">Team</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                We don't just provide 'bodies'. We provide partners who integrate seamlessly into your workflow, understand your culture, and take ownership of their tasks.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Rigorous Vetting", desc: "We interview and test 100+ candidates for every single seat we fill." },
                                    { title: "Zero Setup Costs", desc: "We handle the equipment, office space, and benefits. You just pay for the work." },
                                    { title: "Flexible Scaling", desc: "Scale your team up or down with just a 30-day notice." }
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
                                 <UserPlus className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-pulse" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Instant <br /> Team Scale.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Skip the 6-month hiring cycle. Get your dedicated expert today.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Check Availability
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Strip */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <p className="text-2xl text-gray-500 font-medium mb-8 leading-relaxed">
                        "The dedicated React team from Mediawings felt like they were in the office next to us. They delivered a complex dashboard 3 weeks ahead of schedule."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="text-left">
                            <p className="font-bold text-gray-900">Sarah Jenkins</p>
                            <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">CTO, Finova Tech</p>
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
                        Build Your <span className="text-brand-cyan">Dream Team</span> Today
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Don't let a lack of talent hold your vision back. Let's discuss your requirements and find the perfect resources for your project.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Schedule a Resource Audit
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DedicatedResourcesPage;
