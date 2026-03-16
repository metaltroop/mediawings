
import { useState } from 'react';
import { 
    Newspaper, 
    Users, 
    BarChart, 
    ShieldCheck, 
    Globe, 
    MessageCircle,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Award,
    TrendingUp
} from 'lucide-react';
import { useModal } from '../contexts/ModalContext';

const DigitalPrPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openModal } = useModal();

    const services = [
        {
            icon: <Newspaper className="w-8 h-8 text-brand-cyan" />,
            title: "Online Media Coverage",
            desc: "Secure high-authority placements on top-tier news sites and industry publications to boost brand visibility.",
            color: "bg-blue-50"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
            title: "SEO Link Building",
            desc: "Gain high-quality backlinks from authoritative domains that improve your search engine rankings and domain authority.",
            color: "bg-purple-50"
        },
        {
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: "Influencer Relations",
            desc: "Connect with key opinion leaders and influencers who can amplify your brand message to a targeted audience.",
            color: "bg-orange-50"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
            title: "Reputation Management",
            desc: "Monitor and enhance your brand's digital footprint through proactive storytelling and sentiment control.",
            color: "bg-pink-50"
        },
        {
            icon: <MessageCircle className="w-8 h-8 text-green-500" />,
            title: "Social PR & Buzz",
            desc: "Create viral-worthy content and campaigns that spark conversations and engagement across social platforms.",
            color: "bg-green-50"
        },
        {
            icon: <Award className="w-8 h-8 text-indigo-500" />,
            title: "Brand Authority",
            desc: "Position your executives as industry thought leaders through guest posts, interviews, and expert commentary.",
            color: "bg-indigo-50"
        },
        {
            icon: <Globe className="w-8 h-8 text-yellow-500" />,
            title: "Global Reach",
            desc: "Expand your brand presence across international markets with localized PR strategies and media outreach.",
            color: "bg-yellow-50"
        },
        {
            icon: <BarChart className="w-8 h-8 text-red-500" />,
            title: "Measurement & Analysis",
            desc: "Track the impact of your PR efforts with detailed reports on reach, engagement, and conversion metrics.",
            color: "bg-red-50"
        }
    ];

    const faqs = [
        {
            q: "What is Digital PR and how is it different from traditional PR?",
            a: "Digital PR focuses on online visibility, including SEO, backlinks, and social media engagement, whereas traditional PR primarily targets offline media like newspapers, TV, and radio."
        },
        {
            q: "How does Digital PR help with SEO?",
            a: "Digital PR helps SEO by securing high-quality backlinks from authoritative websites, which signals to search engines that your site is trustworthy and relevant."
        },
        {
            q: "How long does it take to see results from Digital PR?",
            a: "Impact on brand awareness can be immediate, but SEO benefits from backlinks typically take 3 to 6 months to manifest as improved rankings."
        },
        {
            q: "Who are your media contacts?",
            a: "We maintain relationships with thousands of journalists, editors, and bloggers across various niches including tech, business, lifestyle, and finance."
        },
        {
            q: "Do you guarantee media placements?",
            a: "While we cannot guarantee specific placements (as it depends on editorial discretion), our hit rate is exceptionally high due to our data-driven outreach strategies."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-lavender overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gray-900 leading-tight">
                        Strategic <span className="text-brand-cyan">Digital PR</span> <br className="hidden md:block" /> for Brand Authority
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We bridge the gap between PR and SEO to amplify your brand story across the most influential digital publications in the world.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Boost Your Authority
                    </button>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 leading-tight">
                        Our Digital PR <span className="text-brand-cyan">Expertise</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Combining data-led storytelling with aggressive media outreach to deliver unparalleled online visibility.
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

            {/* Why Digital PR Section */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
                                Why Your Brand Needs <span className="text-brand-cyan">Digital PR</span> Now
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                In a crowded digital marketplace, traditional advertising isn't enough. You need earned media to build trust, authority, and high-quality link equity that lasts.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Build Unrivaled Brand Trust",
                                    "Accelerate Search Engine Rankings",
                                    "Drive High-Value Referral Traffic",
                                    "Cost-Effective Alternative to Paid Ads",
                                    "Establish Executive Thought Leadership",
                                    "Manage Brand Narrative & Crisis Control"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-cyan w-5 h-5 shrink-0" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="w-full md:w-1/2 relative">
                             <div className="bg-linear-to-br from-brand-cyan/20 to-purple-500/20 rounded-3xl p-1 border border-white/10 overflow-hidden shadow-2xl">
                                <div className="bg-gray-900 rounded-[22px] p-8 md:p-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center">
                                            <Award className="text-brand-cyan w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Success Metric</div>
                                            <div className="text-2xl font-black text-white uppercase">TOP 1% RESULTS</div>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-gray-300 font-bold">Media Reach</span>
                                                <span className="text-brand-cyan font-black text-2xl">10M+</span>
                                            </div>
                                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                                <div className="bg-brand-cyan h-full w-[95%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-gray-300 font-bold">Link Acquisition</span>
                                                <span className="text-purple-400 font-black text-2xl">500+</span>
                                            </div>
                                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                                <div className="bg-purple-500 h-full w-[85%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-gray-300 font-bold">Authority Score Index</span>
                                                <span className="text-brand-cyan font-black text-2xl">DA 90+</span>
                                            </div>
                                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                                <div className="bg-brand-cyan h-full w-[98%]"></div>
                                            </div>
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
            <section className="py-24 bg-brand-lavender/50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                        Ready to <span className="text-brand-cyan">Amplify</span> Your Story?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
                        Our experts are ready to help you secure the media coverage your brand deserves. Let's build your digital authority today.
                    </p>
                    <button 
                        onClick={openModal}
                        className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-5 px-16 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        Get High-Authority Placement
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DigitalPrPage;
