import { useModal } from '../contexts/ModalContext';
import { Plus, Minus, ShieldCheck, BarChart3, Target, Users, PieChart, MapPin, Building2, Key, Search, Gem } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import company3 from '../assets/companies/Group-12684.png';
import company4 from '../assets/companies/adani.png';

const OFFERING_CARDS = [
    { title: 'Project Launch', desc: 'Comprehensive digital strategies for new real estate project launches to drive maximum visibility and bookings.', bgColor: 'bg-[#fff1f2]', icon: <Building2 className="w-6 h-6" /> },
    { title: 'Lead Generation', desc: 'Predictable and high-quality lead generation for residential and commercial properties using targeted media buying.', bgColor: 'bg-[#fffbeb]', icon: <Target className="w-6 h-6" /> },
    { title: 'Local SEO', desc: 'Dominating local search results for geographical keywords to attract property seekers in your specific location.', bgColor: 'bg-[#f0f9ff]', icon: <MapPin className="w-6 h-6" /> },
    { title: 'Market Research', desc: 'In-depth analysis of property trends, competitor pricing, and buyer sentiment to position your project effectively.', bgColor: 'bg-[#f5f3ff]', icon: <Search className="w-6 h-6" /> },
    { title: 'Luxury Marketing', desc: 'Specialized branding and digital storytelling for high-end luxury properties to attract HNI and NRI investors.', bgColor: 'bg-[#f5f3ff]', icon: <Gem className="w-6 h-6" /> },
    { title: 'CRM Integration', desc: 'Seamlessly connecting your lead sources to your sales team\'s CRM for faster follow-ups and better conversion tracking.', bgColor: 'bg-[#f0f9ff]', icon: <Key className="w-6 h-6" /> },
    { title: 'Social Media', desc: 'Engaging visual storytelling for your properties across Instagram, Facebook, and LinkedIn to build community and trust.', bgColor: 'bg-[#fffbeb]', icon: <Users className="w-6 h-6" /> },
    { title: 'Content Video', desc: 'Creating immersive video tours and drone shots that bring your properties to life for potential buyers online.', bgColor: 'bg-[#fff1f2]', icon: <PieChart className="w-6 h-6" /> },
];

const FAQS = [
    {
        question: "Why does real estate need digital marketing?",
        answer: "Modern property seekers start their journey online. Digital marketing allows you to reach motivated buyers, showcase properties through immersive visuals, and build trust through authoritative content long before they visit the site."
    },
    {
        question: "How do you ensure lead quality for real estate?",
        answer: "We use multi-step qualifying forms, intent-based targeting (e.g., people searching for '3 BHK homes'), and negative keyword list to filter out casual browsers and focus on serious buyers."
    },
    {
        question: "What platforms are best for real estate ads?",
        answer: "Facebook and Instagram are excellent for visual discovery and broad reach, while Google Search is essential for capturing high-intent users actively searching for property."
    },
    {
        question: "Do you help with global/NRI marketing?",
        answer: "Yes, we specialize in targeting NRI audiences through localized digital campaigns, ensuring your international projects reach the right cross-border investors."
    }
];

const RealEstatePage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-linear-to-b from-[#f3f0ff] to-white py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Real Estate <span className="text-brand-cyan">Digital Marketing</span> Agency
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Transforming property leads into project bookings. We combine data-driven 
                            targeting with immersive storytelling to scale your real estate business.
                        </p>
                        
                        <button 
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Scale Your Project Now
                        </button>
                    </div>

                    {/* Partner Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[company1, company2, company3, company4].map((logo, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center gap-4 border border-gray-100">
                                <img src={logo} alt="Partner" className="h-6 md:h-8 object-contain grayscale opacity-60" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Offerings Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-gray-900 leading-tight">
                            Best Realestate lead generation Agency
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            Specialized digital solutions tailored for the real estate lifecycle, 
                            from pre-launch awareness to inventory liquidation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {OFFERING_CARDS.map((card, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${card.bgColor} group cursor-pointer`}>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-cyan group-hover:scale-110 transition-transform duration-300 text-2xl">
                                    {card.icon}
                                </div>
                                <h4 className="font-bold text-gray-900 mb-3 leading-tight uppercase text-[13px]">{card.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Stats Strip */}
            <section className="py-20 bg-[#1a132b] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Building2, stat: "120+", label: "Projects Launched" },
                            { icon: Target, stat: "50k+", label: "Qualified Leads" },
                            { icon: BarChart3, stat: "₹5k Cr+", label: "Inventory Value Sold" },
                            { icon: Users, stat: "15+", label: "Top Developers" },
                            { icon: ShieldCheck, stat: "100%", label: "Lead Attribution" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mastering the Real Estate Sales Funnel</h2>
                            <p className="mb-6">
                                Selling property in the digital age requires more than just a listing. It required a full-funnel approach 
                                that nurtures potential buyers from their first search to the final site visit.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Precision Targeting</h3>
                            <p className="mb-6 italic">
                                We utilize advanced demographic, psychographic, and interest-based targeting to locate your ideal buyer 
                                persona. Whether it's first-time homebuyers or luxury investors, we know where they are.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Visual Storytelling</h3>
                            <p className="mb-6">
                                Architecture is visual. We leverage high-production video, 360 virtual tours, and professional 
                                photography to create an emotional connection with the property long before a physical visit.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Instant Lead Nurturing</h3>
                            <p className="mb-6">
                                Speed to lead is critical in real estate. We implement automated lead validation and instant 
                                WhatsApp/email notifications to ensure your sales team strikes while the iron is hot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="py-24 bg-gray-50 text-black">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">
                        Frequently asked questions
                    </h2>

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
            <section className="py-24 bg-[#fff1f2]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12 text-gray-900">
                        Lets Get Project Started
                    </h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] text-left">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Developer Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Company name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="contact@email.com" />
                                </div>
                            </div>
                            
                            <div className="pt-4 text-black">
                                <label className="block text-sm font-semibold text-gray-700 mb-4">Project Type</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {['Residential', 'Commercial', 'Plotting', 'Luxury', 'Retail', 'Mixed-use'].map((type) => (
                                        <label key={type} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button type="button" className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cyan/30 text-lg uppercase">
                                Boost My Sales
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RealEstatePage;
