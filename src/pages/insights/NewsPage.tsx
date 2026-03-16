import { Newspaper, Bell, ArrowUpRight } from 'lucide-react';

const NewsPage = () => {
    const newsItems = [
        {
            title: "MediaWings Recognized as Top 10 Digital Agency in 2026",
            date: "March 12, 2026",
            source: "Industry Weekly",
            desc: "For the third consecutive year, MediaWings has been cited for its innovative approach to ROAS-focused digital marketing and custom tech solutions.",
            badge: "Award"
        },
        {
            title: "Expansion into APAC: Opening New Regional Hub in Singapore",
            date: "February 25, 2026",
            source: "Corporate Update",
            desc: "The new office will serve as a strategic base for our growing client list in Southeast Asia, bringing dedicated support to the region.",
            badge: "Corporate"
        },
        {
            title: "MediaWings Launches 'MW-Core v4' - Our Proprietary E-commerce Framework",
            date: "February 10, 2026",
            source: "Tech Journal",
            desc: "The latest version of our e-commerce framework boasts 40% faster load times and enhanced checkout security for high-volume retailers.",
            badge: "Tech Launch"
        },
        {
            title: "Webinar Recap: The Future of Cookieless Advertising",
            date: "January 15, 2026",
            source: "Events",
            desc: "Our marketing experts discuss strategies for maintaining attribution accuracy in a privacy-first web landscape.",
            badge: "Event"
        },
        {
            title: "MediaWings Partners with Global Charity 'Digital Hope'",
            date: "January 05, 2026",
            source: "CSR",
            desc: "We are pledging 1,000 developer hours annually to support digital literacy programs in underserved communities.",
            badge: "Social"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/10 blur-[120px] rounded-full translate-x-1/2" />
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-3xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                Press Room
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
                                Latest News <br />& <span className="text-brand-cyan italic">Updates</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-4 pb-2">
                             <Newspaper className="text-brand-cyan w-16 h-16 md:w-24 md:h-24 opacity-50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* News List */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {newsItems.map((item, idx) => (
                            <div key={idx} className="group relative bg-white border-b border-gray-100 pb-12 hover:border-brand-cyan transition-colors">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                                    <div className="shrink-0 lg:w-48 text-gray-400 font-black uppercase text-xs tracking-widest flex items-center lg:flex-col lg:items-start gap-4 lg:gap-2">
                                        <span>{item.date}</span>
                                        <div className="w-1 h-1 bg-gray-300 rounded-full lg:hidden" />
                                        <span className="text-brand-cyan">{item.source}</span>
                                    </div>
                                    <div className="grow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-500 rounded border border-gray-100 italic">
                                                {item.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-black text-black group-hover:text-brand-cyan transition-colors mb-4 uppercase tracking-tighter max-w-4xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl mb-8">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="shrink-0">
                                        <button className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all">
                                            <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Subscription Banner */}
                    <div className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Stay <span className="text-brand-cyan">In the Loop</span></h2>
                            <p className="text-gray-500 font-medium mb-10">Get the latest industry insights and corporate announcements delivered straight to your inbox.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="grow bg-white border-2 border-transparent focus:border-brand-cyan px-8 py-5 rounded-2xl font-bold transition-all text-sm shadow-sm"
                                />
                                <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3">
                                    Subscribe <Bell className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
