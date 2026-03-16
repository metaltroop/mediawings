
import { useState } from 'react';
import { 
    Cloud, 
    ShieldCheck, 
    Zap, 
    ChevronDown,
    ChevronUp,
    Users,
    Smartphone,
    Globe,
    Mail,
    FileText,
    Video
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const GoogleWorkspacePage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Mail className="w-8 h-8 text-red-500" />,
            title: "Gmail for Business",
            desc: "Custom email (@yourcompany) with advanced spam protection and 30GB+ of storage per user.",
            color: "bg-red-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            title: "Google Drive",
            desc: "Secure cloud storage for all your files, allowing team members to access and share documents from any device.",
            color: "bg-blue-50"
        },
        {
            icon: <Video className="w-8 h-8 text-green-500" />,
            title: "Google Meet",
            desc: "Enterprise-grade video conferencing that's built on Google's robust and secure global infrastructure.",
            color: "bg-green-50"
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-600" />,
            title: "Docs & Sheets",
            desc: "Real-time collaborative document and spreadsheet editing that eliminates 'v1', 'v2' version confusion forever.",
            color: "bg-indigo-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
            title: "Admin Controls",
            desc: "Manage users, devices, and security settings from a centralized console to keep your company data safe.",
            color: "bg-yellow-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-gray-700" />,
            title: "Endpoint Management",
            desc: "Proactively secure your mobile devices, laptops, and desktops against unauthorized access and data loss.",
            color: "bg-gray-50"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-600" />,
            title: "Team Collaboration",
            desc: "Shared drives and collaborative spaces that ensure everyone has the tools they need to succeed together.",
            color: "bg-purple-50"
        },
        {
            icon: <Zap className="w-8 h-8 text-orange-500" />,
            title: "Productivity Hacks",
            desc: "Built-in AI tools (Gemini) help you write emails, analyze data, and create presentations faster than ever.",
            color: "bg-orange-50"
        }
    ];

    const faqs = [
        {
            q: "What is Google Workspace?",
            a: "Google Workspace is a suite of collaborative productivity apps that offers professional email, online storage, shared calendars, video meetings, and more."
        },
        {
            q: "How is it different from free Google apps?",
            a: "Workspace provides professional email addresses, twice the storage of free Gmail, 24/7 support, enterprise-grade security, and full administrative control."
        },
        {
            q: "Can I migrate from Microsoft 365 or Outlook?",
            a: "Yes, Google provides robust migration tools to move your emails, contacts, and calendars with minimal disruption to your business."
        },
        {
            q: "Is Google Workspace secure?",
            a: "Absolutely. Google Workspace is built with a security-first mindset, meeting the most stringent global privacy and security standards."
        },
        {
            q: "Does Workspace work offline?",
            a: "Yes, you can enable offline access for Gmail, Drive, Docs, Sheets, and Slides to keep working even without an internet connection."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Work Smarter, Together with <br className="hidden md:block" /> <span className="text-brand-cyan">Google Workspace</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The ultimate productivity suite for modern teams. Secure, collaborative, and powered by Google's world-class infrastructure.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Transform Your Team's Workflow
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
                        Everything You Need in <span className="text-brand-cyan">One Place</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Google Workspace brings together all the tools your team needs to create, communicate, and collaborate efficiently from anywhere.
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

            {/* Why Deployment Partners Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Your <span className="text-brand-cyan">Google Cloud</span> partner
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                As a certified Google Workspace partner, we don't just set up accounts. We design collaborative ecosystems that drive real business culture change.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Strategic Onboarding", desc: "We guide your team through the transition to ensure 100% adoption and enthusiasm." },
                                    { title: "Custom Security Layouts", desc: "Ensuring sensitive company data stays within the organization with advanced DLP." },
                                    { title: "Ongoing Productivity Training", desc: "Regular webinars and tips to help your team master new Workspace features." }
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
                                 <Cloud className="w-24 h-24 text-brand-cyan mx-auto mb-8 animate-bounce" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Scale with <br /> Google Cloud.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Join 6 million+ businesses that trust Google Workspace for their daily operations.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     Start Your Trial
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Ecosystem Strip */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                     <div className="flex flex-wrap justify-center gap-16 md:gap-32 text-center opacity-40">
                         <div className="text-2xl font-bold tracking-tighter">GMAIL</div>
                         <div className="text-2xl font-bold tracking-tighter">DRIVE</div>
                         <div className="text-2xl font-bold tracking-tighter">MEET</div>
                         <div className="text-2xl font-bold tracking-tighter">CALENDAR</div>
                         <div className="text-2xl font-bold tracking-tighter">DOCS</div>
                         <div className="text-2xl font-bold tracking-tighter">SHEETS</div>
                         <div className="text-2xl font-bold tracking-tighter">SLIDES</div>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Unlock Your Team's <span className="text-brand-cyan">Full Potential</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed px-4">
                        Ready to make the move to a more collaborative future? Let's discuss a Google Workspace setup that fits your business perfectly.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Consult a Workspace Partner
                    </button>
                </div>
            </section>
        </div>
    );
};

export default GoogleWorkspacePage;
