import { useModal } from '../contexts/ModalContext';
import { LayoutGrid, Star, Plus, Minus, Users, Globe2, Clock, ShieldCheck, Search, MessageSquare, PenTool, Globe, BarChart3, Users2, Headphones } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const ORM_SERVICES = [
    { 
        title: 'Content Creation', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#fff0f4]', 
        icon: PenTool,
        link: '#' 
    },
    { 
        title: 'Social Media Handling', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#fffbeb]', 
        icon: MessageSquare,
        link: '/social-media-management' 
    },
    { 
        title: 'Website Development', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#f0fbff]', 
        icon: Globe,
        link: '#' 
    },
    { 
        title: 'Monitoring', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#f3f0ff]', 
        icon: Search,
        link: '#' 
    },
    { 
        title: 'Press Release Submission', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#f3f0ff]', 
        icon: Globe2,
        link: '#' 
    },
    { 
        title: 'Articles and blogs', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#eef2ff]', 
        icon: LayoutGrid,
        link: '/seo' 
    },
    { 
        title: 'Review tracking', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#fff7ed]', 
        icon: Star,
        link: '#' 
    },
    { 
        title: 'Brand Building consultancy', 
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.', 
        bgColor: 'bg-[#fff0f4]', 
        icon: Users2,
        link: '#' 
    },
];

const FAQS = [
    {
        question: "What exactly is Online Reputation Management (ORM) services?",
        answer: "ORM is the practice of crafting strategies that shape or influence the public perception of an organization, individual, or other entity on the internet. It helps drive public opinion about a business and its products and services."
    },
    {
        question: "Who should need a reputation management service?",
        answer: "Anyone who has a presence online and wants to ensure their brand or personal image is accurately represented. Businesses, executives, celebrities, and even individuals looking for jobs can benefit from ORM."
    },
    {
        question: "How long does it take for ORM to show results?",
        answer: "ORM is often a long-term strategy. While some improvements can be seen within a few weeks, reaching a stable and positive online reputation typically takes 3 to 6 months depending on the severity of the existing situation."
    },
    {
        question: "Why should you choose us to build your online reputation?",
        answer: "We offer a comprehensive suite of services, from content creation and monitoring to review tracking and brand building. Our team of experts uses data-driven strategies to ensure your brand's reputation is not only protected but enhanced."
    },
    {
        question: "How does negative content about your brand affect business deals?",
        answer: "Search results are often the first point of contact for potential partners or customers. Negative content can lead to lost trust, failed deals, and a significant decrease in revenue. ORM works to push down negative results and highlight positive ones."
    }
];

const OrmPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#f0f9ff] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Trusted Reputation Management</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Online Reputation <span className="text-brand-cyan">Management Services</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Capitalize on basic online reputation management from iDigitalise and keep your reputation clean from the search. 
                            The iDigitalise team monitors, keeps your reputation positive for your business and gets rid of any bad things that have been seen online about you.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Get A Callback
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "5.0/5 Ratings", sub: "150+ Reviews" },
                            { img: company2, text: "4.9/5 Ratings", sub: "Top Agency" },
                            { img: company3, text: "4.8/5 Ratings", sub: "Excellent" },
                            { img: company4, text: "5.0/5 Ratings", sub: "Top Rated" }
                        ].map((badge, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-4 min-w-[200px] border border-gray-100 hover:border-brand-cyan/30 hover:-translate-y-1 transition-all duration-300">
                                <img src={badge.img} alt="Rating" className="h-8 object-contain" />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 text-sm">{badge.text}</div>
                                    <div className="text-xs text-gray-500">{badge.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. ORM Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                            Our online reputation services
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Reputation management isn't strictly to keep you with the good; it's also helpful to stay in business and stay away from bad 
                            to keep your customers and stakeholders at a solid status.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {ORM_SERVICES.map((service, idx) => (
                            <Link 
                                key={idx} 
                                to={service.link}
                                className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${service.bgColor} group block`}
                            >
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{service.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{service.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Dark Performance Strip */}
            <section className="py-20 bg-[#1a1423] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Clock, stat: "10+", label: "Years in business experience" },
                            { icon: Globe2, stat: "160+", label: "The team is abroad for services" },
                            { icon: Users, stat: "98%", label: "Clients good cooperation" },
                            { icon: LayoutGrid, stat: "500+", label: "Projects are completed correctly" },
                            { icon: Star, stat: "10k+", label: "The term is good for business" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Select Us / Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto">
                        {[
                            { 
                                icon: Globe2, 
                                title: "1. Global Reach - 160+", 
                                desc: "Mediawings offers comprehensive ORR services in 160+ countries to monitor and enhance your reputation globally across different regions and languages." 
                            },
                            { 
                                icon: Search, 
                                title: "2. Removing Negative", 
                                desc: "Our team focuses on removing negative content and misinformation that can damage your reputation through legal and strategic means." 
                            },
                            { 
                                icon: BarChart3, 
                                title: "3. High Quality and Quick Utility", 
                                desc: "High quality is maintained at all costs. Every reputation task is tracked and analyzed for quick and efficient results for individuals and brands." 
                            },
                            { 
                                icon: Users2, 
                                title: "4. Brand Trustworthy 24/7", 
                                desc: "Get reputation management and brand building to increase partner and customer trust 24/7 with our specialized team dedicated to your image." 
                            },
                            { 
                                icon: Headphones, 
                                title: "5. Build Professionalism and Trust", 
                                desc: "To create strong professionalism and trust among partners, ORR works as a bridge. Reputation management creates a positive professional outlook." 
                            },
                            { 
                                icon: Globe, 
                                title: "6. Better Search Results for your brand", 
                                desc: "Search results define your brand status. We focus on enhancing the first page of search results with positive and authentic branding for your brand profile." 
                            },
                            { 
                                icon: Globe2, 
                                title: "7. High-standard professionalism with experts", 
                                desc: "Work with high-level experts who understand the nuances of reputation. We use advanced tools and methods for effective reputation management." 
                            },
                            { 
                                icon: Globe2, 
                                title: "8. Improve your Brand's valuation", 
                                desc: "ORM directly impacts your brand valuation. A good reputation translates into better deals, higher valuation, and trust among investors and stakeholders." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-base font-bold text-gray-900 leading-tight uppercase">{item.title}</h4>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ Accordion */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-500 text-lg italic">Everything you need to know about our services is right here for you!</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {FAQS.map((faq, index) => (
                            <div 
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-brand-cyan shadow-md bg-white' : 'border-gray-200 bg-white hover:border-brand-cyan/50'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-hidden"
                                >
                                    <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                                    <span className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'text-brand-cyan rotate-180' : 'text-gray-400'}`}>
                                        {openFaq === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </span>
                                </button>
                                
                                <div 
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{ 
                                        maxHeight: openFaq === index ? '500px' : '0',
                                        opacity: openFaq === index ? 1 : 0,
                                        paddingBottom: openFaq === index ? '24px' : '0'
                                    }}
                                >
                                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Contact Form */}
            <section className="py-24 bg-purple-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-gray-900">
                        Lets Get Project Started
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">What service are you interested in?</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['SEO', 'Web Development', 'Performance Marketing', 'Social Media Management', 'Influencer Marketing', 'Digital PR', 'ORM'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OrmPage;
