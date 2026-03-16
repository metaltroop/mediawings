import { useModal } from '../contexts/ModalContext';
import { Star, Plus, Minus, Users, Target, TrendingUp, ShoppingBag, ShoppingCart, CreditCard, Truck } from 'lucide-react';
import { useState } from 'react';

// Images (Using existing assets)
import company1 from '../assets/companies/Group-12678.png';
import company2 from '../assets/companies/Group-12679.png';
import amznAds from '../assets/amznAds.png';
import googleAds from '../assets/googleAds.png';
import facebookAds from '../assets/fbMarketplace.png';
import googleShopping from '../assets/googleShopping.png';
import displayAds from '../assets/displayAd.png'
import igshop from '../assets/igshop.png';
import company3 from '../assets/companies/Group-12684.png';
import feedOptM from '../assets/feedOptM.png';
import company4 from '../assets/companies/adani.png';
import marketPlaceAds from '../assets/mkplcead.png';
import LinkedInAds from '../assets/LinkedIn-Ads.png';
import PerformanceMarketing from '../assets/Performance-Marketing.svg';

const PLATFORM_CARDS = [
    { title: 'Amazon ads', desc: 'With Amazon marketing, you can bid on certain keywords to make your product show up higher in search results and reach more people.', bgColor: 'bg-[#fff1f2]', icon: amznAds },
    { title: 'Google ads', desc: 'Paid search ads can be displayed on Google\'s search engine results pages to increase brand awareness or to attract new customers.', bgColor: 'bg-[#fffbeb]', icon: googleAds },
    { title: 'Google shopping', desc: 'Google Shopping Marketing is a focused marketing tool that lets you show Google search ads for your products and services that look great.', bgColor: 'bg-[#f0f9ff]', icon: googleShopping },
    { title: 'Facebook ads', desc: 'Facebook advertisements help you attain your marketing goals. You can boost brand recognition by reaching more potential consumers.', bgColor: 'bg-[#f5f3ff]', icon: facebookAds },
    { title: 'Display Ads', desc: 'Display ads improves your shopping advertising. Users can see images of your products and see prices, stores, and other information.', bgColor: 'bg-[#f5f3ff]', icon: displayAds },
    { title: 'Instagram ads', desc: 'You may advertise your product using reels, image ads, and stories. Instagram ads can be linked to your product page directly.', bgColor: 'bg-[#f0f9ff]', icon: igshop },
    { title: 'Marketplace ads', desc: 'Marketplace ads let you sell a product in Facebook\'s marketplace and news feed. These ads allow you to target buyers.', bgColor: 'bg-[#fffbeb]', icon: marketPlaceAds },
    { title: 'Linkedin Ads', desc: 'Advertising on LinkedIn is mostly aimed at business people. LinkedIn is better for B2B advertising campaigns because of how it works.', bgColor: 'bg-[#fff1f2]', icon: LinkedInAds },
];

const FAQS = [
    {
        question: "What is Shopping Advertising?",
        answer: "Shopping advertising involves using product-based ads (like Google Shopping or Amazon Sponsored Products) to show users a photo of your product, a title, price, store name, and more."
    },
    {
        question: "Which platform is best for my products?",
        answer: "The best platform depends on your target audience and product type. We typically recommend starting with Google Shopping and Amazon, then expanding to social platforms like Facebook and Instagram."
    },
    {
        question: "How do you optimize shopping feeds?",
        answer: "We optimize product titles, descriptions, images, and categories to ensure your products show up for the most relevant searches with the highest intent to buy."
    },
    {
        question: "Can you track actual sales and ROI?",
        answer: "Yes, we implement full conversion tracking to measure exactly how many sales and how much revenue each ad campaign is generating, providing a clear ROAS (Return on Ad Spend)."
    },
    {
        question: "Do you handle product photography?",
        answer: "While we specialize in ad management and feed optimization, we can provide guidance on image requirements and work with your existing assets to create high-performing ad creatives."
    }
];

const ShoppingAdsPage = () => {
    const { openModal } = useModal();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    return (
        <main className="pt-[104px]">
            {/* 1. Hero Section */}
            <section className="bg-[#f0fbff] py-20 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-8">
                            <ShoppingBag className="w-4 h-4" />
                            <span>eCommerce Growth Partners</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                            Shopping <span className="text-brand-cyan">Advertising Services</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Maximize your online sales with high-impact shopping campaigns. We optimize your product feeds
                            and targeting to put your brand directly in front of active buyers.
                        </p>

                        <button
                            onClick={openModal}
                            className="bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,183,235,0.4)] hover:-translate-y-1"
                        >
                            Start Selling More
                        </button>
                    </div>

                    {/* Ratings Badge Strip */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16">
                        {[
                            { img: company1, text: "Google Partner", sub: "Merchant Center" },
                            { img: company2, text: "Amazon Pro", sub: "Certified Agency" },
                            { img: company3, text: "Excellent", sub: "Trustpilot" },
                            { img: company4, text: "Elite Retail", sub: "Ad Specialist" }
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

            {/* 2. Platform Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-center">
                            How do we fill shopping carts with Mediawings?
                        </h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
                            We leverage the most powerful shopping ecosystems to drive consistent,
                            profitable growth for your eCommerce brand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {PLATFORM_CARDS.map((card, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border border-transparent hover:border-brand-cyan hover:shadow-xl transition-all duration-300 ${card.bgColor} group cursor-pointer`}>
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md text-3xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    {typeof card.icon === 'string' && (card.icon.startsWith('/') || card.icon.startsWith('data:') || card.icon.includes('.')) ? (
                                        <img src={card.icon} alt={card.title} className="w-12 h-12 object-contain" />
                                    ) : (
                                        card.icon
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{card.title}</h4>
                                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-4">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Performance Strip */}
            <section className="py-20 bg-[#0f172a] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto text-white">
                        {[
                            { icon: ShoppingCart, stat: "12x+", label: "Average Merchant ROAS" },
                            { icon: CreditCard, stat: "₹50Cr+", label: "Revenue Managed Yearly" },
                            { icon: TrendingUp, stat: "200%", label: "Average ROAS Increase" },
                            { icon: Users, stat: "300+", label: "Ecom Brands Scaled" },
                            { icon: Star, stat: "Elite", label: "Shopping Specialist" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-brand-cyan/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Features/Icons */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto text-center">
                        {[
                            { icon: feedOptM, text: "Feed Optimization" },
                            { icon: Target, text: "Intent Targeting" },
                            { icon: PerformanceMarketing, text: "ROAS Tracking" },
                            { icon: Truck, text: "Scale Strategy" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-brand-cyan/5 text-brand-cyan flex items-center justify-center overflow-hidden group">
                                    {typeof item.icon === 'string' ? (
                                        <img src={item.icon} alt={item.text} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                                    ) : (
                                        <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                                    )}
                                </div>
                                <span className="font-bold text-gray-900 leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Detailed Content Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Drive Sales with Precision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our shopping advertising strategy focuses on maximizing your return on ad spend.
                                We don't just run ads; we manage the entire ecosystem from feed to checkout.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { title: "Feed Management", desc: "We ensure your product data is clean, accurate, and optimized for search algorithms." },
                                { title: "Bid Management", desc: "Our specialists use data to bid intelligently on products with the highest conversion potential." },
                                { title: "Negative Keyword Magic", desc: "We aggressively filter out non-converting traffic to save your budget for buyers." },
                                { title: "Promotion Strategy", desc: "Highlight sales, shipping offers, and special deals to increase click-through rates." },
                                { title: "Mobile Optimization", desc: "Ensure your shopping ads dominate the mobile screen where most buyers discovery new products." },
                                { title: "Detailed Reporting", desc: "Track every rupee spent and every product sold with our transparent performance dashboards." }
                            ].map((item, idx) => (
                                <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-cyan transition-all duration-300">
                                    <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Accordion */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-gray-900 text-center">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-500 text-lg">Common questions about our shopping advertising services.</p>
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
                                    <span className="text-lg font-bold text-gray-900 pr-8 text-center w-full">{faq.question}</span>
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
                                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100 italic">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Contact Form */}
            <section className="py-24 bg-[#f3f0ff]">
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
                                    {['Shopping Ads', 'SEO', 'PPC', 'Social Ads', 'Influencer Marketing', 'Amazon Ads'].map((service) => (
                                        <label key={service} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                            <input type="checkbox" className="w-4 h-4 text-brand-cyan rounded border-gray-300 focus:ring-brand-cyan" />
                                            <span className="text-sm text-gray-700 font-medium select-none">{service}</span>
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

export default ShoppingAdsPage;
