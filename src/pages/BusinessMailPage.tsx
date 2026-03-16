
import { useState } from 'react';
import { 
    Mail, 
    ShieldCheck, 
    ChevronDown,
    ChevronUp,
    Lock,
    RefreshCw,
    Smartphone,
    Globe,
    ZapOff,
    SearchCheck
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const BusinessMailPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Mail className="w-8 h-8 text-brand-cyan" />,
            title: "Custom Domain Email",
            desc: "Establish trust with every email you send. Get professional addresses like yourname@yourcompany.com.",
            color: "bg-blue-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
            title: "Advanced Anti-Spam",
            desc: "Keep your inbox clean and focused with industrial-strength spam and virus filtering built into every account.",
            color: "bg-purple-50"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-orange-500" />,
            title: "Anywhere Access",
            desc: "Access your mail via webmail, desktop clients (Outlook/Thunderbird), or mobile apps with full IMAP/POP3 support.",
            color: "bg-orange-50"
        },
        {
            icon: <Lock className="w-8 h-8 text-pink-500" />,
            title: "Privacy Guaranteed",
            desc: "Unlike free mail providers, we never scan your emails for advertising. Your data remains 100% yours.",
            color: "bg-pink-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-green-500" />,
            title: "Global Reliability",
            desc: "Redundant mail servers ensure your emails are delivered and received without delay, 24/7/365.",
            color: "bg-green-50"
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-indigo-500" />,
            title: "Easy Setup",
            desc: "Simple, step-by-step guides and dedicated support to help you get your professional mail running in minutes.",
            color: "bg-indigo-50"
        },
        {
            icon: <ZapOff className="w-8 h-8 text-yellow-500" />,
            title: "Ad-Free Experience",
            desc: "A clean, distraction-free interface that allows you and your team to focus on getting work done.",
            color: "bg-yellow-50"
        },
        {
            icon: <SearchCheck className="w-8 h-8 text-red-500" />,
            title: "Searchable Archives",
            desc: "Never lose a critical message again with built-in archival and lightning-fast search capabilities.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "Why do I need a business email address?",
            a: "A business email address (name@company.com) builds immediate credibility with clients and partners, separating your professional identity from your personal one."
        },
        {
            q: "Can I use my existing domain name?",
            a: "Yes! If you already own a domain, we can set up your business mail on it. If not, we can help you register a new one."
        },
        {
            q: "How much storage is included?",
            a: "Our standard business mail plans start with 10GB per mailbox, with options to scale up to 100GB or more as your needs grow."
        },
        {
            q: "Does it work with Microsoft Outlook?",
            a: "Yes, our business mail is fully compatible with Outlook on Windows and Mac, as well as the native mail apps on iPhone and Android."
        },
        {
            q: "Is my email data backed up?",
            a: "We perform daily server-level backups of all mailbox data to ensure you never lose important business communications."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden text-center">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Build Instant Credibility with <br className="hidden md:block" /> <span className="text-brand-cyan">Professional Business Mail</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ditch the generic @gmail or @yahoo addresses. Get secure, ad-free business email on your own domain today.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Create Your Professional Email
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
                        Email Designed for <span className="text-brand-cyan">Business</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Our business mail solutions are focused on providing a secure, stable, and professional communication platform for small to medium enterprises.
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

            {/* Privacy Section - Dark */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Your Inbox is <span className="text-brand-cyan">Private</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-left">
                                Free email services pay for themselves by selling your data. We believe your business communications should be private, secure, and under your control.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "No Data Harvesting", desc: "We never scan your content for marketing or profiling purposes." },
                                    { title: "Zero Advertisements", desc: "Keep your workspace clean and professional without annoying sidebar ads." },
                                    { title: "End-to-End Encryption", desc: "Support for PGP and S/MIME encryption for ultimate communication security." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-brand-cyan/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                            <ShieldCheck className="text-brand-cyan w-6 h-6" />
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
                                 <Mail className="w-24 h-24 text-brand-cyan mx-auto mb-8" />
                                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Own Your <br /> Communication.</h4>
                                 <p className="text-gray-300 mb-8 max-w-sm mx-auto">Take back control from the big tech giants with a truly independent mail solution.</p>
                                 <button onClick={openModal} className="bg-brand-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-2xl">
                                     View Pricing
                                 </button>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Strip */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 italic text-center">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         <div>
                             <h4 className="text-3xl font-black text-brand-cyan mb-2">100%</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center">Privacy Control</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-purple-600 mb-2">99.9%</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center">Uptime</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-orange-500 mb-2">SSL</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center">Encrypted</p>
                         </div>
                         <div>
                             <h4 className="text-3xl font-black text-green-500 mb-2">24/7</h4>
                             <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center">Support</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Represent Your Brand <span className="text-brand-cyan">Better</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg text-center leading-relaxed px-4">
                        Stop sending emails from generic providers. Start representing your brand with every message. Get your professional mail today.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Sign Up for Business Mail
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BusinessMailPage;
