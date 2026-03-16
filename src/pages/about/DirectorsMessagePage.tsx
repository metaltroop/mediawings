import { Quote, Award } from 'lucide-react';

const DirectorsMessagePage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-50 uppercase relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                    <span className="text-brand-cyan font-black tracking-widest text-xs mb-6 block">LEADERSHIP VISION</span>
                    <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none italic">
                        Message From <br /><span className="text-brand-cyan">The Director</span>
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Director Image/Card */}
                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-40">
                                <div className="aspect-3/4 rounded-[3rem] overflow-hidden bg-gray-100 mb-8 relative group">
                                    <img 
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                                        alt="Director" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-10 bg-linear-to-t from-black/80 to-transparent text-white">
                                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Anil Verma</h3>
                                        <p className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Managing Director</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                     <div className="grow p-6 bg-gray-50 rounded-2xl flex items-center gap-4">
                                         <Award className="text-brand-cyan w-6 h-6" />
                                         <span className="text-[10px] font-black uppercase tracking-widest leading-tight">15+ Years of <br />Digital Innovation</span>
                                     </div>
                                </div>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="w-full lg:w-2/3">
                            <Quote className="w-20 h-20 text-brand-cyan/20 mb-10" />
                            <div className="prose prose-xl prose-gray max-w-none">
                                <h2 className="text-3xl md:text-5xl font-black text-black mb-10 uppercase tracking-tighter leading-tight italic">
                                    "We don't just build websites; we build <span className="text-brand-cyan">Revenue Engines.</span>"
                                </h2>
                                <div className="space-y-8 text-gray-600 font-medium leading-relaxed text-lg lg:text-xl">
                                    <p>
                                        When I founded MediaWings 15 years ago, the digital landscape was a completely different world. Yet, the core principle of business has remained unchanged: the need for genuine, measurable results. 
                                    </p>
                                    <p>
                                        Our journey has always been about more than just creative designs or complex code. It's about understanding the heartbeat of our clients' businesses. We've seen technologies come and go, but our focus on 'Performance First' has been the constant that has guided us and our clients toward success.
                                    </p>
                                    <p>
                                        In today's hyper-competitive market, 'good enough' is no longer an option. Every pixel must serve a purpose, and every strategy must be backed by data. At MediaWings, we push the boundaries of what's possible in marketing and technology to ensure our partners aren't just participating in their industries—they are leading them.
                                    </p>
                                    <p>
                                        As we look toward the future, our commitment remains steadfast: to provide the most innovative, transparent, and result-oriented digital solutions in the world.
                                    </p>
                                    <div className="pt-12">
                                        <p className="font-black text-black uppercase tracking-[0.2em] mb-2">Sincerely,</p>
                                        <p className="text-brand-cyan text-2xl font-black italic">Anil Verma</p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Highlights */}
                            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 italic font-bold text-gray-700">
                                    "Innovation is not just about tools, it's about shifting mindsets."
                                </div>
                                <div className="p-8 bg-brand-cyan/5 rounded-3xl border border-brand-cyan/10 italic font-bold text-brand-cyan">
                                    "Growth happens when precision meets passion."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DirectorsMessagePage;
